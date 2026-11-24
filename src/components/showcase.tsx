'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, ShieldCheck, KeyRound, Layers, ListFilter, Users, CheckCircle2, Laptop, Rocket, X, Plus } from 'lucide-react';
import { Cart } from 'jiggicons-react';

type GBTab = 'orders' | 'summary' | 'pricelist';

interface SampleOrder {
  id: string;
  name: string;
  itemCount: number;
  total: number;
  delivery: string;
  payment: string;
  items: { name: string; qty: number; unitPrice: number; lineTotal: number }[];
}

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<GBTab>('orders');
  const [orderSearch, setOrderSearch] = useState('');
  const [priceSearch, setPriceSearch] = useState('');
  const [priceCategory, setPriceCategory] = useState<'all' | 'premium' | 'standard' | 'supplies'>('all');
  const [expandedOrders, setExpandedOrders] = useState<Record<string, boolean>>({ 'order-1': true });

  // Admin View / Passcode Authorization Modal State
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [adminPhone, setAdminPhone] = useState('');
  const [adminName, setAdminName] = useState('');
  const [authorizedList, setAuthorizedList] = useState<Array<{ phone: string; name: string }>>([
    { phone: '0917 ••• ••88', name: 'Member A' },
    { phone: '0926 ••• ••42', name: 'Buyer B' },
    { phone: '0905 ••• ••19', name: 'Collector C' },
  ]);
  const [authSuccessMsg, setAuthSuccessMsg] = useState('');

  // Scroll lock when admin modal is open
  useEffect(() => {
    if (isAdminModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isAdminModalOpen]);

  const toggleOrder = (id: string) => {
    setExpandedOrders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAuthorizeMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminPhone.trim()) return;
    const maskedPhone = adminPhone.length > 7
      ? `${adminPhone.slice(0, 4)} ••• ••${adminPhone.slice(-2)}`
      : adminPhone;
    const newMember = {
      phone: maskedPhone,
      name: adminName.trim() || 'Authorized Buyer',
    };
    setAuthorizedList((prev) => [newMember, ...prev]);
    setAuthSuccessMsg(`✓ Successfully authorized ${newMember.name} (${newMember.phone}) into Google Sheet auth list!`);
    setAdminPhone('');
    setAdminName('');
    setTimeout(() => setAuthSuccessMsg(''), 4000);
  };

  // 100% Mock & Generic items (no pharma or real client peptides)
  const orders: SampleOrder[] = [
    {
      id: 'order-1',
      name: 'Buyer-Alpha',
      itemCount: 10,
      total: 4500,
      delivery: 'Direct Courier Delivery',
      payment: 'Bank Transfer Ref: #MK-88210',
      items: [
        { name: 'Custom Batch Item #01 (10ml)', qty: 10, unitPrice: 450, lineTotal: 4500 },
      ],
    },
    {
      id: 'order-2',
      name: 'Buyer-Bravo',
      itemCount: 4,
      total: 2160,
      delivery: 'Local Express Delivery',
      payment: 'E-Wallet Ref: #MK-44912',
      items: [
        { name: 'Batch Series Item #02 (5ml)', qty: 2, unitPrice: 380, lineTotal: 760 },
        { name: 'Specialty Formula #03 (10ml)', qty: 1, unitPrice: 1200, lineTotal: 1200 },
        { name: 'Sterile Lab Accessory Kit', qty: 2, unitPrice: 100, lineTotal: 200 },
      ],
    },
    {
      id: 'order-3',
      name: 'Buyer-Charlie',
      itemCount: 6,
      total: 3350,
      delivery: 'Regional Cargo Express',
      payment: 'Online Deposit Ref: #MK-10923',
      items: [
        { name: 'Specialty Formula #03 (10ml)', qty: 2, unitPrice: 1200, lineTotal: 2400 },
        { name: 'Custom Batch Item #01 (10ml)', qty: 1, unitPrice: 450, lineTotal: 450 },
        { name: 'Sterile Lab Accessory Kit', qty: 5, unitPrice: 100, lineTotal: 500 },
      ],
    },
  ];

  const filteredOrders = orders.filter((o) =>
    o.name.toLowerCase().includes(orderSearch.toLowerCase()) ||
    o.delivery.toLowerCase().includes(orderSearch.toLowerCase()) ||
    o.payment.toLowerCase().includes(orderSearch.toLowerCase())
  );

  // Summary table data: Product, Total Ordered, Missing to Complete 10s, Boxes to Order, Cost to Cover
  const summaryRows = [
    { name: 'Custom Batch Item #01 (10ml)', ordered: 11, missing: 9, boxes: 2, costToCover: 4050 },
    { name: 'Batch Series Item #02 (5ml)', ordered: 2, missing: 8, boxes: 1, costToCover: 3040 },
    { name: 'Specialty Formula #03 (10ml)', ordered: 3, missing: 7, boxes: 1, costToCover: 8400 },
    { name: 'Sterile Lab Accessory Kit', ordered: 7, missing: 3, boxes: 1, costToCover: 300 },
  ];

  // Mock catalog
  const catalog = [
    { name: 'Custom Batch Item #01 (10ml)', spec: '10ml unit pack (Box of 10)', cat: 'standard', kitPrice: 4500, unitPrice: 450 },
    { name: 'Batch Series Item #02 (5ml)', spec: '5ml unit pack (Box of 10)', cat: 'standard', kitPrice: 3800, unitPrice: 380 },
    { name: 'Specialty Formula #03 (10ml)', spec: 'High-grade 10ml (Box of 10)', cat: 'premium', kitPrice: 12000, unitPrice: 1200 },
    { name: 'Custom Formula Series #04', spec: '15ml unit pack (Box of 10)', cat: 'premium', kitPrice: 9500, unitPrice: 950 },
    { name: 'Sterile Lab Accessory Kit', spec: 'Prep buffer & mixing supplies (10s)', cat: 'supplies', kitPrice: 1000, unitPrice: 100 },
    { name: 'Standard Prep Solvent (5ml)', spec: 'High-purity solvent vials (Box of 10)', cat: 'supplies', kitPrice: 650, unitPrice: 65 },
  ];

  const filteredCatalog = catalog.filter((item) => {
    const matchesCat = priceCategory === 'all' || item.cat === priceCategory;
    const matchesSearch = item.name.toLowerCase().includes(priceSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="showcase" className="w-full max-w-7xl mx-auto py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
      >
        <div>
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest font-semibold mb-2">
            <span className="text-accent">{'///'}</span>
            <span>SHIPPED WORK &amp; ARCHITECTURE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            LIVE DELIVERABLES
          </h2>
        </div>
        <p className="text-sm sm:text-base text-ink-3 max-w-md">
          Systems built for group-buy orders, custom Google Sheet workflows, and commercial websites.
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* HERO DELIVERABLE: Alice GB Live Storefront Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-border shadow-2xl relative overflow-hidden"
        >
          {/* Top Title & Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white shadow-inner">
                  <Cart size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      Alice Group-Buy Storefront
                    </h3>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md uppercase">
                      ACTIVE WAVE
                    </span>
                  </div>
                  <span className="text-xs font-mono text-accent font-semibold block mt-0.5">
                    From Sheets to Dashboard
                  </span>
                </div>
              </div>
              <p className="text-xs text-ink-3 max-w-2xl leading-relaxed">
                Production architecture mirroring standard group-buy Google Sheets: real-time customer Orders, aggregate Summary breakdowns with 10s packaging, and live Master Pricelist catalog.
              </p>
            </div>

            {/* ACTION BUTTONS: Live Demo + Interactive Admin View / Passcode */}
            <div className="flex flex-wrap items-center gap-2.5">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsAdminModalOpen(true)}
                className="inline-flex items-center gap-2 bg-surface hover:bg-surface-2 text-white border border-border hover:border-accent/50 font-mono font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <KeyRound size={14} className="text-accent" />
                <span>Admin View (Passcode Add-on)</span>
              </motion.button>

              <motion.a
                href="https://ak-lmn.github.io/dashboard-demo/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-accent text-white font-mono font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-accent/90 shadow-md transition-all"
              >
                <span>Open Live Demo</span>
                <ArrowUpRight size={14} />
              </motion.a>
            </div>
          </div>

          {/* Authentic 3-Tab Group Buy Dashboard Shell */}
          <div className="bg-[#050507] rounded-2xl border border-white/10 overflow-hidden shadow-inner">
            {/* Top Bar / Tab Navigation */}
            <div className="px-4 sm:px-6 pt-4 pb-3 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#0A0A0D]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-surface p-1 rounded-xl border border-border text-xs font-mono relative">
                  {(
                    [
                      { id: 'orders' as const, label: 'Orders', icon: Users, count: orders.length },
                      { id: 'summary' as const, label: 'Summary', icon: Layers, count: undefined },
                      { id: 'pricelist' as const, label: 'Pricelist', icon: ListFilter, count: undefined },
                    ]
                  ).map((tab) => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer z-10 ${
                          isActive ? 'text-white font-bold' : 'text-ink-3 hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeShowcaseTab"
                            className="absolute inset-0 bg-accent rounded-lg shadow-sm -z-10"
                            transition={{ type: 'spring', stiffness: 600, damping: 35 }}
                          />
                        )}
                        <Icon size={14} />
                        <span>{tab.label}</span>
                        {typeof tab.count === 'number' && (
                          <span className="text-[10px] opacity-75 font-mono">({tab.count})</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-ink-3">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
                <span className="text-white/20">|</span>
                <span>USD → PHP: <strong className="text-white">66.00</strong></span>
              </div>
            </div>

            {/* TAB CONTENT WITH ANIMATED SWITCHING */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {/* TAB CONTENT 1: ORDERS */}
                {activeTab === 'orders' && (
                  <motion.div
                    key="tab-orders"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.12 }}
                    className="p-4 sm:p-6 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div className="relative flex-1 sm:max-w-xs">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-ink-3" />
                        <input
                          type="text"
                          placeholder="Search mock buyer or ref..."
                          value={orderSearch}
                          onChange={(e) => setOrderSearch(e.target.value)}
                          className="w-full bg-surface border border-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-ink-3 focus:outline-none focus:border-accent"
                        />
                      </div>
                      <span className="text-xs font-mono text-ink-3 self-center sm:self-auto">
                        Showing {filteredOrders.length} customer order cards (Mock Data)
                      </span>
                    </div>

                    <div className="space-y-3">
                      {filteredOrders.map((order) => {
                        const isOpen = expandedOrders[order.id];
                        return (
                          <div
                            key={order.id}
                            className="rounded-xl border border-border bg-surface overflow-hidden transition-colors"
                          >
                            {/* Order Header / Card Toggle */}
                            <button
                              type="button"
                              onClick={() => toggleOrder(order.id)}
                              className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-surface-2/60 transition-colors"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center font-mono font-bold text-xs text-white shrink-0">
                                  {order.name.slice(0, 2).toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-sm text-white truncate">{order.name}</span>
                                    <span className="text-[10px] font-mono text-ink-3 bg-surface-2 px-2 py-0.5 rounded-md border border-border shrink-0">
                                      {order.delivery}
                                    </span>
                                  </div>
                                  <span className="text-xs font-mono text-ink-3 block">
                                    {order.itemCount} units ordered · {order.payment}
                                  </span>
                                </div>
                              </div>

                              <div className="text-right shrink-0">
                                <div className="font-sans font-black text-sm text-accent">
                                  ₱{order.total.toLocaleString()}
                                </div>
                                <span className="text-[10px] font-mono text-ink-3">
                                  {isOpen ? 'Collapse ▲' : 'View Lines ▼'}
                                </span>
                              </div>
                            </button>

                            {/* Order Expanded Line Items with Spring Collapse Animation */}
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.15, ease: 'easeOut' }}
                                  className="overflow-hidden border-t border-white/5 bg-[#0A0A0D]/60"
                                >
                                  <div className="px-4 pb-4 pt-2 space-y-2">
                                    <div className="text-[11px] font-mono uppercase tracking-wider text-ink-3 font-semibold pb-1 border-b border-white/5 flex justify-between">
                                      <span>Item</span>
                                      <span>Qty × Price = Subtotal</span>
                                    </div>
                                    {order.items.map((it, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center justify-between text-xs font-mono py-1 border-b border-dashed border-white/5 last:border-none"
                                      >
                                        <span className="text-white font-medium">{it.name}</span>
                                        <span className="text-ink-2">
                                          {it.qty} × ₱{it.unitPrice.toLocaleString()} ={' '}
                                          <strong className="text-white">₱{it.lineTotal.toLocaleString()}</strong>
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* TAB CONTENT 2: SUMMARY (AGGREGATE KPI & 10s PACKAGING) */}
                {activeTab === 'summary' && (
                  <motion.div
                    key="tab-summary"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.12 }}
                    className="p-4 sm:p-6 space-y-6"
                  >
                    {/* KPI Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        { label: 'Total Revenue', value: '₱10,010.00', note: 'Active wave orders', highlight: false },
                        { label: 'Ordered Units', value: '20 Units', note: 'Claimed by buyers', highlight: false },
                        { label: 'Boxes to Order', value: '5 Kits (10s)', note: 'Supplier packaging', highlight: false },
                        { label: 'Cost to Cover', value: '₱15,790.00', note: 'Unclaimed remaining slots', highlight: true },
                      ].map((kpi, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.15 }}
                          className="p-4 rounded-xl bg-surface border border-border"
                        >
                          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-3 block mb-1">
                            {kpi.label}
                          </span>
                          <div
                            className={`text-lg sm:text-xl font-sans font-black ${
                              kpi.highlight ? 'text-accent' : 'text-white'
                            }`}
                          >
                            {kpi.value}
                          </div>
                          <span className="text-[10px] font-mono text-ink-3">{kpi.note}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* 10s Box Rounding Breakdown Table */}
                    <div className="rounded-xl border border-border bg-surface overflow-hidden">
                      <div className="p-4 border-b border-border flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-white">Supplier Packaging Breakdown</h4>
                          <p className="text-xs text-ink-3 font-mono">Calculates round-up to full 10-packs for supplier order placement</p>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-surface-2 text-ink-3 uppercase border-b border-border">
                            <tr>
                              <th className="py-2.5 px-4 font-semibold">Catalog Item</th>
                              <th className="py-2.5 px-4 font-semibold text-right">Ordered</th>
                              <th className="py-2.5 px-4 font-semibold text-right">Missing to 10s</th>
                              <th className="py-2.5 px-4 font-semibold text-right">Boxes Needed</th>
                              <th className="py-2.5 px-4 font-semibold text-right">Cost to Cover</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {summaryRows.map((r, idx) => (
                              <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                                <td className="py-2.5 px-4 font-bold text-white">{r.name}</td>
                                <td className="py-2.5 px-4 text-right text-emerald-400 font-bold">{r.ordered}</td>
                                <td className="py-2.5 px-4 text-right text-amber-400">{r.missing}</td>
                                <td className="py-2.5 px-4 text-right text-white font-bold">{r.boxes}</td>
                                <td className="py-2.5 px-4 text-right text-accent font-bold">
                                  ₱{r.costToCover.toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB CONTENT 3: PRICELIST (CATALOG & RATES) */}
                {activeTab === 'pricelist' && (
                  <motion.div
                    key="tab-pricelist"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.12 }}
                    className="p-4 sm:p-6 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div className="relative flex-1 sm:max-w-xs">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-ink-3" />
                        <input
                          type="text"
                          placeholder="Filter master catalog..."
                          value={priceSearch}
                          onChange={(e) => setPriceSearch(e.target.value)}
                          className="w-full bg-surface border border-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-ink-3 focus:outline-none focus:border-accent"
                        />
                      </div>

                      <div className="flex items-center gap-1 bg-surface p-1 rounded-lg border border-border text-[11px] font-mono">
                        {(['all', 'premium', 'standard', 'supplies'] as const).map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setPriceCategory(cat)}
                            className={`px-2.5 py-1 rounded-md transition-colors capitalize cursor-pointer ${
                              priceCategory === cat
                                ? 'bg-accent text-white font-bold'
                                : 'text-ink-3 hover:text-white'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {filteredCatalog.map((item, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -3 }}
                          transition={{ duration: 0.15 }}
                          className="p-4 rounded-xl bg-surface border border-border flex flex-col justify-between hover:border-accent/40 transition-colors"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <span className="font-bold text-xs text-white leading-snug">{item.name}</span>
                              <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-md shrink-0">
                                ₱{item.unitPrice.toLocaleString()} / unit
                              </span>
                            </div>
                            <span className="text-[11px] font-mono text-ink-3 block mb-3">{item.spec}</span>
                          </div>
                          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                            <span className="text-ink-3">Kit Price (10 units):</span>
                            <span className="text-white font-bold">₱{item.kitPrice.toLocaleString()}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-ink-3">
            <span>Production Architecture: Active Community Wave · Vanilla JS + Google Sheets API</span>
            <span className="text-accent font-bold">From Sheets to Dashboard · ₱500 / Round Base</span>
          </div>
        </motion.div>

        {/* INTERACTIVE PASSCODE / ADMIN VIEW MODAL (Optional Add-on Preview) */}
        <AnimatePresence>
          {isAdminModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
                onClick={() => setIsAdminModalOpen(false)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              />

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ type: 'spring', damping: 25, stiffness: 500 }}
                className="relative z-10 w-full max-w-md rounded-2xl bg-surface border border-border p-6 shadow-2xl space-y-5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white shadow-inner">
                      <KeyRound size={18} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        Admin Access &amp; Member Authorization
                      </h4>
                      <span className="text-[11px] font-mono text-accent">
                        Passcode Lock Add-on (₱50 / round)
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsAdminModalOpen(false)}
                    className="p-1 rounded-lg text-ink-3 hover:text-white hover:bg-surface-2 transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="text-xs text-ink-2 leading-relaxed">
                  When the passcode add-on is active, private wholesale rates and ordering forms are locked behind member phone authorization. Admins can unlock buyers with a single tap, appending them instantly to the Google Sheet auth list.
                </p>

                {/* Add Member Form */}
                <form onSubmit={handleAuthorizeMember} className="space-y-3 p-4 rounded-xl bg-[#0A0A0D] border border-white/5">
                  <span className="text-xs font-mono uppercase text-ink-3 font-semibold block">
                    Quick Authorize Buyer
                  </span>
                  <div className="space-y-2">
                    <input
                      type="tel"
                      placeholder="Enter phone number (e.g. 09171234567)"
                      value={adminPhone}
                      onChange={(e) => setAdminPhone(e.target.value)}
                      required
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-xs text-white placeholder-ink-3 focus:outline-none focus:border-accent"
                    />
                    <input
                      type="text"
                      placeholder="Buyer Name or Tag (optional)"
                      value={adminName}
                      onChange={(e) => setAdminName(e.target.value)}
                      className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-xs text-white placeholder-ink-3 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 px-3 rounded-lg bg-accent text-white font-mono font-bold text-xs hover:bg-accent/90 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Plus size={14} />
                    <span>Authorize &amp; Unlock Buyer</span>
                  </motion.button>
                  {authSuccessMsg && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[11px] font-mono text-emerald-400 mt-2 bg-emerald-500/10 p-2 rounded-md border border-emerald-500/20"
                    >
                      {authSuccessMsg}
                    </motion.p>
                  )}
                </form>

                {/* Authorized Members Live List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-ink-3">
                    <span>Authorized Buyers (Sample)</span>
                    <span>{authorizedList.length} active</span>
                  </div>
                  <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1">
                    {authorizedList.map((m, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between p-2 rounded-lg bg-surface-2/60 border border-border text-xs font-mono"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                          <span className="text-white font-semibold">{m.name}</span>
                        </div>
                        <span className="text-ink-3">{m.phone}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsAdminModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-surface-2 text-xs font-mono text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 2 COMPLEMENTARY SYSTEMS: PBC Group-Buy & 719 Detailing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PBC Group-Buy Suite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white shadow-inner">
                  <Laptop size={18} />
                </div>
                <span className="text-[10px] font-mono text-accent font-bold">
                  CUSTOM WORKFLOW API
                </span>
              </div>
              <h4 className="font-display text-lg font-bold text-white mb-1">
                PBC Group-Buy Operations Suite
              </h4>
              <span className="text-xs font-mono text-ink-3 block mb-3">
                Dual Storefronts Synced to 1 Central Dashboard
              </span>
              <p className="text-xs text-ink-3 leading-relaxed mb-4">
                Two separate customer-facing checkout sites connected directly into one central operations dashboard. Engineered with a custom Google Apps Script API managing shared stock counts, instant webhook triggers, and automated Google Drive payment proof vaulting.
              </p>
            </div>
            <div className="text-[11px] font-mono text-ink-3 pt-3 border-t border-white/5">
              Dual Storefronts · Apps Script API · Drive Vaulting
            </div>
          </motion.div>

          {/* 719 Detailing & Auto Studio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white shadow-inner">
                  <Rocket size={18} />
                </div>
                <span className="text-[10px] font-mono text-ink-3 font-bold">
                  COMMERCIAL WEB
                </span>
              </div>
              <h4 className="font-display text-lg font-bold text-white mb-1">
                719 Detailing &amp; Auto Studio
              </h4>
              <span className="text-xs font-mono text-ink-3 block mb-3">
                Service Catalog &amp; Interactive Inquiries
              </span>
              <p className="text-xs text-ink-3 leading-relaxed mb-4">
                Modern automotive service platform featuring package comparisons, dynamic scheduling inquiry flows, before-and-after project showcase, and mobile-first responsive performance.
              </p>
            </div>
            <div className="text-[11px] font-mono text-ink-3 pt-3 border-t border-white/5">
              Next.js · Responsive · Booking Routes
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
