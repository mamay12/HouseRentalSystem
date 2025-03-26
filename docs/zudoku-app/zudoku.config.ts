import type {ZudokuConfig} from "zudoku";

const config: ZudokuConfig = {
    topNavigation: [
        {id: "docs", label: "Documentation"},
        {id: "api", label: "API Reference"},
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
    redirects: [
        {from: "/docs", to: "https://mamay12.github.io/HouseRentalSystem/docs"},
        {from: "/docs/", to: "https://mamay12.github.io/HouseRentalSystem/docs/"},
        {from: "/docs/about", to: "https://mamay12.github.io/HouseRentalSystem/docs/about"},
        {from: "/docs/about/", to: "https://mamay12.github.io/HouseRentalSystem/docs/about/"},
        {from: "/docs/authorization", to: "https://mamay12.github.io/HouseRentalSystem/docs/authorization"},
        {from: "/docs/authorization/", to: "https://mamay12.github.io/HouseRentalSystem/docs/authorization/"},
        {from: "/docs/installation", to: "https://mamay12.github.io/HouseRentalSystem/docs/installation"},
        {from: "/docs/installation/", to: "https://mamay12.github.io/HouseRentalSystem/docs/installation/"},
        {from: "/api", to: "https://mamay12.github.io/HouseRentalSystem/api/properties"},
        {from: "/api/", to: "https://mamay12.github.io/HouseRentalSystem/api/properties/"},
        {from: "/api/properties", to: "https://mamay12.github.io/HouseRentalSystem/api/properties"},
        {from: "/api/properties/", to: "https://mamay12.github.io/HouseRentalSystem/api/properties/"},
        {from: "/api/tenants", to: "https://mamay12.github.io/HouseRentalSystem/api/tenants"},
        {from: "/api/tenants/", to: "https://mamay12.github.io/HouseRentalSystem/api/tenants/"},
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
