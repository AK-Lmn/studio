'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { Calculator, Send, Cart, Laptop, Palette, PuzzlePiece } from 'jiggicons-react';
import { siteConfig } from '@/data/config';
import {
  groupBuyAddons,
  websiteAddons,
  hostingPlans,
  websitePackageInclusions,
  websitePackageExclusions,
} from '@/data/services';

export type TabCategory = 'sheets-gb' | 'website' | 'design' | 'quick-fixes';

interface QuoteCalculatorProps {
  activeTab?: TabCategory;
  onTabChange?: (tab: TabCategory) => void;
}

export default function QuoteCalculator({
  activeTab: controlledTab,
  onTabChange,
}: QuoteCalculatorProps) {
  const [internalTab, setInternalTab] = useState<TabCategory>('sheets-gb');
  const activeTab = controlledTab ?? internalTab;

  const setActiveTab = (tab: TabCategory) => {
    if (onTabChange) {
      onTabChange(tab);
    } else {
      setInternalTab(tab);
    }
    setSelectedAddons(new Set());
  };

  const [selectedBaseItem, setSelectedBaseItem] = useState<string>('gb-dashboard');
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [selectedHosting, setSelectedHosting] = useState<string>('Basic Website Management');

  // Quick form fields for WhatsApp inquiry
  const [clientBrand, setClientBrand] = useState('');
  const [targetTimeline, setTargetTimeline] = useState('Within 24–48 hours');
  const [projectNotes, setProjectNotes] = useState('');

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const tabOptions = useMemo(() => {
    switch (activeTab) {
      case 'sheets-gb':
        return [
          { id: 'gb-dashboard', name: 'GB Live Dashboard', price: 500, desc: 'Connect 1 GB Sheet to live searchable dashboard', badge: '₱500/round' },
          { id: 'sheets-basic', name: 'Basic Google Sheets Setup', price: 300, desc: '1 workbook, up to 3 tabs, standard formulas, 1 revision', badge: '₱300' },
          { id: 'sheets-automation', name: 'Advanced Sheets Automation', price: 1500, desc: '1 Apps Script workflow, testing, instructions, 1 revision', badge: 'From ₱1,500' },
          { id: 'sheets-reporting', name: 'Custom Reporting Dashboard', price: 3000, desc: 'Up to 3 reporting views, 1 data source', badge: 'From ₱3,000' },
        ];
      case 'website':
        return [
          { id: 'web-landing', name: 'Starter Business Website (1 Page)', price: 1500, desc: 'Fast, mobile-responsive portfolio or business landing page', badge: '₱1,500' },
          { id: 'web-multipage', name: 'Standard Multi-Page Website', price: 3000, desc: 'Up to 3-5 pages with custom layout, contact flow & SEO', badge: '₱3,000' },
          { id: 'web-fullstack', name: 'Custom Full-Stack Web App', price: 5000, desc: 'Bespoke web application with database and custom features', badge: 'From ₱5,000' },
        ];
      case 'design':
        return [
          { id: 'design-logo', name: 'Basic Logo Design', price: 350, desc: '1 concept, 1 revision, high-res PNG export', badge: '₱350' },
          { id: 'design-social', name: 'Social Media Graphic', price: 300, desc: '1 design, 1 size, 1 revision', badge: '₱300' },
          { id: 'design-poster', name: 'Promotional Poster', price: 500, desc: '1 poster design, 2 revisions', badge: '₱500' },
          { id: 'design-banner', name: 'Product / Business Banner', price: 300, desc: '1 banner design, 1 revision', badge: '₱300' },
          { id: 'design-kit', name: 'Basic Branding Kit', price: 1500, desc: 'Logo, color palette, font pairing, 2 social templates', badge: '₱1,500' },
        ];
      case 'quick-fixes':
        return [
          { id: 'edit-sheet', name: 'Sheet Formula / Cell Quick Fix', price: 200, desc: 'Fix broken formulas or cell validations', badge: '₱200' },
          { id: 'edit-web-section', name: 'Website Section Edit / Copy Update', price: 200, desc: 'Update copy, photos, or tweak layout on 1 section', badge: '₱200' },
          { id: 'edit-products', name: 'Add 5 Product Listings', price: 300, desc: 'Upload photos, descriptions, and prices for 5 items', badge: '₱300' },
          { id: 'edit-form', name: 'Contact / Email Form Integration', price: 300, desc: 'Hook up contact inquiries directly to your email inbox', badge: '₱300' },
          { id: 'edit-revision', name: 'Additional Design Revision Round', price: 300, desc: '1 extra full revision round on an existing design', badge: '₱300' },
        ];
    }
  }, [activeTab]);

  useEffect(() => {
    if (!tabOptions.some((o) => o.id === selectedBaseItem)) {
      setSelectedBaseItem(tabOptions[0]?.id ?? '');
    }
  }, [tabOptions, selectedBaseItem]);

  const currentBase = useMemo(() => {
    return tabOptions.find((o) => o.id === selectedBaseItem) ?? tabOptions[0];
  }, [tabOptions, selectedBaseItem]);

  const availableAddons = useMemo(() => {
    if (activeTab === 'sheets-gb') {
      return groupBuyAddons.filter((a) => a.numericPrice);
    }
    if (activeTab === 'website' || activeTab === 'quick-fixes') {
      return websiteAddons.filter((a) => a.numericPrice);
    }
    return [
      { name: 'Additional Revision Round', price: '₱300', numericPrice: 300 },
      { name: 'Vector Source File (SVG / Figma)', price: '₱300', numericPrice: 300 },
    ];
  }, [activeTab]);

  const estimatedTotal = useMemo(() => {
    const base = currentBase ? currentBase.price : 500;
    let addonsSum = 0;
    availableAddons.forEach((item) => {
      if (selectedAddons.has(item.name) && item.numericPrice) {
        addonsSum += item.numericPrice;
      }
    });
    return base + addonsSum;
  }, [currentBase, availableAddons, selectedAddons]);

  const handleWhatsAppQuote = () => {
    const categoryName =
      activeTab === 'sheets-gb'
        ? 'Google Sheets & Dashboards'
        : activeTab === 'website'
        ? 'Websites'
        : activeTab === 'design'
        ? 'Graphic Design'
        : 'Quick Edits & Fixes';

    const lines: string[] = [
      'Hi! Project inquiry from AKL Studio:',
      '',
    ];

    if (clientBrand.trim()) {
      lines.push(`Client / Brand: ${clientBrand.trim()}`);
    }

    lines.push(`Category: ${categoryName}`);
    lines.push(`Selected Service: ${currentBase?.name} (₱${currentBase?.price.toLocaleString()})`);

    if (selectedAddons.size > 0) {
      const addonsFormatted = Array.from(selectedAddons)
        .map((addonName) => {
          const item = availableAddons.find((a) => a.name === addonName);
          return `${addonName} (${item?.price ?? ''})`;
        })
        .join(', ');
      lines.push(`Add-ons: ${addonsFormatted}`);
    }

    if (activeTab === 'website') {
      lines.push(`Hosting Preference: ${selectedHosting}`);
    }

    lines.push(`Estimated Total: ₱${estimatedTotal.toLocaleString()} PHP`);

    if (targetTimeline.trim()) {
      lines.push(`Target Timeline: ${targetTimeline.trim()}`);
    }

    if (projectNotes.trim()) {
      lines.push(`Project Notes / Link: ${projectNotes.trim()}`);
    }

    lines.push('');
    lines.push('Ready to proceed when you are!');

    const message = lines.join('\n');
    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encoded}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-accent font-mono text-sm sm:text-base uppercase tracking-widest font-bold mb-3">
          <Calculator size={22} />
          <span>INSTANT PROJECT ESTIMATOR</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          Transparent Rates. No Hidden Fees.
        </h2>
        <p className="text-sm sm:text-base text-ink-3 max-w-xl mx-auto">
          Pick what you need to calculate an upfront estimate. Rates adjust based on project scope.
        </p>
      </div>

      {/* Main interactive card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-border shadow-2xl relative">
        {/* Tab selection */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-2 bg-black/60 rounded-2xl border border-white/5 mb-9">
          {[
            { id: 'sheets-gb', label: 'Sheets & Dashboards', Icon: Cart },
            { id: 'website', label: 'Websites', Icon: Laptop },
            { id: 'design', label: 'Graphic Design', Icon: Palette },
            { id: 'quick-fixes', label: 'Quick Edits & Fixes', Icon: PuzzlePiece },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.Icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabCategory)}
                className="relative py-3.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-150 active:scale-[0.98] inline-flex items-center justify-center gap-2.5 z-10 cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCalculatorTab"
                    className="absolute inset-0 bg-accent rounded-xl shadow-lg shadow-accent/25 -z-10"
                    transition={{ type: 'spring', stiffness: 600, damping: 35 }}
                  />
                )}
                <TabIcon size={20} className={isActive ? 'text-white' : 'text-ink-3'} />
                <span className={isActive ? 'text-white font-bold' : 'text-ink-3 hover:text-white'}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Step 1: Base Service Selection */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-3 font-semibold">
              Step 1: Choose Your Core Service
            </span>
            <span className="text-xs font-mono text-accent font-semibold">Tap to select</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tabOptions.map((option) => {
              const isSelected = selectedBaseItem === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedBaseItem(option.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-150 active:scale-[0.98] flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-accent/15 border-accent shadow-[0_0_25px_rgba(255,46,154,0.25)] ring-1 ring-accent backdrop-blur-md'
                      : 'glass-card hover:bg-surface-2/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-sm font-bold text-white tracking-tight">{option.name}</span>
                    <span className="px-3 py-1 rounded-lg text-xs font-sans font-extrabold bg-accent/15 border border-accent/30 text-accent tracking-wide shrink-0">
                      {option.badge}
                    </span>
                  </div>
                  <p className="text-xs text-ink-2 leading-relaxed">{option.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Add-ons & Quick Enhancements */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-3 font-semibold">
              Step 2: Add-ons &amp; Extras (Optional)
            </span>
            <span className="text-xs font-mono text-ink-3">Select multiple</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {availableAddons.map((addon) => {
              const isChecked = selectedAddons.has(addon.name);
              return (
                <button
                  key={addon.name}
                  onClick={() => toggleAddon(addon.name)}
                  className={`p-3 rounded-xl border text-left transition-all duration-150 active:scale-[0.98] flex items-center justify-between gap-3 cursor-pointer ${
                    isChecked
                      ? 'bg-accent/15 border-accent text-white shadow-[0_0_15px_rgba(255,46,154,0.18)] backdrop-blur-md'
                      : 'glass-card text-ink-2 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                        isChecked ? 'bg-accent border-accent text-white' : 'border-[#44444C] bg-[#111114]'
                      }`}
                    >
                      {isChecked && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold truncate">{addon.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-accent shrink-0 tabular-nums">
                    +{addon.price}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Hosting Options (Visible when Website tab is active) */}
        {activeTab === 'website' && (
          <div className="mb-8 p-5 rounded-2xl bg-surface border border-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-3 font-semibold">
                Step 3: Hosting &amp; Management Plan
              </span>
              <span className="text-xs font-mono text-ink-3">First month / succeeding</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hostingPlans.map((hp) => {
                const isSelected = selectedHosting === hp.plan;
                return (
                  <button
                    key={hp.plan}
                    onClick={() => setSelectedHosting(hp.plan)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                      isSelected
                        ? 'bg-accent/15 border-accent text-white shadow-[0_0_15px_rgba(255,46,154,0.15)] ring-1 ring-accent'
                        : 'bg-surface-2 border-border text-ink-2 hover:border-accent/40 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-1">
                      <span>{hp.plan}</span>
                      <span className="text-accent font-mono tabular-nums">{hp.firstMonth}</span>
                    </div>
                    <div className="text-[11px] text-ink-3 font-mono">
                      After first month: {hp.succeeding}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Prominent Inclusions & Exclusions Checklist */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <div className="flex items-center gap-2 mb-3 text-white font-bold text-sm">
              <ShieldCheck size={18} className="text-emerald-400" />
              <span>Included in All Website Packages</span>
            </div>
            <ul className="space-y-2 text-xs text-ink-2">
              {websitePackageInclusions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-border">
            <div className="flex items-center gap-2 mb-3 text-white font-bold text-sm">
              <AlertCircle size={18} className="text-accent" />
              <span>Not Automatically Included</span>
            </div>
            <ul className="space-y-2 text-xs text-ink-3">
              {websitePackageExclusions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 4: Quick Project Scope Details (Optional Pre-send) */}
        <div className="mb-8 p-5 rounded-2xl glass-card border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-3 font-semibold">
              Step 4: Project Scope Details (Optional)
            </span>
            <span className="text-xs font-mono text-accent">Auto-formats to WhatsApp</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-mono text-ink-3 mb-1.5 font-medium">
                Client / Brand Name
              </label>
              <input
                type="text"
                placeholder="e.g. Alice Wave or Personal Brand"
                value={clientBrand}
                onChange={(e) => setClientBrand(e.target.value)}
                className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-ink-3 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-ink-3 mb-1.5 font-medium">
                Target Timeline
              </label>
              <select
                value={targetTimeline}
                onChange={(e) => setTargetTimeline(e.target.value)}
                className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none cursor-pointer"
              >
                <option value="Within 24–48 hours" className="bg-[#111114]">Within 24–48 hours (Rush)</option>
                <option value="This week" className="bg-[#111114]">This week</option>
                <option value="Next week" className="bg-[#111114]">Next week</option>
                <option value="Flexible / Discussion" className="bg-[#111114]">Flexible / Discussion</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-ink-3 mb-1.5 font-medium">
              Google Sheet Link or Brief Requirements
            </label>
            <input
              type="text"
              placeholder="e.g. https://docs.google.com/spreadsheets/d/... or short brief"
              value={projectNotes}
              onChange={(e) => setProjectNotes(e.target.value)}
              className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-ink-3 focus:outline-none"
            />
          </div>
        </div>

        {/* Bottom Total & WhatsApp Button */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="block text-xs font-mono text-ink-3 uppercase tracking-wider font-semibold">
              Estimated Upfront Total
            </span>
            <div className="flex items-baseline gap-2.5">
              <motion.span
                key={estimatedTotal}
                initial={{ opacity: 0, y: -3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-none tracking-tight"
              >
                ₱{estimatedTotal.toLocaleString()}
              </motion.span>
              <span className="text-xs font-mono font-medium text-ink-3">
                PHP net
              </span>
            </div>
            <p className="text-xs text-ink-2 font-medium">
              {currentBase?.name} {selectedAddons.size > 0 && <span className="text-accent font-semibold">(+{selectedAddons.size} extras)</span>}
            </p>
          </div>

          <button
            onClick={handleWhatsAppQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm bg-accent text-white shadow-xl shadow-accent/25 hover:bg-accent/90 transition-all duration-150 active:scale-[0.97] cursor-pointer"
          >
            <Send size={18} />
            <span>Lock In Estimate on WhatsApp</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
