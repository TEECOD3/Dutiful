export const siteConfig = {
  name: "Dutiful",
  description:
    "Eliminate manual work and save time by listing your business or service on the best business directory in Nigeria.",
  icon: "/Svg/Logo.svg",
  keyWords: ["Next.js", "React", "Tailwind CSS"],

  routes: [
    {
      name: "Business Directory",
      link: "/",
    },
    {
      name: "Features",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
