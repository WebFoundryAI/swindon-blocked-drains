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

```bash
bun run scripts/request-indexing.ts --credentials ./path/to/credentials.json
```

### What It Does

Submits 15 priority pages to Google's Indexing API:
- Home page (`/`)
- Services index and 6 service pages
- Locations index and 6 location pages

Each URL receives a `URL_UPDATED` notification, triggering faster re-crawling than waiting for Googlebot.

### Output

```
📋 Google Indexing API Request
================================

Base URL: https://swindonblockeddrains.co.uk
Total URLs: 15

Authenticating with Google...
✅ Authentication successful

Submitting URLs...

✅ https://swindonblockeddrains.co.uk/
✅ https://swindonblockeddrains.co.uk/services/
✅ https://swindonblockeddrains.co.uk/services/blocked-drains/
...
================================
Results: 15 successful, 0 failed
```

### Notes

- The API allows 200 URLs per day, this script submits 15
- Successful submissions return HTTP 200
- The script exits with status 1 if any submissions fail
- Rate limiting: ~1 request per 100ms (built-in delay not implemented; API handles throttling)
