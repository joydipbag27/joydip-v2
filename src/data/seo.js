export const siteConfig = {
  name: "Joydip Bag",
  legalName: "Joydip Bag",
  role: "Backend-focused Full Stack Engineer",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://joydip.in",
  locale: "en_US",
  themeColor: "#D4FF00",
  defaultImage: "/portfolio_og.png",
  profileImage: "/pf-profile.png",
  email: "joydipbag27@gmail.com",
  sameAs: [
    "https://github.com/joydipbag27",
    "https://www.linkedin.com/in/joydipbag27/",
  ],
  skills: [
    "Full Stack Development",
    "Backend Engineering",
    "MERN Stack",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "AWS",
    "Serverless Architecture",
    "System Design",
    "Performance Engineering",
    "Scalable Web Applications",
    "Cost Optimization",
  ],
};

export const routes = {
  "/": {
    title: "Joydip Bag | Full Stack Developer & Backend Engineer Portfolio",
    description:
      "Experimental engineering portfolio of Joydip Bag, a backend-focused full stack developer building scalable web applications, MERN systems, serverless architecture, and performance-focused products.",
    path: "/",
    image: "/portfolio_og.png",
    type: "website",
    keywords:
      "Full Stack Developer, Backend Engineer, MERN Stack Developer, React Developer, Node.js Developer, Backend Portfolio, System Design Portfolio, Performance Engineering, Scalable Web Applications",
  },
  "/work/sastadrive": {
    title: "SastaDrive Case Study | Serverless Architecture & Cost Optimization",
    description:
      "Engineering case study for SastaDrive: a scalable serverless file storage system using direct-to-bucket uploads, CDN delivery, AWS-style architecture, and infrastructure cost optimization.",
    path: "/work/sastadrive",
    image: "/sastadriveSS.png",
    type: "article",
    keywords:
      "Engineering Case Study, Serverless Architecture, Backend Engineer, Performance Engineering, Scalable Web Applications, CDN, AWS Lambda, Cost Optimization",
  },
  "/lab": {
    title: "Engineering Lab | System Design & Performance Experiments",
    description:
      "Interactive engineering lab exploring system trade-offs, request speed, session control, browser-side image processing, scalable architecture, and performance engineering.",
    path: "/lab",
    image: "/portfolio_og.png",
    type: "website",
    keywords:
      "System Design Portfolio, Performance Engineering, Backend Portfolio, Request Speed, Session Control, Engineering Experiments, Scalable Systems",
  },
  "/about": {
    title: "About Joydip Bag | Backend-Focused Full Stack Engineer",
    description:
      "About Joydip Bag, a backend-focused full stack engineer working with React, Node.js, Express, MongoDB, AWS, Redis, system design, and performance-focused architecture.",
    path: "/about",
    image: "/pf-profile.png",
    type: "profile",
    keywords:
      "Backend Engineer, Full Stack Developer, MERN Stack Developer, React Developer, Node.js Developer, AWS, MongoDB, System Design",
  },
};

export const getRouteMeta = (pathname) => routes[pathname] || routes["/"];

export const toAbsoluteUrl = (path, origin = siteConfig.siteUrl) => {
  if (!path) return origin;
  if (/^https?:\/\//i.test(path)) return path;
  return `${origin.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

export const buildBreadcrumbSchema = (route, origin) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: toAbsoluteUrl("/", origin),
    },
    ...(route.path === "/"
      ? []
      : [
          {
            "@type": "ListItem",
            position: 2,
            name:
              route.path === "/work/sastadrive"
                ? "SastaDrive Case Study"
                : route.path === "/lab"
                  ? "Engineering Lab"
                  : "About",
            item: toAbsoluteUrl(route.path, origin),
          },
        ]),
  ],
});

export const buildStructuredData = (route, origin) => {
  const canonicalUrl = toAbsoluteUrl(route.path, origin);
  const imageUrl = toAbsoluteUrl(route.image || siteConfig.defaultImage, origin);

  const person = {
    "@type": "Person",
    "@id": `${origin}#person`,
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: origin,
    image: toAbsoluteUrl(siteConfig.profileImage, origin),
    email: `mailto:${siteConfig.email}`,
    sameAs: siteConfig.sameAs,
    knowsAbout: siteConfig.skills,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${origin}#website`,
    name: `${siteConfig.name} Portfolio`,
    url: origin,
    publisher: { "@id": `${origin}#person` },
    inLanguage: "en",
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": `${origin}#website` },
    about: { "@id": `${origin}#person` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
    },
    inLanguage: "en",
  };

  const graph = [person, website, webpage, buildBreadcrumbSchema(route, origin)];

  if (route.path === "/work/sastadrive") {
    graph.push({
      "@type": "CreativeWork",
      "@id": `${canonicalUrl}#sastadrive`,
      name: "SastaDrive",
      headline: "Serverless file storage optimized for scale and operational efficiency",
      description:
        "A backend engineering case study focused on direct-to-bucket uploads, CDN-backed file delivery, serverless request handling, and infrastructure cost reduction.",
      url: canonicalUrl,
      image: imageUrl,
      creator: { "@id": `${origin}#person` },
      keywords:
        "serverless architecture, backend engineering, direct uploads, CDN, scalable storage, cost optimization, performance engineering",
      programmingLanguage: ["JavaScript", "React", "Node.js"],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};
