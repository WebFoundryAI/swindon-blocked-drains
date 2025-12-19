import { BRAND } from "@/config/brand";
import { getServiceBySlug, getSubServiceBySlug } from "@/config/services";
import { getLocationBySlug } from "@/config/locations";

const BASE_URL = `https://${BRAND.domain}`;
const PHONE_DISPLAY = "01793 487489";

// Normalize slug to human-readable title case
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Ensure trailing slash consistency
export function normalizePathWithTrailingSlash(path: string): string {
  if (path === "/" || path === "") return "/";
  // Remove any existing trailing slash, then add one
  return path.replace(/\/+$/, "") + "/";
}

// Get canonical URL for current path
export function getCanonicalUrl(pathname: string): string {
  const normalizedPath = normalizePathWithTrailingSlash(pathname);
  return `${BASE_URL}${normalizedPath}`;
}

// Routes that should never be indexed
const NOINDEX_ROUTES = [
  "/admin",
  "/login",
  "/reset-password",
  "/auth",
  "/dashboard",
];

export function shouldNoIndex(pathname: string): boolean {
  const normalizedPath = pathname.toLowerCase();
  return NOINDEX_ROUTES.some(
    (route) => normalizedPath === route || normalizedPath.startsWith(`${route}/`)
  );
}

export interface SEOMeta {
  title: string;
  description: string;
  canonicalUrl: string;
  noIndex: boolean;
  ogImage?: string;
}

export interface RouteParams {
  locationSlug?: string;
  serviceSlug?: string;
  subServiceSlug?: string;
  slug?: string; // for blog posts
}

