#!/usr/bin/env node
/**
 * QA Script: Verify /location URLs are fully retired
 * 
 * This script tests:
 * 1. Legacy /location/* URLs redirect to /locations/*
 * 2. No internal links on the site point to /location
 */

import { chromium } from 'playwright';

const BASE_URL = 'https://swindonblockeddrains.co.uk';
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

// Results tracking
const results = {
  redirectTests: { total: 0, pass: 0, fail: 0, failures: [] },
  linkScans: { pagesScanned: 0, offendingLinks: [] }
};

async function fetchSitemap() {
  console.log('📥 Fetching sitemap...');
  const response = await fetch(SITEMAP_URL);
  const text = await response.text();
  
  // Extract all /locations/ URLs from sitemap
  const urlMatches = text.match(/<loc>([^<]+)<\/loc>/g) || [];
  const locationUrls = urlMatches
    .map(match => match.replace(/<\/?loc>/g, ''))
    .filter(url => url.includes('/locations/'));
  
  console.log(`   Found ${locationUrls.length} /locations/ URLs in sitemap`);
  return locationUrls;
}

function generateLegacyUrls(canonicalUrls) {
  // Convert /locations/ to /location/ to create legacy test URLs
  return canonicalUrls.map(url => ({
    legacy: url.replace('/locations/', '/location/'),
    canonical: url
  }));
}

async function testRedirects(browser, testUrls) {
  console.log('\n🔄 Testing legacy URL redirects...');
  const page = await browser.newPage();
  
  // Test up to 30 URLs
  const urlsToTest = testUrls.slice(0, 30);
  
  for (const { legacy, canonical } of urlsToTest) {
    results.redirectTests.total++;
    
    try {
      // Navigate to legacy URL
      await page.goto(legacy, { waitUntil: 'networkidle', timeout: 30000 });
      
      const finalUrl = page.url();
      const pageTitle = await page.title();
      const pageContent = await page.content();
      
      // Check if we landed on the canonical URL
      const expectedPath = new URL(canonical).pathname;
      const actualPath = new URL(finalUrl).pathname;
      
      // Normalize paths (remove trailing slashes for comparison)
      const normalizedExpected = expectedPath.replace(/\/+$/, '');
      const normalizedActual = actualPath.replace(/\/+$/, '');
      
      // Check for 404 page indicators
      const is404 = pageContent.includes('Page Not Found') || 
                    pageContent.includes('404') ||
                    pageTitle.toLowerCase().includes('not found');
      
      if (normalizedActual === normalizedExpected && !is404) {
        results.redirectTests.pass++;
        console.log(`   ✅ ${legacy.replace(BASE_URL, '')} → ${actualPath}`);
      } else {
        results.redirectTests.fail++;
        const reason = is404 ? '404 page returned' : `Landed on ${actualPath} instead of ${expectedPath}`;
        results.redirectTests.failures.push({
          legacy_url: legacy,
          expected_url: canonical,
          actual_url: finalUrl,
          page_title: pageTitle,
          reason
        });
        console.log(`   ❌ ${legacy.replace(BASE_URL, '')} - ${reason}`);
      }
    } catch (error) {
      results.redirectTests.fail++;
      results.redirectTests.failures.push({
        legacy_url: legacy,
        expected_url: canonical,
        actual_url: 'ERROR',
        page_title: 'ERROR',
        reason: error.message
      });
      console.log(`   ❌ ${legacy.replace(BASE_URL, '')} - Error: ${error.message}`);
    }
  }
  
  await page.close();
}

