export const NavLinksData = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us-page" },

  {
    label: "B. Tech Projects",
    path: "/b-tech-page",
    dropdown: true,
    menu: [
      {
        title: "CSE",
        branch: "cse",
        links: [
          { label: "Major Projects", slug: "major-projects" },
          { label: "Minor Projects", slug: "minor-projects" },
        ],
      },
      {
        title: "ECE",
        branch: "ece",
        links: [
          { label: "Major Projects", slug: "major-projects" },
          { label: "Minor Projects", slug: "minor-projects" },
        ],
      },
      { title: "EEE", branch: "eee", links: [] },
    ],
  },

  {
    label: "M. Tech Projects",
    path: "/m-tech-page",
    dropdown: true,
    menu: [
      {
        title: "CSE",
        branch: "cse",
        links: [
          { label: "Major Projects", slug: "major-projects" },
          { label: "Minor Projects", slug: "minor-projects" },
        ],
      },
      {
        title: "ECE",
        branch: "ece",
        links: [
          { label: "Major Projects", slug: "major-projects" },
          { label: "Minor Projects", slug: "minor-projects" },
        ],
      },
      { title: "EEE", branch: "eee", links: [] },
    ],
  },

  { label: "Research Paper", path: "/research-paper-page" },
  { label: "Document Writing", path: "/document-writing-page" },
  { label: "Summer Internships", path: "/summer-internships-page" },
  { label: "Contact Us", path: "/contact-us" },
];
