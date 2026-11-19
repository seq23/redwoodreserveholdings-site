// www.redwoodreserveholdings.com -> apex, path and query kept.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "www.redwoodreserveholdings.com") {
    url.hostname = "redwoodreserveholdings.com";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
