import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  buildStructuredData,
  getRouteMeta,
  siteConfig,
  toAbsoluteUrl,
} from "../data/seo";

const upsertMeta = (selector, create, attrs) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(create);
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null) element.setAttribute(key, value);
  });
};

const removeJsonLd = () => {
  document
    .querySelectorAll('script[data-seo-jsonld="true"]')
    .forEach((node) => node.remove());
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = getRouteMeta(pathname);
    const origin = (window.location.origin || siteConfig.siteUrl).replace(/\/$/, "");
    const canonicalUrl = toAbsoluteUrl(route.path, origin);
    const imageUrl = toAbsoluteUrl(route.image || siteConfig.defaultImage, origin);

    document.title = route.title;

    upsertMeta('meta[name="description"]', "meta", {
      name: "description",
      content: route.description,
    });
    upsertMeta('meta[name="keywords"]', "meta", {
      name: "keywords",
      content: route.keywords,
    });
    upsertMeta('meta[name="author"]', "meta", {
      name: "author",
      content: siteConfig.name,
    });
    upsertMeta('meta[name="theme-color"]', "meta", {
      name: "theme-color",
      content: siteConfig.themeColor,
    });
    upsertMeta('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: canonicalUrl,
    });

    upsertMeta('meta[property="og:title"]', "meta", {
      property: "og:title",
      content: route.title,
    });
    upsertMeta('meta[property="og:description"]', "meta", {
      property: "og:description",
      content: route.description,
    });
    upsertMeta('meta[property="og:type"]', "meta", {
      property: "og:type",
      content: route.type,
    });
    upsertMeta('meta[property="og:url"]', "meta", {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', "meta", {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[property="og:site_name"]', "meta", {
      property: "og:site_name",
      content: `${siteConfig.name} Portfolio`,
    });
    upsertMeta('meta[property="og:locale"]', "meta", {
      property: "og:locale",
      content: siteConfig.locale,
    });

    upsertMeta('meta[name="twitter:card"]', "meta", {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', "meta", {
      name: "twitter:title",
      content: route.title,
    });
    upsertMeta('meta[name="twitter:description"]', "meta", {
      name: "twitter:description",
      content: route.description,
    });
    upsertMeta('meta[name="twitter:image"]', "meta", {
      name: "twitter:image",
      content: imageUrl,
    });

    removeJsonLd();
    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.dataset.seoJsonld = "true";
    jsonLd.textContent = JSON.stringify(buildStructuredData(route, origin));
    document.head.appendChild(jsonLd);
  }, [pathname]);

  return null;
};

export default SEO;
