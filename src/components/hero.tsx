'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, BarChart2, ShoppingBag, Palette, Wrench } from 'lucide-react';
import { Laptop, Cart } from 'jiggicons-react';
import { siteConfig } from '@/data/config';
import { TabCategory } from '@/components/quote-calculator';

interface HeroProps {
  onSelectCategory?: (category: TabCategory) => void;
}

export default function Hero({ onSelectCategory }: HeroProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  const studioCapabilities: {
    title: string;
    prefix?: string;
    amount: string;
    unit?: string;
    desc: string;
    category: TabCategory;
    Icon: any;
  }[] = [
    {
      title: 'Websites & Portfolios',
      prefix: 'From',
      amount: '₱1,500',
      desc: 'High-speed business sites, mobile portfolios, and launch pages built with modern stacks.',
      category: 'website',
      Icon: Laptop,
    },
    {
      title: 'Sheets & Dashboards',
      amount: '₱500',
      unit: '/ round',
      desc: 'Turn messy Google Sheets into live, searchable order dashboards with real-time slot syncing.',
      category: 'sheets-gb',
      Icon: Cart,
    },
    {
      title: 'Graphic & Brand Design',
      prefix: 'From',
      amount: '₱300',
      desc: 'High-impact promotional posters, social media banners, logos, and vector brand kits.',
      category: 'design',
      Icon: Palette,
    },
    {
      title: 'Quick Edits & Automations',
      prefix: 'From',
      amount: '₱200',
      desc: 'Formula fixes, section revisions, custom email hooks, and Apps Script workflow integrations.',
      category: 'quick-fixes',
      Icon: Wrench,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      {/* Ambient soft glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[350px] bg-accent/8 blur-[180px] rounded-full" />

      {/* TOP HEADLINE & POSITIONING */}
      <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
        {/* Studio Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono font-bold tracking-widest text-accent uppercase mb-4"
        >
          AKL STUDIO {'///'} DIGITAL CRAFT
        </motion.div>

        {/* Agency Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.02] mb-6"
        >
          WEBSITES, DASHBOARDS, <br />
          <span className="text-white">&amp; DIGITAL DESIGNS </span>
          <span className="text-accent drop-shadow-[0_0_35px_rgba(255,46,154,0.3)]">BUILT CLEAN</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-ink-2 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Custom websites, Google Sheet order dashboards, promo graphics, and quick code fixes. Fixed rates, 24–48h delivery, and no monthly fees.
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent text-white font-display font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-[0_0_30px_rgba(255,46,154,0.3)] hover:bg-accent/90 active:scale-[0.97] transition-all"
          >
            <span>Instant Project Estimator</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 font-display font-semibold text-sm sm:text-base text-white border border-[#2C2C31] bg-surface hover:bg-surface-2 hover:border-accent/40 active:scale-[0.97] transition-all"
          >
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* 4-PILLAR SERVICE CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        {studioCapabilities.map((cap) => {
          const IconComp = cap.Icon;
          return (
            <div
              key={cap.title}
              className="rounded-2xl glass-panel p-6 flex flex-col justify-between hover:border-accent/40 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-accent/40 group-hover:text-accent group-hover:scale-105 transition-all shadow-inner">
                    <IconComp size={20} />
                  </div>
                  <div className="inline-flex items-baseline gap-1 text-accent font-sans">
                    {cap.prefix && <span className="font-mono text-xs text-ink-3 mr-0.5">{cap.prefix}</span>}
                    <span className="text-xs font-mono font-bold text-accent mr-0.5">₱</span>
                    <span className="text-base sm:text-lg font-black tracking-normal text-white">{cap.amount.replace('₱', '')}</span>
                    {cap.unit && <span className="font-mono text-xs text-ink-3 ml-0.5">{cap.unit}</span>}
                  </div>
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-ink-3 leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectCategory?.(cap.category)}
                className="mt-5 pt-3.5 border-t border-white/5 inline-flex items-center justify-between text-xs font-mono font-medium text-ink-3 hover:text-white transition-colors w-full text-left cursor-pointer active:scale-[0.98]"
              >
                <span>Select in estimator</span>
                <ChevronRight size={14} className="text-accent" />
              </button>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
