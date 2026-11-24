'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, ArrowLeftRight, FileSpreadsheet } from 'lucide-react';
import { Cart, PuzzlePiece } from 'jiggicons-react';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest font-semibold mb-2">
          <span className="text-accent">{'///'}</span>
          <span>THE TRANSFORMATION</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          MESSY SPREADSHEET VS. FAST WEB APP
        </h2>
        <p className="text-sm sm:text-base text-ink-3">
          Stop asking buyers to zoom in on complex spreadsheet grids. Give them a modern, mobile-first storefront.
        </p>
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Left: The Old Way (Spreadsheets) */}
        <div className="rounded-3xl bg-[#0F0F11]/90 border border-white/10 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-rose-500/80" />
          
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <X size={18} strokeWidth={2.5} />
                </div>
                <span className="font-display text-base font-bold text-white">The Old Spreadsheet Way</span>
              </div>
              <span className="text-[11px] font-mono text-rose-400 font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/10">
                High Drop-Off
              </span>
            </div>

            {/* Mock Ugly Sheet */}
            <div className="rounded-xl bg-[#000000] border border-white/10 p-3 font-mono text-[11px] text-ink-3 mb-5 overflow-hidden">
              <div className="grid grid-cols-4 gap-1 pb-1.5 border-b border-white/10 text-[10px] text-white/40">
                <span>ROW</span>
                <span>ITEM_NAME</span>
                <span>QTY</span>
                <span className="text-right">CLAIM_USER</span>
              </div>
              <div className="space-y-1.5 pt-2 text-white/60">
                <div className="grid grid-cols-4 gap-1">
                  <span className="text-white/30">#12</span>
                  <span className="truncate">Tirz_10mg_vial</span>
                  <span>1</span>
                  <span className="truncate text-right">@user_9219</span>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  <span className="text-white/30">#13</span>
                  <span className="truncate">Sema_5mg_kit</span>
                  <span>2</span>
                  <span className="truncate text-right">@unknown_buyer</span>
                </div>
                <div className="grid grid-cols-4 gap-1 opacity-50">
                  <span className="text-white/30">#14</span>
                  <span className="truncate">Retatrutide_vial</span>
                  <span>0</span>
                  <span className="truncate text-right text-rose-400">DOUBLE_CLAIM</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-ink-3">
              <li className="flex items-center gap-2">
                <X size={14} className="text-rose-400 shrink-0" />
                <span>Buyers struggle on small mobile phone screens</span>
              </li>
              <li className="flex items-center gap-2">
                <X size={14} className="text-rose-400 shrink-0" />
                <span>Accidental cell overwrites &amp; double-booked slots</span>
              </li>
              <li className="flex items-center gap-2">
                <X size={14} className="text-rose-400 shrink-0" />
                <span>Manual receipt verification in chat DMs</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-rose-400/80">
            Friction = Lost Orders
          </div>
        </div>

        {/* Right: The AKL Studio Way (Live Web Dashboard) */}
        <div className="rounded-3xl glass-panel p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group border-accent/40 shadow-[0_0_30px_rgba(255,46,154,0.1)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <Check size={18} strokeWidth={2.5} />
                </div>
                <span className="font-display text-base font-bold text-white">The AKL Studio Way</span>
              </div>
              <span className="text-[11px] font-mono text-accent font-semibold px-2.5 py-0.5 rounded-full bg-accent/15">
                Fast Turnkey
              </span>
            </div>

            {/* Mock Sleek Storefront */}
            <div className="rounded-xl bg-[#000000] border border-accent/30 p-3.5 mb-5 shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10 text-xs">
                <span className="font-bold text-white">Live Storefront</span>
                <span className="text-emerald-400 font-mono text-[10px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Auto Syncing
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-[#111114] border border-white/5 text-xs">
                <div>
                  <span className="font-semibold text-white block">Tirzepatide 10mg</span>
                  <span className="text-accent font-mono text-[11px] font-bold">₱1,850 · 6 slots left</span>
                </div>
                <span className="px-3 py-1 rounded-md bg-accent text-white text-[11px] font-bold font-mono shadow-sm">
                  1-Tap Claim
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-ink-2">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-accent shrink-0" />
                <span>Instant search &amp; filter on any iPhone or Android</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-accent shrink-0" />
                <span>Orders append straight back into your Google Sheet</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-accent shrink-0" />
                <span>Automated payment receipt upload to Google Drive</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-accent flex items-center justify-between">
            <span>Ready in 24–48 hours</span>
            <span className="font-bold">₱500 / Round Base</span>
          </div>
        </div>
      </div>
    </section>
  );
}
