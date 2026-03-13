import { brand } from './brand';
import type { Service, SubService } from './services';
import type { Location } from './locations';

// Helper: truncate title to stay under 65 chars
function truncTitle(parts: string[], separator = ' | '): string {
  const full = parts.join(separator);
  if (full.length <= 65) return full;
  // Drop last segment (phone) and re-check
  if (parts.length > 2) {
    const shorter = parts.slice(0, -1).join(separator);
    if (shorter.length <= 65) return shorter;
  }
  return full.substring(0, 62) + '...';
}

// Helper: pick the first description variant that fits within maxLen
function pickDesc(variants: string[], maxLen = 155): string {
  for (const v of variants) {
    if (v.length <= maxLen) return v;
  }
  return variants[variants.length - 1];
}

export function homeTitle(): string {
  return `Blocked Drains Swindon | 24/7 Drain Unblocking | ${brand.phone}`;
}

export function homeDescription(): string {
  return `Blocked drains in Swindon? 24/7 emergency drain unblocking, CCTV surveys, jetting & repairs. No call-out charge. Local engineers. Call ${brand.phone}.`;
}

// SERVICE pages (under /services/) — brand-focused, no location duplication
export function serviceTitle(service: Service): string {
  const prefix = `${service.name} Swindon`;
  // If prefix equals brand name, use a different middle segment to avoid duplication
  const middle = prefix === brand.name ? '24/7 Drain Clearing' : brand.name;
  return truncTitle([prefix, middle, brand.phone]);
}

export function serviceDescription(service: Service): string {
  return `Professional ${service.name.toLowerCase()} services in Swindon. Fast response, no call-out charge. Fully insured local engineers. Call ${brand.phone}.`;
}

export function subServiceTitle(service: Service, sub: SubService): string {
  return truncTitle([`${sub.name}`, `${service.name} Swindon`, brand.phone]);
}

export function subServiceDescription(service: Service, sub: SubService): string {
  return pickDesc([
    `Expert ${sub.name.toLowerCase()} services in Swindon from ${brand.name}. Part of our professional ${service.name.toLowerCase()} solutions. No call-out charge. Call ${brand.phone}.`,
    `Expert ${sub.name.toLowerCase()} services in Swindon. Professional ${service.name.toLowerCase()} solutions with no call-out charge. Call ${brand.phone}.`,
  ]);
}

// LOCATION pages — location-focused
export function locationTitle(location: Location): string {
  return truncTitle([`Drain Services ${location.name}`, '24/7 Response', brand.phone]);
}

export function locationDescription(location: Location): string {
  return `Blocked drains in ${location.name}? Local drain unblocking, CCTV surveys & repairs. 24/7 emergency service. No call-out charge. Call ${brand.phone}.`;
}

export function serviceInLocationTitle(service: Service, location: Location): string {
  const withFull = [`${service.name} ${location.name}`, brand.phone].join(' | ');
  if (withFull.length <= 65) return withFull;
  return truncTitle([`${service.name} ${location.shortName}`, brand.phone]);
}

export function serviceInLocationDescription(service: Service, location: Location): string {
  return pickDesc([
    `Professional ${service.name.toLowerCase()} in ${location.name}. Fast, reliable service from local drainage engineers. No call-out charge. Available 24/7. Call ${brand.phone}.`,
    `${service.name} in ${location.name}. Fast, reliable service from local drainage engineers. No call-out charge. Call ${brand.phone}.`,
  ]);
}

export function subServiceInLocationTitle(sub: SubService, service: Service, location: Location): string {
  const withFull = [`${sub.name} ${location.name}`, service.shortName, brand.phone].join(' | ');
  if (withFull.length <= 65) return withFull;
  const withFullNoPhone = [`${sub.name} ${location.name}`, service.shortName].join(' | ');
  if (withFullNoPhone.length <= 65) return withFullNoPhone;
  return truncTitle([`${sub.name} ${location.shortName}`, service.shortName, brand.phone]);
}

export function subServiceInLocationDescription(sub: SubService, service: Service, location: Location): string {
  return pickDesc([
    `${sub.name} services in ${location.name} from ${brand.name}. Fast, expert ${service.name.toLowerCase()} solutions with no call-out charge. Call ${brand.phone}.`,
    `${sub.name} services in ${location.name}. Expert ${service.name.toLowerCase()} solutions with no call-out charge. Call ${brand.phone}.`,
  ]);
}
