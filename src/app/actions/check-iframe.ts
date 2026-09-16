"use server";

/**
 * Checks if a URL can be embedded in an iframe by analyzing its security headers.
 * Does a lightweight HEAD request rather than proxying content.
 */
export async function checkIframeSupport(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { 
      method: "HEAD",
      // Set a short timeout as we don't want to hang the UI if the site is down
      signal: AbortSignal.timeout(5000),
      // Don't follow redirects too deeply
      redirect: 'follow'
    });

    const xfo = res.headers.get("x-frame-options");
    const csp = res.headers.get("content-security-policy");

    if (xfo) {
      const normalizedXfo = xfo.toLowerCase();
      if (normalizedXfo === "deny" || normalizedXfo === "sameorigin") {
        return false;
      }
    }

    if (csp) {
      const normalizedCsp = csp.toLowerCase();
      // If there is a frame-ancestors directive and it doesn't explicitly allow us,
      // it's safest to assume it blocks us.
      if (normalizedCsp.includes("frame-ancestors") && !normalizedCsp.includes("*")) {
        return false;
      }
    }

    // Default to true if no restrictive headers are found
    return true;
  } catch (error) {
    // If the server fails to respond, we assume it can't be embedded gracefully
    return false;
  }
}
