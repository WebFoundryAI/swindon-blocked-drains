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
