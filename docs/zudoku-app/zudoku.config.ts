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
        items: ["HouseRentalSystem/docs/installation", "HouseRentalSystem/docs/authorization", "HouseRentalSystem/docs/about"],
      },
    ],
  },
  redirects: [{ from: "/", to: "HouseRentalSystem/docs/installation" }],
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
