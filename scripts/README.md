# Scripts

## request-indexing.ts

Submit URLs to the Google Indexing API to fast-track crawling and indexing.

### Prerequisites

1. **Google Cloud Service Account**
   - Create a service account in Google Cloud Console
   - Download the credentials JSON file
   - Enable the Indexing API
   - Grant the service account access to your site in Google Search Console

2. **Dependencies**
   - `google-auth-library` (automatically installed)
   - `bun` runtime

### Usage

**Basic (uses domain from src/config/brand.ts):**
```bash
bun run scripts/request-indexing.ts --credentials ./gsc-credentials.json
```

**Custom domain:**
```bash
bun run scripts/request-indexing.ts --credentials ./gsc-credentials.json --url https://custom-domain.com
```

### What It Does

Reads service and location slugs from `src/config/` and submits all URLs to Google's Indexing API:
- Home page (`/`)
- Services index and all service pages (`/services/` + `/services/{slug}/`)
- Locations index and all location pages (`/locations/` + `/locations/{slug}/`)

Each URL receives a `URL_UPDATED` notification, triggering faster re-crawling than waiting for Googlebot.

### Output

```
📋 Google Indexing API Request
================================

Base URL: https://swindonblockeddrains.co.uk
Services: 6
Locations: 6
Total URLs: 15

Authenticating with Google...
✅ Authentication successful

Submitting URLs...

✅ https://swindonblockeddrains.co.uk/
✅ https://swindonblockeddrains.co.uk/services/
...
================================
Results: 15 successful, 0 failed
```

### Notes

- The API allows 200 URLs per day, this script submits ~15 (varies by service/location count)
- Successful submissions return HTTP 200
- The script exits with status 1 if any submissions fail
- Automatically reads config from the project's `src/config/` directory
- Works on any cloned site template with the same config structure

## batch-indexing.ts

Submit top-level pages to Google Indexing API for multiple domains at once.

### Usage

```bash
bun run scripts/batch-indexing.ts --credentials ./gsc-credentials.json --domains domain1.com domain2.com domain3.com
```

### What It Does

Submits **3 URLs per domain** (home, services index, locations index):
- `/`
- `/services/`
- `/locations/`

Useful for mass-indexing newly deployed or cloned sites.

### Example

```bash
bun run scripts/batch-indexing.ts \
  --credentials ./creds.json \
  --domains bradfordblockeddrains.co.uk emergencyplumbercardiff247.co.uk emergencyplumbernewcastleupontyne.co.uk
```

Output:
```
📋 Google Indexing API - Batch Request
================================

Domains: 3
URLs per domain: 3 (home, services, locations)
Total URLs: 9

Authenticating with Google...
✅ Authentication successful

Submitting URLs...

✅ https://bradfordblockeddrains.co.uk/
✅ https://bradfordblockeddrains.co.uk/services/
✅ https://bradfordblockeddrains.co.uk/locations/
...
================================
Results: 9 successful, 0 failed
```
