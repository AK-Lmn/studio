export interface ServiceItem {
  name: string;
  price: string;
  numericPrice?: number;
  inclusions?: string;
  badge?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface HostingPlan {
  plan: string;
  firstMonth: string;
  succeeding: string;
  highlight?: boolean;
  domainNote?: string;
}

export const hostingPlans: HostingPlan[] = [
  {
    plan: "Client-Managed Hosting",
    firstMonth: "₱0",
    succeeding: "₱0",
    domainNote: "Deployed to your own accounts or free .vercel.app domain",
  },
  {
    plan: "Basic Website Management",
    firstMonth: "FREE",
    succeeding: "₱200/month",
    highlight: true,
    domainNote: "Free .vercel.app included. Client buys custom domain, we configure it free.",
  },
  {
    plan: "Full-Stack Website Management",
    firstMonth: "₱500",
    succeeding: "₱500/month",
    domainNote: "Includes DB maintenance & uptime. Free .vercel.app or client custom domain setup.",
  },
  {
    plan: "GB Dashboard Hosting",
    firstMonth: "₱50/round",
    succeeding: "Per GB round",
    domainNote: "Instant live order link via .vercel.app or GitHub Pages.",
  },
];

export const groupBuyAddons: ServiceItem[] = [
  { name: "Passcode Lock", price: "₱50/round", numericPrice: 50 },
  { name: "Dashboard Hosting", price: "₱50/round", numericPrice: 50 },
  { name: "Additional GB Round Setup", price: "₱500/round", numericPrice: 500 },
  { name: "Custom Dashboard Features", price: "Custom Quote" },
];

export const websiteAddons: ServiceItem[] = [
  { name: "Additional Website Section", price: "₱200", numericPrice: 200 },
  { name: "Additional Standard Page", price: "₱500", numericPrice: 500 },
  { name: "Additional 5 Product Listings", price: "₱300", numericPrice: 300 },
  { name: "Basic Logo Design", price: "₱350", numericPrice: 350 },
  { name: "Contact / Email Inquiry Form", price: "₱300", numericPrice: 300 },
  { name: "Additional Design Revision Round", price: "₱300", numericPrice: 300 },
  { name: "Advanced Features / Integrations", price: "Custom Quote" },
];

export const googleSheetsServices: ServiceItem[] = [
  {
    name: "Basic Google Sheets Setup",
    price: "₱300",
    numericPrice: 300,
    inclusions: "1 workbook, up to 3 tabs, standard formulas, 1 revision",
  },
  {
    name: "Advanced Sheets Automation",
    price: "From ₱1,500",
    numericPrice: 1500,
    inclusions: "1 Apps Script workflow, testing, instructions, 1 revision",
  },
  {
    name: "GB Live Dashboard",
    price: "₱500/round",
    numericPrice: 500,
    inclusions: "Connect 1 GB Sheet to live searchable dashboard",
  },
  {
    name: "Custom Reporting Dashboard",
    price: "From ₱3,000",
    numericPrice: 3000,
    inclusions: "Up to 3 reporting views, 1 data source",
  },
  {
    name: "Custom Workflow Automation",
    price: "Custom Quote",
    inclusions: "Multiple workflows, external APIs, complex business logic",
  },
];

export const graphicDesignServices: ServiceItem[] = [
  {
    name: "Basic Logo Design",
    price: "₱350",
    numericPrice: 350,
    inclusions: "1 concept, 1 revision, PNG format",
  },
  {
    name: "Social Media Graphic",
    price: "₱300",
    numericPrice: 300,
    inclusions: "1 design, 1 size, 1 revision",
  },
  {
    name: "Promotional Poster",
    price: "₱500",
    numericPrice: 500,
    inclusions: "1 design, 2 revisions",
  },
  {
    name: "Product / Business Banner",
    price: "₱300",
    numericPrice: 300,
    inclusions: "1 design, 1 revision",
  },
  {
    name: "Basic Branding Kit",
    price: "₱1,500",
    numericPrice: 1500,
    inclusions: "Logo, colors, font pairing, 2 social templates",
  },
];

export const websitePackageInclusions = [
  "Mobile responsiveness across phones, tablets, and desktop",
  "Basic testing, security, and browser compatibility checks",
  "Fast deployment to a free .vercel.app subdomain (or assistance setting up your purchased custom domain)",
  "All listed rates are open to negotiation depending on project scope and budget",
];

export const websitePackageExclusions = [
  "Custom domain purchase (e.g. .com, .ph) — you buy the domain, and we configure the DNS for you at no extra charge",
  "Paid third-party database tiers (beyond free tiers)",
  "Payment gateway merchant verification fees",
  "Complex user auth or paid external APIs",
];