// Central SEO generator based on route pattern and params
export function getSeoMeta(pathname: string, params: RouteParams = {}): SEOMeta {
  const canonicalUrl = getCanonicalUrl(pathname);
  const noIndex = shouldNoIndex(pathname);

  // Home page
  if (pathname === "/" || pathname === "") {
    return {
      title: "Blocked Drains Swindon – 24/7 Local Drain Unblocking",
      description: `Professional drain unblocking in ${BRAND.serviceAreaLabel}. Emergency call-outs, CCTV surveys, drain repairs. No call-out fee, fixed pricing. Covering Old Town, West Swindon, Wichelstowe & surrounding areas. Call ${PHONE_DISPLAY}`,
      canonicalUrl,
      noIndex,
      ogImage: `${BASE_URL}/og/swindonblockeddrains-og.jpg`,
    };
  }

  // Services listing
  if (pathname === "/services" || pathname === "/services/") {
    return {
      title: `Drainage Services | ${BRAND.brandName}`,
      description: `Complete drainage services in ${BRAND.serviceAreaLabel}. Blocked drains, CCTV surveys, drain jetting, and 24/7 emergency callouts. No call-out fee. Call ${PHONE_DISPLAY}`,
      canonicalUrl,
      noIndex,
    };
  }

  // Service detail: /services/:serviceSlug
  if (pathname.match(/^\/services\/[^\/]+\/?$/) && params.serviceSlug) {
    const service = getServiceBySlug(params.serviceSlug);
    const serviceName = service?.name || slugToTitle(params.serviceSlug);
    return {
      title: `${serviceName} | ${BRAND.brandName}`,
      description: `${service?.description || `Professional ${serviceName.toLowerCase()} services.`} Available across ${BRAND.serviceAreaLabel}. Call ${PHONE_DISPLAY}`,
      canonicalUrl,
      noIndex,
    };
  }

  // Sub-service detail: /services/:serviceSlug/:subServiceSlug
  if (pathname.match(/^\/services\/[^\/]+\/[^\/]+\/?$/) && params.serviceSlug && params.subServiceSlug) {
    const service = getServiceBySlug(params.serviceSlug);
    const subService = getSubServiceBySlug(params.serviceSlug, params.subServiceSlug);
    const serviceName = service?.name || slugToTitle(params.serviceSlug);
    const subServiceName = subService?.name || slugToTitle(params.subServiceSlug);

    // Custom SEO for specific sub-services
    if (params.subServiceSlug === "blocked-sink") {
      return {
        title: "Blocked Sink Swindon | Fast Local Unblocking",
        description: "Blocked sink in Swindon? Our local drainage experts clear kitchen and bathroom sinks fast. No call-out fee, fixed pricing. Call now for same-day service.",
        canonicalUrl,
        noIndex,
      };
    }

    if (params.subServiceSlug === "domestic-jetting") {
      return {
        title: "Domestic Drain Jetting Swindon | Stubborn Blockages Cleared",
        description: "High-pressure drain jetting for Swindon homes. Clears fat, grease, and root ingress safely. Professional equipment, no mess. Book your jetting service today.",
        canonicalUrl,
        noIndex,
      };
    }

    return {
      title: `${subServiceName} | ${serviceName} | ${BRAND.brandName}`,
      description: `${subService?.description || `Professional ${subServiceName.toLowerCase()} services.`} Fast response, fixed pricing. Call ${PHONE_DISPLAY}`,
      canonicalUrl,
      noIndex,
    };
  }

  // Locations listing
  if (pathname === "/locations" || pathname === "/locations/") {
    return {
      title: `Areas We Cover | ${BRAND.brandName}`,
      description: `${BRAND.brandName} provides expert drainage services throughout ${BRAND.serviceAreaLabel}. Find your local area for fast, professional drain unblocking. Call ${PHONE_DISPLAY}`,
      canonicalUrl,
      noIndex,
    };
  }

  // Location detail: /location/:locationSlug
  if (pathname.match(/^\/location\/[^\/]+\/?$/) && params.locationSlug) {
    const location = getLocationBySlug(params.locationSlug);
    const locationName = location?.name || slugToTitle(params.locationSlug);
    const county = location?.countyOrRegion || "Wiltshire";
    return {
      title: `Drain Services in ${locationName} | ${BRAND.brandName}`,
      description: `Professional drainage services in ${locationName}, ${county}. 24/7 emergency drain unblocking, CCTV surveys, and repairs. Call ${PHONE_DISPLAY}`,
      canonicalUrl,
      noIndex,
    };
  }

  // Location + Service: /location/:locationSlug/:serviceSlug
  if (pathname.match(/^\/location\/[^\/]+\/[^\/]+\/?$/) && params.locationSlug && params.serviceSlug && !params.subServiceSlug) {
    const location = getLocationBySlug(params.locationSlug);
    const service = getServiceBySlug(params.serviceSlug);
    const locationName = location?.name || slugToTitle(params.locationSlug);
    const serviceName = service?.name || slugToTitle(params.serviceSlug);
    return {
      title: `${serviceName} ${locationName} | ${BRAND.brandName}`,
      description: `${serviceName} in ${locationName}. Fast response, fixed pricing, no call-out fee. Call ${PHONE_DISPLAY}`,
      canonicalUrl,
      noIndex,
    };
  }

  // Location + Service + SubService: /location/:locationSlug/:serviceSlug/:subServiceSlug
  if (pathname.match(/^\/location\/[^\/]+\/[^\/]+\/[^\/]+\/?$/) && params.locationSlug && params.serviceSlug && params.subServiceSlug) {
    const location = getLocationBySlug(params.locationSlug);
    const service = getServiceBySlug(params.serviceSlug);
    const subService = getSubServiceBySlug(params.serviceSlug, params.subServiceSlug);
    const locationName = location?.name || slugToTitle(params.locationSlug);
    const serviceName = service?.name || slugToTitle(params.serviceSlug);
    const subServiceName = subService?.name || slugToTitle(params.subServiceSlug);
    return {
      title: `${subServiceName} in ${locationName} | ${serviceName}`,
      description: `${subServiceName} help in ${locationName}. 24/7 emergency support, fixed pricing. Call ${PHONE_DISPLAY}`,
      canonicalUrl,
      noIndex,
    };
  }

  // About page
  if (pathname === "/about" || pathname === "/about/") {
    return {
      title: `About Us | ${BRAND.brandName}`,
      description: `Learn about ${BRAND.brandName}, your trusted drainage specialists in ${BRAND.serviceAreaLabel}. Reliable, professional, and available 24/7. Call ${PHONE_DISPLAY}`,
      canonicalUrl,
      noIndex,
    };
  }

  // Contact page
  if (pathname === "/contact" || pathname === "/contact/") {
    return {
      title: `Contact Us | ${BRAND.brandName}`,
      description: `Get in touch with ${BRAND.brandName} for drainage services in ${BRAND.serviceAreaLabel}. Call ${PHONE_DISPLAY} or use our contact form for a free quote.`,
      canonicalUrl,
      noIndex,
    };
  }

  // FAQ page
  if (pathname === "/faq" || pathname === "/faq/") {
    return {
      title: `FAQs | ${BRAND.brandName}`,
      description: `Common questions about drainage services in ${BRAND.serviceAreaLabel}. Find answers about blocked drains, costs, and emergency callouts.`,
      canonicalUrl,
      noIndex,
    };
  }

  // Blog listing
  if (pathname === "/blog" || pathname === "/blog/") {
    return {
      title: `Drainage Tips & Advice | ${BRAND.brandName} Blog`,
      description: `Expert drainage advice, tips, and guides from ${BRAND.brandName}. Learn how to prevent blocked drains and maintain your drainage system.`,
      canonicalUrl,
      noIndex,
    };
  }

  // Blog post: /blog/:slug
  if (pathname.match(/^\/blog\/[^\/]+\/?$/) && params.slug) {
    // Blog posts get their SEO from database, this is a fallback
    const postTitle = slugToTitle(params.slug);
    return {
      title: `${postTitle} | ${BRAND.brandName} Blog`,
      description: `Read our article about ${postTitle.toLowerCase()}. Expert drainage advice from ${BRAND.brandName}.`,
      canonicalUrl,
      noIndex,
    };
  }

  // Sitemap page
  if (pathname === "/sitemap" || pathname === "/sitemap/") {
    return {
      title: `Sitemap | ${BRAND.brandName}`,
      description: `Complete sitemap for ${BRAND.brandName}. Browse all our drainage services, locations, and blog posts.`,
      canonicalUrl,
      noIndex,
    };
  }

  // Privacy policy
  if (pathname === "/privacy" || pathname === "/privacy/") {
    return {
      title: `Privacy Policy | ${BRAND.brandName}`,
      description: `Privacy policy for ${BRAND.brandName}. Learn how we collect, use, and protect your personal information.`,
      canonicalUrl,
      noIndex,
    };
  }

  // Terms
  if (pathname === "/terms" || pathname === "/terms/") {
    return {
      title: `Terms of Service | ${BRAND.brandName}`,
      description: `Terms and conditions for using ${BRAND.brandName} drainage services.`,
      canonicalUrl,
      noIndex,
    };
  }

  // Cookies
  if (pathname === "/cookies" || pathname === "/cookies/") {
    return {
      title: `Cookie Policy | ${BRAND.brandName}`,
      description: `Cookie policy for ${BRAND.brandName}. Learn about the cookies we use on our website.`,
      canonicalUrl,
      noIndex,
    };
  }

  // Admin and auth routes - noindex
  if (shouldNoIndex(pathname)) {
    return {
      title: `Admin | ${BRAND.brandName}`,
      description: "Admin area",
      canonicalUrl,
      noIndex: true,
    };
  }

  // Default fallback
  return {
    title: BRAND.brandName,
    description: `Professional drainage services in ${BRAND.serviceAreaLabel}. Call ${PHONE_DISPLAY}`,
    canonicalUrl,
    noIndex,
  };
}

