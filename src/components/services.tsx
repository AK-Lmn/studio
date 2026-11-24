'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileSpreadsheet, Layout, Image as ImageIcon, Server } from 'lucide-react';
import {
  hostingPlans,
  groupBuyAddons,
  websiteAddons,
  googleSheetsServices,
  graphicDesignServices,
} from '@/data/services';
import { TabCategory } from '@/components/quote-calculator';

interface ServicesProps {
  onSelectCategory?: (category: TabCategory) => void;
}

export default function Services({ onSelectCategory }: ServicesProps) {
  return (
    <section id="services" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest font-semibold mb-2">
            <span className="text-accent">{'///'}</span>
            <span>OFFICIAL RATE CARD</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            SERVICES &amp; RATE CARDS
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-sm sm:text-base text-ink-3">
            Standardized pricing across Google Sheets dashboards, website management, and graphic design.
          </p>
          <div className="mt-2.5 inline-flex items-center gap-2 text-ink-2 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>All rates negotiable based on project scope</span>
          </div>
        </div>
      </div>

      {/* Grid of rate tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Table 1: Google Sheets & Automation */}
        <div className="rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <FileSpreadsheet size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Google Sheets &amp; Automation
                </h3>
                <p className="text-xs text-ink-3">Dashboards, Apps Script workflows, and formulas</p>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {googleSheetsServices.map((item) => (
                <div key={item.name} className="py-3.5 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    {item.inclusions && (
                      <div className="text-xs text-ink-3 mt-0.5">{item.inclusions}</div>
                    )}
                  </div>
                  <div className="text-sm font-mono font-bold text-accent shrink-0 tabular-nums">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-ink-3">GB Dashboard add-ons available from ₱50/round</span>
            <button
              type="button"
              onClick={() => onSelectCategory?.('sheets-gb')}
              className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 active:scale-95 cursor-pointer"
            >
              <span>Estimate in builder</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Table 2: Graphic Design */}
        <div className="rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <ImageIcon size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Graphic Design
                </h3>
                <p className="text-xs text-ink-3">Banners, social graphics, logos, and branding kits</p>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {graphicDesignServices.map((item) => (
                <div key={item.name} className="py-3.5 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    {item.inclusions && (
                      <div className="text-xs text-ink-3 mt-0.5">{item.inclusions}</div>
                    )}
                  </div>
                  <div className="text-sm font-mono font-bold text-accent shrink-0 tabular-nums">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-ink-3">Export formats: PNG, JPG, or SVG</span>
            <button
              type="button"
              onClick={() => onSelectCategory?.('design')}
              className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 active:scale-95 cursor-pointer"
            >
              <span>Estimate in builder</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Table 3: Hosting & Website Management */}
        <div className="rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Server size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Hosting &amp; Management Plans
                </h3>
                <p className="text-xs text-ink-3">Server deployment, updates, uptime, and domain support</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-ink-3 font-mono uppercase">
                    <th className="pb-3 font-medium">Plan</th>
                    <th className="pb-3 font-medium text-right">First Month</th>
                    <th className="pb-3 font-medium text-right">Succeeding</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {hostingPlans.map((hp) => (
                    <tr key={hp.plan} className={hp.highlight ? 'bg-accent/5' : ''}>
                      <td className="py-3 font-semibold text-white">{hp.plan}</td>
                      <td className="py-3 text-right font-mono font-bold text-accent tabular-nums">
                        {hp.firstMonth}
                      </td>
                      <td className="py-3 text-right font-mono text-ink-3 tabular-nums">
                        {hp.succeeding}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-ink-3 space-y-1">
            <div>
              <span className="text-white font-semibold">Hosting Note: </span>
              All hosting runs on high-speed <span className="text-accent font-mono">.vercel.app</span> domains.
            </div>
            <div>
              Custom domain setup (e.g. <span className="font-mono text-white">yourbrand.com</span>) is configured free when you supply the domain.
            </div>
          </div>
        </div>

        {/* Table 4: Add-ons & Quick Tasks */}
        <div className="rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Layout size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Website &amp; Group Buy Add-ons
                </h3>
                <p className="text-xs text-ink-3">Sections, listings, password locks, and revisions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              <div>
                <div className="text-xs font-mono uppercase text-accent mb-2 font-semibold">
                  Website Add-ons
                </div>
                <div className="space-y-2 text-xs">
                  {websiteAddons.slice(0, 4).map((a) => (
                    <div key={a.name} className="flex justify-between items-center py-1 border-b border-white/5">
                      <span className="text-ink-3 truncate mr-2">{a.name}</span>
                      <span className="font-mono font-bold text-white shrink-0">{a.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-accent mb-2 font-semibold">
                  GB Dashboard Add-ons
                </div>
                <div className="space-y-2 text-xs">
                  {groupBuyAddons.map((a) => (
                    <div key={a.name} className="flex justify-between items-center py-1 border-b border-white/5">
                      <span className="text-ink-3 truncate mr-2">{a.name}</span>
                      <span className="font-mono font-bold text-white shrink-0">{a.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-ink-3 flex items-center justify-between">
            <span>Need an unlisted edit or feature?</span>
            <button
              type="button"
              onClick={() => onSelectCategory?.('quick-fixes')}
              className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 active:scale-95 cursor-pointer"
            >
              <span>Build quick edits quote</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
