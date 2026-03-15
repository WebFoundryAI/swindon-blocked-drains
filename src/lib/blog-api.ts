const CMS_URL = import.meta.env.CMS_URL || '';
const SITE_SLUG = import.meta.env.SITE_SLUG || '';

export interface CMSBlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: any;
  publishDate: string;
  author?: string;
  categories?: string[];
  schemaType?: string;
  featuredImage?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
  };
  site: {
    domain: string;
    siteSlug: string;
    defaultAuthor: string;
  };
}

export interface PayloadResponse {
  docs: CMSBlogPost[];
  totalDocs: number;
  limit: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export async function getPublishedPosts(limit = 50, page = 1): Promise<PayloadResponse> {
  if (!CMS_URL || !SITE_SLUG) {
    return { docs: [], totalDocs: 0, limit, page, totalPages: 0, hasNextPage: false, hasPrevPage: false };
  }

  const params = new URLSearchParams({
    'where[site.siteSlug][equals]': SITE_SLUG,
    'where[_status][equals]': 'published',
    sort: '-publishDate',
    limit: String(limit),
    page: String(page),
    depth: '2',
  });

  try {
    const res = await fetch(`${CMS_URL}/api/posts?${params}`);
    if (!res.ok) {
      console.error(`CMS API error: ${res.status}`);
      return { docs: [], totalDocs: 0, limit, page, totalPages: 0, hasNextPage: false, hasPrevPage: false };
    }
    return res.json();
  } catch (err) {
    console.error('CMS API fetch failed:', err);
    return { docs: [], totalDocs: 0, limit, page, totalPages: 0, hasNextPage: false, hasPrevPage: false };
  }
}

export async function getPostBySlug(slug: string): Promise<CMSBlogPost | null> {
  if (!CMS_URL || !SITE_SLUG) return null;

  const params = new URLSearchParams({
    'where[site.siteSlug][equals]': SITE_SLUG,
    'where[slug][equals]': slug,
    'where[_status][equals]': 'published',
    limit: '1',
    depth: '2',
  });

  try {
    const res = await fetch(`${CMS_URL}/api/posts?${params}`);
    if (!res.ok) return null;
    const data: PayloadResponse = await res.json();
    return data.docs[0] || null;
  } catch {
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  const data = await getPublishedPosts(500);
  return data.docs.map((p) => p.slug);
}