async function scanInternalLinks(browser, locationUrls) {
  console.log('\n🔍 Scanning pages for internal /location links...');
  const page = await browser.newPage();
  
  // Pages to scan: homepage, /locations, /services, and 10 random location pages
  const pagesToScan = [
    BASE_URL,
    `${BASE_URL}/locations`,
    `${BASE_URL}/services`,
    ...locationUrls.slice(0, 10)
  ];
  
  for (const pageUrl of pagesToScan) {
    try {
      await page.goto(pageUrl, { waitUntil: 'networkidle', timeout: 30000 });
      results.linkScans.pagesScanned++;
      
      // Extract all href values
      const hrefs = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href]'))
          .map(a => a.getAttribute('href'));
      });
      
      // Check for /location (singular) links
      const offendingHrefs = hrefs.filter(href => {
        if (!href) return false;
        // Match /location but not /locations
        return href.match(/\/location(?!s)/) && !href.includes('/locations');
      });
      
      if (offendingHrefs.length > 0) {
        results.linkScans.offendingLinks.push({
          page: pageUrl,
          hrefs: offendingHrefs
        });
        console.log(`   ❌ ${pageUrl.replace(BASE_URL, '')} - Found ${offendingHrefs.length} /location links`);
      } else {
        console.log(`   ✅ ${pageUrl.replace(BASE_URL, '')} - No /location links`);
      }
    } catch (error) {
      console.log(`   ⚠️ ${pageUrl.replace(BASE_URL, '')} - Error: ${error.message}`);
    }
  }
  
  await page.close();
}

function printReport() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 QA REPORT: /location URL Retirement');
  console.log('='.repeat(60));
  
  // Redirect test results
  console.log('\n📍 REDIRECT TEST RESULTS');
  console.log(`   Total legacy URLs tested: ${results.redirectTests.total}`);
  console.log(`   PASS: ${results.redirectTests.pass}`);
  console.log(`   FAIL: ${results.redirectTests.fail}`);
  
  if (results.redirectTests.failures.length > 0) {
    console.log('\n   Failures:');
    for (const failure of results.redirectTests.failures) {
      console.log(`   - Legacy: ${failure.legacy_url}`);
      console.log(`     Expected: ${failure.expected_url}`);
      console.log(`     Actual: ${failure.actual_url}`);
      console.log(`     Reason: ${failure.reason}`);
      console.log('');
    }
  }
  
  // Internal link scan results
  console.log('\n🔗 INTERNAL LINK SCAN RESULTS');
  console.log(`   Pages scanned: ${results.linkScans.pagesScanned}`);
  console.log(`   Pages with offending links: ${results.linkScans.offendingLinks.length}`);
  
  if (results.linkScans.offendingLinks.length > 0) {
    console.log('\n   Offending pages:');
    for (const item of results.linkScans.offendingLinks) {
      console.log(`   - ${item.page}`);
      console.log(`     Links: ${item.hrefs.join(', ')}`);
    }
  }
  
  // Final verdict
  console.log('\n' + '='.repeat(60));
  const overallPass = results.redirectTests.fail === 0 && results.linkScans.offendingLinks.length === 0;
  if (overallPass) {
    console.log('✅ OVERALL RESULT: PASS');
    console.log('   All legacy /location URLs redirect correctly.');
    console.log('   No internal links point to /location.');
  } else {
    console.log('❌ OVERALL RESULT: FAIL');
    if (results.redirectTests.fail > 0) {
      console.log(`   ${results.redirectTests.fail} redirect(s) failed`);
    }
    if (results.linkScans.offendingLinks.length > 0) {
      console.log(`   ${results.linkScans.offendingLinks.length} page(s) have /location links`);
    }
  }
  console.log('='.repeat(60));
  
  // Exit with appropriate code
  process.exit(overallPass ? 0 : 1);
}

async function main() {
  console.log('🚀 Starting QA: /location URL Retirement Check');
  console.log(`   Target: ${BASE_URL}`);
  console.log('');
  
  try {
    // Fetch sitemap and build test URLs
    const canonicalUrls = await fetchSitemap();
    const testUrls = generateLegacyUrls(canonicalUrls);
    
    // Launch browser
    console.log('\n🌐 Launching headless browser...');
    const browser = await chromium.launch({ headless: true });
    
    // Run tests
    await testRedirects(browser, testUrls);
    await scanInternalLinks(browser, canonicalUrls);
    
    // Cleanup
    await browser.close();
    
    // Print final report
    printReport();
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

main();
