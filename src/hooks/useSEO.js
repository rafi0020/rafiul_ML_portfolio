import { useEffect } from "react";

const SITE = "https://rafiulislam.me";
const DEFAULT_TITLE = "MD Rafiul Islam | Applied AI & Research Engineer";

/** Upsert a <meta> tag keyed by either name= or property=. */
function setMeta(keyAttr, keyValue, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${keyAttr}="${keyValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(keyAttr, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Keeps <title>, the meta description and the canonical URL in sync with the
 * current route. Without this every route shares the homepage's metadata,
 * which is what search results and link previews end up showing.
 */
export default function useSEO({ title, description, path } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | MD Rafiul Islam` : DEFAULT_TITLE;
    document.title = fullTitle;

    setMeta("property", "og:title", fullTitle);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "description", description);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:description", description);

    if (path) {
      const url = `${SITE}${path}`;
      setMeta("property", "og:url", url);
      setCanonical(url);
    }
  }, [title, description, path]);
}
