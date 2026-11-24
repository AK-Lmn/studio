'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Message, Send } from 'jiggicons-react';
import { siteConfig } from '@/data/config';

export function FooterCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    <footer className="w-full relative overflow-hidden bg-background border-t border-white/10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Ambient pink glass refraction glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/12 blur-[150px] rounded-full -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest font-semibold mb-4">
          <span className="text-accent">{'///'}</span>
          <span>GET IN TOUCH</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-2xl leading-[1.12] mb-5">
          MESSAGE ME FOR A QUOTE <br className="hidden sm:inline" />
          &amp; SAMPLE WORK
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-ink-2 max-w-lg mb-8 leading-relaxed font-sans">
          Base rates start at ₱500. Custom dashboards, multi-page web applications, and database setups quoted directly.
        </p>

        {/* Primary WhatsApp CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-accent text-white font-display font-bold text-sm sm:text-base px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-[0_0_35px_rgba(255,46,154,0.35)] hover:bg-accent/90 transition-all active:scale-[0.97] hover:shadow-[0_0_50px_rgba(255,46,154,0.55)] cursor-pointer"
        >
          <Message size={18} />
          <span>Chat on WhatsApp</span>
          <ChevronRight size={18} className="stroke-[2.5]" />
        </a>

        {/* Footer Sub-row */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ink-3">
          <span>© 2026 AKL Studio. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span>Web Apps &amp; Google Sheet Dashboards</span>
            <a
              href="https://github.com/AK-Lmn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsVisible(window.scrollY > 500);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-3 inset-x-3 z-50 md:hidden"
        >
          <div className="glass-panel rounded-2xl p-3 border border-accent/40 shadow-[0_10px_35px_rgba(255,46,154,0.25)] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-display font-bold text-white text-xs truncate">
                  AKL Studio · Open
                </span>
                <span className="text-[10px] text-ink-3 font-mono truncate">
                  Typically replies in 15 mins
                </span>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center gap-2 bg-accent text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md active:scale-[0.97] transition-all shrink-0"
            >
              <Message size={16} />
              <span>Chat</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
