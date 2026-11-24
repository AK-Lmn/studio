'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Message, Cart, Laptop, Palette } from 'jiggicons-react';
import { siteConfig } from '@/data/config';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  const links = [
    { href: '#services', label: 'Rate Cards' },
    { href: '#quote', label: 'Estimator' },
    { href: '#showcase', label: 'Work & Evidence' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#000000]/40 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(255,255,255,0.05)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 font-display font-extrabold tracking-tight text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg py-1 px-1.5 transition-transform hover:scale-105 active:scale-[0.97]"
        >
          <span className="text-white">AKL</span>
          <span className="text-accent font-mono tracking-tighter">{'///'}</span>
          <span className="text-white">STUDIO</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-accent/90 shadow-[0_0_20px_rgba(255,46,154,0.3)] transition-all active:scale-[0.97]"
          >
            <Message size={16} />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-white active:scale-95 transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/10 bg-[#050508]/80 backdrop-blur-2xl px-5 py-6 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-3 font-display text-base font-bold text-white">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{l.label}</span>
                  <span className="text-accent text-xs font-mono">→</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-muted">
              <span>Fast Turnaround · Zero Software Fees</span>
              <span className="text-accent font-semibold">Open</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
