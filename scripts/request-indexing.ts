import { GoogleAuth } from 'google-auth-library';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const INDEXING_API_URL = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

async function loadConfig(configDir: string) {
  try {
    // Load services config
    const servicesPath = resolve(configDir, 'src/config/services.ts');
    const servicesContent = readFileSync(servicesPath, 'utf-8');
    const servicesMatch = servicesContent.match(/slug:\s*['"]([^'"]+)['"]/g);
    const servicesSlugs = servicesMatch
      ? servicesMatch.map((m) => m.match(/['"]([^'"]+)['"]/)[1])
      : [];

    // Load locations config
    const locationsPath = resolve(configDir, 'src/config/locations.ts');
    const locationsContent = readFileSync(locationsPath, 'utf-8');
    const locationsMatch = locationsContent.match(/slug:\s*['"]([^'"]+)['"]/g);
    const locationsSlugs = locationsMatch
      ? locationsMatch.map((m) => m.match(/['"]([^'"]+)['"]/)[1])
      : [];

    // Filter to only top-level slugs (not sub-services)
    const uniqueServiceSlugs = [...new Set(servicesSlugs)].filter((s) => {
      // Simple heuristic: service names don't have hyphens after first word typically,
      // but let's just take the first occurrence of each
      return s.match(/^[a-z-]+$/);
    });

    return {
      services: [...new Set(servicesSlugs)].slice(0, 6),
      locations: [...new Set(locationsSlugs)],
    };
  } catch (error) {
    console.error('Error loading config:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

async function getAuthToken(credentialsPath: string): Promise<string> {
  const auth = new GoogleAuth({
    keyFile: credentialsPath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const client = await auth.getClient();
  const credentials = await client.getAccessToken();
  return credentials.token!;
}

function buildUrls(baseUrl: string, services: string[], locations: string[]): string[] {
  const urls: string[] = [];

  // Home page
  urls.push(`${baseUrl}/`);

  // Services index
  urls.push(`${baseUrl}/services/`);

  // Service pages
  services.forEach((slug) => {
    urls.push(`${baseUrl}/services/${slug}/`);
  });

  // Locations index
  urls.push(`${baseUrl}/locations/`);

  // Location pages
  locations.forEach((slug) => {
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
  const urlIndex = args.indexOf('--url');

  if (credentialsIndex === -1 || credentialsIndex === args.length - 1) {
    console.error(
      'Error: --credentials argument required with path to credentials JSON'
    );
    console.error(
      'Usage: bun run scripts/request-indexing.ts --credentials ./path/to/credentials.json [--url https://domain.com]'
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

  let baseUrl: string;

  if (urlIndex !== -1 && urlIndex < args.length - 1) {
    baseUrl = args[urlIndex + 1];
  } else {
    // Load from brand config
    try {
      const brandPath = resolve(process.cwd(), 'src/config/brand.ts');
      const brandContent = readFileSync(brandPath, 'utf-8');
      const urlMatch = brandContent.match(/url:\s*['"]([^'"]+)['"]/);
      baseUrl = urlMatch ? urlMatch[1] : 'https://example.com';
    } catch {
      baseUrl = 'https://example.com';
    }
  }

  // Load config
  const config = await loadConfig(process.cwd());

  const urls = buildUrls(baseUrl, config.services, config.locations);

  console.log(`\n📋 Google Indexing API Request`);
  console.log(`================================\n`);
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Services: ${config.services.length}`);
  console.log(`Locations: ${config.locations.length}`);
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
