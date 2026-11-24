'use client';

import { useState } from 'react';
import { Nav } from "@/components/nav";
import Hero from "@/components/hero";
import Services from "@/components/services";
import QuoteCalculator, { TabCategory } from "@/components/quote-calculator";
import Showcase from "@/components/showcase";
import { FooterCTA, MobileStickyBar } from "@/components/footer-cta";

export default function Home() {
  const [activeEstimatorTab, setActiveEstimatorTab] = useState<TabCategory>('sheets-gb');

  const handleSelectCategory = (cat: TabCategory) => {
    setActiveEstimatorTab(cat);
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" className="flex-1 relative overflow-hidden">
      {/* Ambient glass refraction glows */}
      <div className="pointer-events-none fixed top-0 left-1/4 w-[500px] h-[500px] bg-accent/8 blur-[160px] rounded-full -z-10" />
      <div className="pointer-events-none fixed top-1/3 right-1/4 w-[600px] h-[600px] bg-accent/6 blur-[180px] rounded-full -z-10" />
      <div className="pointer-events-none fixed bottom-1/4 left-1/3 w-[550px] h-[550px] bg-accent/8 blur-[170px] rounded-full -z-10" />

      <Nav />
      <Hero onSelectCategory={handleSelectCategory} />
      <Services onSelectCategory={handleSelectCategory} />
      <QuoteCalculator
        activeTab={activeEstimatorTab}
        onTabChange={setActiveEstimatorTab}
      />
      <Showcase />
      <FooterCTA />
      <MobileStickyBar />
    </main>
  );
}
