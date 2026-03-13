import { GoogleAuth } from 'google-auth-library';
import { readFileSync } from 'fs';

const INDEXING_API_URL = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

async function getAuthToken(credentialsPath: string): Promise<string> {
  const auth = new GoogleAuth({
    keyFile: credentialsPath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const client = await auth.getClient();
  const credentials = await client.getAccessToken();
  return credentials.token!;
}

function buildUrls(domains: string[]): string[] {
  const urls: string[] = [];

  domains.forEach((domain) => {
    const baseUrl = domain.startsWith('http') ? domain : `https://${domain}`;
    urls.push(`${baseUrl}/`);
    urls.push(`${baseUrl}/services/`);
    urls.push(`${baseUrl}/locations/`);
  });

  return urls;
}

async function submitUrlToIndexingApi(
  url: string,
  token: string
): Promise<{ url: string; status: number; success: boolean }> {
  try {
    const response = await fetch(INDEXING_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        url,
        type: 'URL_UPDATED',
      }),
    });

    return {
      url,
      status: response.status,
      success: response.status === 200,
    };
  } catch (error) {
    return {
      url,
      status: 0,
      success: false,
    };
  }
}

async function main() {
  const args = Bun.argv.slice(2);
  const credentialsIndex = args.indexOf('--credentials');
  const domainsIndex = args.indexOf('--domains');

  if (credentialsIndex === -1 || credentialsIndex === args.length - 1) {
    console.error('Error: --credentials argument required');
    console.error(
      'Usage: bun run scripts/batch-indexing.ts --credentials ./path/to/credentials.json --domains domain1.com domain2.com domain3.com'
    );
    process.exit(1);
  }

  if (domainsIndex === -1 || domainsIndex === args.length - 1) {
    console.error('Error: --domains argument required with at least one domain');
    console.error(
      'Usage: bun run scripts/batch-indexing.ts --credentials ./path/to/credentials.json --domains domain1.com domain2.com domain3.com'
    );
    process.exit(1);
  }

  const credentialsPath = args[credentialsIndex + 1];

  // Verify credentials file exists
  try {
    readFileSync(credentialsPath);
  } catch (error) {
    console.error(`Error: Could not read credentials file: ${credentialsPath}`);
    process.exit(1);
  }

  // Extract domains (everything after --domains until end or next flag)
  const domains: string[] = [];
  for (let i = domainsIndex + 1; i < args.length; i++) {
    if (args[i].startsWith('--')) break;
    domains.push(args[i]);
  }

  if (domains.length === 0) {
    console.error('Error: No domains provided');
    process.exit(1);
  }

  const urls = buildUrls(domains);

  console.log(`\n📋 Google Indexing API - Batch Request`);
  console.log(`================================\n`);
  console.log(`Domains: ${domains.length}`);
  console.log(`URLs per domain: 3 (home, services, locations)`);
  console.log(`Total URLs: ${urls.length}\n`);
  console.log('Authenticating with Google...');

  let token: string;
  try {
    token = await getAuthToken(credentialsPath);
  } catch (error) {
    console.error('Error: Failed to authenticate with Google');
    console.error(`Details: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }

  console.log('✅ Authentication successful\n');
  console.log('Submitting URLs...\n');

  let successCount = 0;
  let failureCount = 0;

  for (const url of urls) {
    const result = await submitUrlToIndexingApi(url, token);

    if (result.success) {
      console.log(`✅ ${result.url}`);
      successCount++;
    } else {
      console.log(`❌ ${result.url} (HTTP ${result.status})`);
      failureCount++;
    }
  }

  console.log(`\n================================`);
  console.log(`Results: ${successCount} successful, ${failureCount} failed`);

  if (failureCount > 0) {
    process.exit(1);
  }
}

main();
