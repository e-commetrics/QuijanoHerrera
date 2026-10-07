import type { AnchorHTMLAttributes, Ref } from "react";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { ref?: Ref<HTMLAnchorElement> };

/**
 * Plain anchor used for every in-site link.
 *
 * The site is a static export. next/link's client-side navigation depends on per-route
 * RSC payload files whose names do not line up on static hosts (the router requests
 * `__next.<segment>.__PAGE__.txt`, the export writes them in nested folders), so soft
 * navigation 404s and anchor scrolling silently fails. Ordinary page loads of
 * pre-rendered HTML are just as fast here and cannot break. Smooth page changes come
 * from native cross-document view transitions (`@view-transition` in base.css).
 */
export function SiteLink(props: SiteLinkProps) {
  return <a {...props} />;
}
