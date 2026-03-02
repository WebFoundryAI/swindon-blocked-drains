import { brand } from './brand';
import type { Service, SubService } from './services';
import type { Location } from './locations';

export function homeTitle(): string {
  return `Blocked Drains Swindon | 24/7 Drain Unblocking | ${brand.phone}`;
}

export function homeDescription(): string {
  return 'Blocked drains in Swindon? 24/7 emergency drain unblocking, CCTV surveys, jetting & repairs. No call-out charge. Local engineers. Call 01793 487489.';
}

export function serviceTitle(service: Service): string {
  return `${service.name} Swindon | ${brand.name} | ${brand.phone}`;
}

export function serviceDescription(service: Service): string {
  return `Professional ${service.name.toLowerCase()} services in Swindon. Fast response, no call-out charge. Fully insured local engineers. Call ${brand.phone}.`;
}

export function subServiceTitle(service: Service, sub: SubService): string {
  return `${sub.name} Swindon | ${service.name} | ${brand.phone}`;
}

export function subServiceDescription(service: Service, sub: SubService): string {
  return `Expert ${sub.name.toLowerCase()} services in Swindon. Part of our ${service.name.toLowerCase()} solutions. No call-out charge. Call ${brand.phone}.`;
}

export function locationTitle(location: Location): string {
  return `Blocked Drains ${location.name} | 24/7 Drain Services | ${brand.phone}`;
}

export function locationDescription(location: Location): string {
  return `Blocked drains in ${location.name}? Local drain unblocking, CCTV surveys & repairs. 24/7 emergency service. No call-out charge. Call ${brand.phone}.`;
}

export function serviceInLocationTitle(service: Service, location: Location): string {
  return `${service.name} ${location.name} | ${brand.phone}`;
}

export function serviceInLocationDescription(service: Service, location: Location): string {
  return `${service.name} in ${location.name}. Fast, reliable service from local drainage engineers. No call-out charge. Call ${brand.phone}.`;
}

export function subServiceInLocationTitle(sub: SubService, service: Service, location: Location): string {
  return `${sub.name} ${location.name} | ${service.name} | ${brand.phone}`;
}

export function subServiceInLocationDescription(sub: SubService, service: Service, location: Location): string {
  return `${sub.name} services in ${location.name}. Expert ${service.name.toLowerCase()} solutions. No call-out charge. Call ${brand.phone}.`;
}