// Generate all indexable URLs for sitemap
export function getAllIndexableUrls(): Array<{
  url: string;
  priority: string;
  changefreq: string;
}> {
  const urls: Array<{ url: string; priority: string; changefreq: string }> = [];

  // Import here to avoid circular dependencies
  const { SERVICES } = require("@/config/services");
  const { LOCATIONS } = require("@/config/locations");

  // Static pages
  urls.push({ url: "/", priority: "1.0", changefreq: "daily" });
  urls.push({ url: "/services/", priority: "0.9", changefreq: "weekly" });
  urls.push({ url: "/locations/", priority: "0.9", changefreq: "weekly" });
  urls.push({ url: "/about/", priority: "0.7", changefreq: "monthly" });
  urls.push({ url: "/contact/", priority: "0.8", changefreq: "monthly" });
  urls.push({ url: "/faq/", priority: "0.6", changefreq: "monthly" });
  urls.push({ url: "/blog/", priority: "0.7", changefreq: "daily" });
  urls.push({ url: "/sitemap/", priority: "0.3", changefreq: "weekly" });
  urls.push({ url: "/privacy/", priority: "0.3", changefreq: "yearly" });
  urls.push({ url: "/terms/", priority: "0.3", changefreq: "yearly" });
  urls.push({ url: "/cookies/", priority: "0.3", changefreq: "yearly" });

  // Service pages
  for (const service of SERVICES) {
    urls.push({
      url: `/services/${service.slug}/`,
      priority: "0.8",
      changefreq: "weekly",
    });

    // Sub-service pages
    if (service.subServices) {
      for (const sub of service.subServices) {
        urls.push({
          url: `/services/${service.slug}/${sub.slug}/`,
          priority: "0.7",
          changefreq: "weekly",
        });
      }
    }
  }

  // Location pages
  for (const location of LOCATIONS) {
    urls.push({
      url: `/location/${location.slug}/`,
      priority: "0.8",
      changefreq: "weekly",
    });

    // Location + Service pages
    for (const service of SERVICES) {
      urls.push({
        url: `/location/${location.slug}/${service.slug}/`,
        priority: "0.7",
        changefreq: "weekly",
      });

      // Location + Service + SubService pages
      if (service.subServices) {
        for (const sub of service.subServices) {
          urls.push({
            url: `/location/${location.slug}/${service.slug}/${sub.slug}/`,
            priority: "0.6",
            changefreq: "weekly",
          });
        }
      }
    }
  }

  return urls;
}
