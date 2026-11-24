export interface ShowcaseProject {
  id: string;
  title: string;
  tagline: string;
  badge?: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  image?: string;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "pbc-gb",
    title: "PBC Group-Buy Operations Suite",
    tagline: "Dual Storefronts Synced to 1 Central Dashboard",
    badge: "CUSTOM WORKFLOW API",
    description:
      "Two independent customer-facing checkout sites connected to a unified operations dashboard. Built with a custom Google Apps Script API engine handling live inventory reservation and automated Google Drive payment proof vaulting.",
    tags: ["Dual Storefronts", "Custom Apps Script API", "Drive Vaulting", "Next.js"],
  },
  {
    id: "alice-gb",
    title: "Alice Group-Buy Storefront",
    tagline: "From Sheets to Dashboard",
    badge: "ACTIVE PRODUCTION WAVE",
    description:
      "Live turnkey ordering dashboard built for high-demand group-buy waves. Replaces complex spreadsheet rows with mobile-optimized product cards, instant inventory search, real-time stock deduction, and smooth buyer checkout.",
    tags: ["From Sheets to Dashboard", "Real-Time Sync", "Mobile Storefront", "Active Wave"],
    liveUrl: "https://ak-lmn.github.io/dashboard-demo/",
  },
  {
    id: "719-detailing",
    title: "719 Detailing & Auto Studio",
    tagline: "Automotive Service Catalog & Booking Showcase",
    badge: "COMMERCIAL WEB",
    description:
      "Modern automotive platform featuring package comparisons, mobile appointment inquiries, before-and-after project showcase, and sub-second performance.",
    tags: ["Auto Studio", "Service Catalog", "Mobile Responsive", "Next.js"],
  },
];
