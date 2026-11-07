/**
 * Entry Worker in front of the static assets. Its only job: one canonical host.
 * `www.tblflow.com` answered 200 with the same pages as `tblflow.com`, a
 * duplicate Google had to sort out on its own; `_redirects` cannot match a
 * host, so the 301 lives here. Everything else goes to the assets binding,
 * which still applies `_headers`, `_redirects` and the 404 page.
 *
 * @type {ExportedHandler<{ ASSETS: Fetcher }>}
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.tblflow.com') {
      url.hostname = 'tblflow.com';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
