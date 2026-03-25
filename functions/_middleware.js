// ============================================================
// SWINDON BLOCKED DRAINS - Cloudflare Pages Middleware
// ============================================================
export const onRequest = async (context) => {
  const url = new URL(context.request.url);
  const path = url.pathname;
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.slice(4);
    return Response.redirect(url.toString(), 301);
  }
  if (path.startsWith('/location/') || path === '/location') {
    return new Response('<!DOCTYPE html><html><head><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>',{status:410,statusText:'Gone',headers:{'Content-Type':'text/html; charset=utf-8'}});
  }
  const parts = path.replace(/^\/|\/$/g, '').split('/');
  if (parts[0] === 'locations' && parts.length >= 4) {
    return new Response('<!DOCTYPE html><html><head><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>',{status:410,statusText:'Gone',headers:{'Content-Type':'text/html; charset=utf-8'}});
  }
  const deadPaths = ['/admin', '/admin/', '/login', '/reset-password', '/status'];
  if (deadPaths.includes(path)) {
    return new Response('<!DOCTYPE html><html><head><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>',{status:410,statusText:'Gone',headers:{'Content-Type':'text/html; charset=utf-8'}});
  }
  return context.next();
};
