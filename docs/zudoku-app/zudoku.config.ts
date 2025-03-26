import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/installation", "docs/authorization", "docs/about"],
      },
    ],
  },
  redirects: [{ from: "/", to: "/HouseRentalSystem/docs/installation" },
    {from: "/docs/installation", to: "/HouseRentalSystem/docs/installation" },
    {from: "/docs/authorization", to: "/HouseRentalSystem/docs/authorization" },
    {from: "/docs/about", to: "/HouseRentalSystem/docs/about" },
    {from: "https://mamay12.github.io/api", to: "https://mamay12.github.io/HouseRentalSystem/api" },

  ],
  apis: {
    type: "file",
    input: "./apis/openapi.json",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
