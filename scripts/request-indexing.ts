import { GoogleAuth } from 'google-auth-library';
import { readFileSync } from 'fs';

const INDEXING_API_URL = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

// Service and location slugs
const servicesSlugs = [
  'blocked-drains',
  'drain-unblocking',
  'cctv-drain-surveys',
  'drain-jetting',
  'emergency-drain-services',
  'drain-repairs',
];

const locationsSlugs = [
  'swindon',
  'royal-wootton-bassett',
  'highworth',
  'purton',
  'cricklade',
  'wroughton',
];

async function getAuthToken(credentialsPath: string): Promise<string> {
  const auth = new GoogleAuth({
    keyFile: credentialsPath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const client = await auth.getClient();
  const credentials = await client.getAccessToken();
  return credentials.token!;
}

function buildUrls(baseUrl: string): string[] {
  const urls: string[] = [];

  // Home page
  urls.push(`${baseUrl}/`);

  // Services index
  urls.push(`${baseUrl}/services/`);

  // Service pages
  servicesSlugs.forEach((slug) => {
    urls.push(`${baseUrl}/services/${slug}/`);
  });

  // Locations index
  urls.push(`${baseUrl}/locations/`);

  // Location pages
  locationsSlugs.forEach((slug) => {
    urls.push(`${baseUrl}/locations/${slug}/`);
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

  if (credentialsIndex === -1 || credentialsIndex === args.length - 1) {
    console.error(
      'Error: --credentials argument required with path to credentials JSON'
    );
    console.error(
      'Usage: bun run scripts/request-indexing.ts --credentials ./path/to/credentials.json'
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

  const baseUrl = 'https://swindonblockeddrains.co.uk';
  const urls = buildUrls(baseUrl);

  console.log(`\n📋 Google Indexing API Request`);
  console.log(`================================\n`);
  console.log(`Base URL: ${baseUrl}`);
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
