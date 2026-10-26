import React, { useState } from 'react';
import { 
  ChevronRight, 
  CheckCircle2
} from 'lucide-react';
import { StripeHeroCanvas } from './StripeHeroCanvas';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'s4hana' | 'brim' | 'oracle' | 'ai'>('s4hana');

  // Authentic Client & Ecosystem Logos from original clyptus.com
  const enterpriseClientsRow1 = [
    {
      name: 'Deloitte',
      tag: 'Enterprise Advisory',
      domain: 'Global Advisory',
      logo: '/logos/clean/19-e1756801880310.png',
      alt: 'Deloitte Global Advisory'
    },
    {
      name: 'Oracle',
      tag: 'Cloud & ERP',
      domain: 'Cloud Systems',
      logo: '/logos/clean/images-1.png',
      alt: 'Oracle Cloud ERP'
    },
    {
      name: 'NTT DATA',
      tag: 'Global Systems',
      domain: 'System Integration',
      logo: '/logos/clean/27-e1756801621909.png',
      alt: 'NTT DATA Global Solutions'
    },
    {
      name: 'Panasonic',
      tag: 'Industrial Systems',
      domain: 'Electronics & Energy',
      logo: '/logos/clean/3-e1756802368118.png',
      alt: 'Panasonic Industrial Systems'
    },
    {
      name: 'CtrlS Datacenters',
      tag: 'Hyperscale Tier-4',
      domain: 'Mission-Critical Cloud',
      logo: '/logos/clean/25-e1756801655699.png',
      alt: 'CtrlS Hyperscale Datacenters'
    },
    {
      name: 'Welspun',
      tag: 'Global Conglomerate',
      domain: 'Infrastructure & Linepipes',
      logo: '/logos/clean/26-e1756801636482.png',
      alt: 'Welspun Global Group'
    },
    {
      name: 'Greenko',
      tag: 'Energy Transition',
      domain: 'Clean Power Utilities',
      logo: '/logos/clean/18-e1756801908440.png',
      alt: 'Greenko Renewable Energy'
    },
    {
      name: 'Hexaware',
      tag: 'AI & Automation',
      domain: 'Digital Automation',
      logo: '/logos/clean/21-e1756801814752.png',
      alt: 'Hexaware Technologies'
    },
    {
      name: 'Hume Cement',
      tag: 'Manufacturing',
      domain: 'Hong Leong Group',
      logo: '/logos/clean/5-e1756802322565.png',
      alt: 'Hume Cement - Hong Leong Group'
    },
    {
      name: 'Al Nasser Group',
      tag: 'Energy & Power',
      domain: 'Middle East Conglomerate',
      logo: '/logos/clean/8-e1756802255352.png',
      alt: 'Al Nasser Group'
    },
    {
      name: 'DCSoft Technologies',
      tag: 'Enterprise Platforms',
      domain: 'Solution Engineering',
      logo: '/logos/clean/28-e1756801603773.png',
      alt: 'DCSoft Technologies'
    }
  ];

  const enterpriseClientsRow2 = [
    {
      name: 'LTIMindtree',
      tag: 'Digital Core',
      domain: 'L&T Group Digital',
      logo: '/logos/clean/23-e1756801699883.png',
      alt: 'LTIMindtree Cloud Services'
    },
    {
      name: 'Saudia Cargo',
      tag: 'Aviation Logistics',
      domain: 'Global Freight Carrier',
      logo: '/logos/clean/2-e1756802392715.png',
      alt: 'Saudia Cargo Aviation'
    },
    {
      name: 'Penang Port',
      tag: 'Maritime Logistics',
      domain: 'MMC Group Port Operations',
      logo: '/logos/clean/6-e1756802301662.png',
      alt: 'Penang Port - MMC Group'
    },
    {
      name: 'Lumut Port',
      tag: 'Port Operations',
      domain: 'Bulk Maritime Gateway',
      logo: '/logos/clean/4-e1756802347927.png',
      alt: 'Lumut Port Maritime'
    },
    {
      name: 'HCL Technologies',
      tag: 'Engineering R&D',
      domain: 'Global Enterprise Tech',
      logo: '/logos/marquee/16.png',
      alt: 'HCL Technologies'
    },
    {
      name: 'ThingsAlive',
      tag: 'Industrial IoT',
      domain: 'Connected Edge Systems',
      logo: '/logos/clean/1-e1756802417970.png',
      alt: 'ThingsAlive IoT'
    },
    {
      name: 'Artwright',
      tag: 'Integrated Systems',
      domain: 'Smart Workspace Systems',
      logo: '/logos/clean/7-e1756802274153.png',
      alt: 'Artwright Integrated Systems'
    },
    {
      name: 'Al Nasir Company',
      tag: 'Industrial Contracting',
      domain: 'Mechanical & Power',
      logo: '/logos/clean/17-e1756801932419.png',
      alt: 'Al Nasir Company'
    },
    {
      name: 'mlesystems',
      tag: 'Machine Learning',
      domain: 'Applied Enterprise AI',
      logo: '/logos/clean/11-e1756802064985.png',
      alt: 'mlesystems AI'
    },
    {
      name: 'neev SYSTEMS',
      tag: 'Cloud Modernization',
      domain: 'Next-Gen IT Delivery',
      logo: '/logos/marquee/20.png',
      alt: 'neev SYSTEMS'
    }
  ];

  return (
    <section className="relative min-h-[88vh] pt-24 pb-10 sm:pt-32 sm:pb-16 overflow-hidden flex flex-col justify-center bg-white">
      {/* Stripe Signature Iridescent Chromatic Aurora Waves */}
      <StripeHeroCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Corporate Authority Typography */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-xs font-semibold text-[#0a2540]">
                Enterprise Systems Partner · India · UAE · USA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea4800] bg-[#ea4800]/10 px-2 py-0.5 rounded-full">
                10+ Years
              </span>
            </div>

            {/* Main Headline (High Contrast, Eye-Soothing Display) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
              Enterprise infrastructure for{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2e3192] via-[#1e2270] to-[#ea4800]">
                SAP, Oracle & AI
              </span>
            </h1>

            {/* Crisp Corporate Sub-headline (High Contrast Slate-700 #334155, Not Washed Out) */}
            <p className="text-base sm:text-lg text-[#334155] max-w-xl font-normal leading-relaxed">
              Clyptus architects, modernizes, and manages mission-critical enterprise systems. 
              Delivering <span className="font-semibold text-[#0a2540]">SAP S/4HANA Clean Core</span> migrations, 
              <span className="font-semibold text-[#0a2540]"> SAP BRIM</span> high-volume billing engines, and 
              <span className="font-semibold text-[#0a2540]"> Oracle Cloud ERP</span> transformations worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] shadow-md shadow-orange-500/20 hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <span>Book Consultation</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <a
                href="#roi-calculator"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-bold text-[#2e3192] hover:text-[#0a2540] bg-[#2e3192]/10 hover:bg-[#2e3192]/15 rounded-full transition-colors whitespace-nowrap"
              >
                <span>Simulate ROI</span>
                <span className="text-[#ea4800]">→</span>
              </a>

              <a
                href="#services"
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#0a2540] hover:text-[#2e3192] transition-colors whitespace-nowrap"
              >
                <span>View Solutions</span>
                <span className="text-slate-400">→</span>
              </a>
            </div>

            {/* High-Contrast Trust Metrics */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#334155] font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>50+ Global Deliveries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>120+ SAP Certified Leads</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>30+ Country Localizations</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Contrast Corporate Perspective Card */}
          <div className="lg:col-span-5 w-full stripe-perspective-container">
            <div className="w-full max-w-lg mx-auto bg-white rounded-3xl p-5 sm:p-6 stripe-floating-card border border-slate-200 shadow-xl">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-xs font-mono-code text-[#475569] font-bold ml-1.5">
                    clyptus.telemetry.mesh
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-[10px] font-mono-code text-emerald-800 font-bold">99.999% SLA</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl my-3 text-xs">
                <button
                  onClick={() => setActiveConsoleTab('s4hana')}
                  className={`py-1.5 px-2 font-bold rounded-lg transition-all ${
                    activeConsoleTab === 's4hana'
                      ? 'bg-white text-[#0a2540] shadow-sm'
                      : 'text-slate-600 hover:text-[#0a2540]'
                  }`}
                >
                  S/4HANA
                </button>
                <button
                  onClick={() => setActiveConsoleTab('brim')}
                  className={`py-1.5 px-2 font-bold rounded-lg transition-all ${
                    activeConsoleTab === 'brim'
                      ? 'bg-white text-[#0a2540] shadow-sm'
                      : 'text-slate-600 hover:text-[#0a2540]'
                  }`}
                >
                  BRIM
                </button>
                <button
                  onClick={() => setActiveConsoleTab('oracle')}
                  className={`py-1.5 px-2 font-bold rounded-lg transition-all ${
                    activeConsoleTab === 'oracle'
                      ? 'bg-white text-[#0a2540] shadow-sm'
                      : 'text-slate-600 hover:text-[#0a2540]'
                  }`}
                >
                  Oracle
                </button>
                <button
                  onClick={() => setActiveConsoleTab('ai')}
                  className={`py-1.5 px-2 font-bold rounded-lg transition-all ${
                    activeConsoleTab === 'ai'
                      ? 'bg-white text-[#0a2540] shadow-sm'
                      : 'text-slate-600 hover:text-[#0a2540]'
                  }`}
                >
                  AI Ops
                </button>
              </div>

              {/* Telemetry Visual Payload (Clean, High Contrast, Low Text Clutter) */}
              <div className="space-y-2.5">
                {activeConsoleTab === 's4hana' && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#2e3192] tracking-wider">Clean Core Architecture</div>
                        <div className="text-sm font-bold text-[#0a2540]">SAP S/4HANA Cloud BTP</div>
                      </div>
                      <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        100% Validated
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="text-[10px] text-slate-500 font-semibold">CORE MODIFICATIONS</div>
                        <div className="text-base font-extrabold text-[#0a2540]">0 (Clean Core)</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="text-[10px] text-slate-500 font-semibold">RDS ACCELERATION</div>
                        <div className="text-base font-extrabold text-[#ea4800]">40% Faster</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'brim' && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-200/80 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#ea4800] tracking-wider">High-Volume Subscription Billing</div>
                        <div className="text-sm font-bold text-[#0a2540]">SAP BRIM & Convergent Invoicing</div>
                      </div>
                      <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded bg-orange-100 text-[#ea4800]">
                        4.8M / hr
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="text-[10px] text-slate-500 font-semibold">RATING LATENCY</div>
                        <div className="text-base font-extrabold text-emerald-600">14.8 ms</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="text-[10px] text-slate-500 font-semibold">SETTLEMENT STREAM</div>
                        <div className="text-base font-extrabold text-[#0a2540]">Zero Drift</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'oracle' && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">Multi-Cloud ERP Sync</div>
                        <div className="text-sm font-bold text-[#0a2540]">Oracle Fusion Financials Cloud</div>
                      </div>
                      <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        OCI Active
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="text-[10px] text-slate-500 font-semibold">GOLDENGATE SYNC</div>
                        <div className="text-base font-extrabold text-[#0a2540]">Sub-second</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="text-[10px] text-slate-500 font-semibold">CLOSE CYCLE</div>
                        <div className="text-base font-extrabold text-amber-700">-60% Time</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'ai' && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#2e3192] tracking-wider">Enterprise AI Operations</div>
                        <div className="text-sm font-bold text-[#0a2540]">Ledger & Incident Telemetry</div>
                      </div>
                      <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded bg-blue-100 text-[#2e3192]">
                        82% Speedup
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="text-[10px] text-slate-500 font-semibold">INCIDENT MTTR</div>
                        <div className="text-base font-extrabold text-emerald-600">18 minutes</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="text-[10px] text-slate-500 font-semibold">DATA RESIDENCY</div>
                        <div className="text-base font-extrabold text-[#0a2540]">100% Private</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-3.5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-[#475569]">
                <span className="font-semibold text-[#0a2540]">24/7 Follow-The-Sun Governance</span>
                <span className="font-mono-code font-bold text-[#2e3192]">ISO/IEC 27001</span>
              </div>

            </div>
          </div>

        </div>

        {/* Enterprise Platform Ecosystem & Client Logos Marquee */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200/80">
          
          {/* Header & Hierarchy */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#0a2540]">
                Enterprise Platform Ecosystem
              </span>
              <span className="text-[10px] font-mono-code text-[#64748b] border-l border-slate-200 pl-2">
                Strategic Client & Partner Network
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#0a2540] tracking-[-0.02em]">
              Trusted by global industry leaders & critical infrastructure
            </h3>

            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
              Modernizing SAP S/4HANA, Oracle Cloud, and AI operations for multinational conglomerates, tier-1 port operators, clean energy utilities, and hyperscalers.
            </p>
          </div>

          {/* Dual-Track Eye-Soothing Marquee with Gradient Mask Fades */}
          <div className="space-y-4">
            
            {/* Track 1: Scrolling Left */}
            <div className="relative overflow-hidden w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1.5">
                {[...enterpriseClientsRow1, ...enterpriseClientsRow1].map((client, idx) => (
                  <div 
                    key={`row1-${idx}`}
                    className="group/card flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#2e3192]/40 hover:shadow-[0_8px_20px_-4px_rgba(46,49,146,0.12)] hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                  >
                    {/* Normalized Logo Frame */}
                    <div className="w-24 sm:w-28 h-8 flex items-center justify-center p-1 rounded-lg bg-slate-50/70 border border-slate-100 group-hover/card:bg-white group-hover/card:border-slate-200 transition-colors">
                      <img 
                        src={client.logo} 
                        alt={client.alt} 
                        className="max-h-6 sm:max-h-7 max-w-full w-auto object-contain filter grayscale-[25%] opacity-85 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    {/* Visual Hierarchy Stack */}
                    <div className="w-px h-6 bg-slate-200/80" />
                    <div className="flex flex-col text-left pr-1">
                      <span className="text-xs font-bold text-[#0a2540] group-hover/card:text-[#2e3192] transition-colors whitespace-nowrap">
                        {client.name}
                      </span>
                      <span className="text-[10px] font-mono-code text-[#64748b] whitespace-nowrap">
                        {client.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2: Scrolling Right (Opposing Flow) */}
            <div className="relative overflow-hidden w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 py-1.5">
                {[...enterpriseClientsRow2, ...enterpriseClientsRow2].map((client, idx) => (
                  <div 
                    key={`row2-${idx}`}
                    className="group/card flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#2e3192]/40 hover:shadow-[0_8px_20px_-4px_rgba(46,49,146,0.12)] hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                  >
                    {/* Normalized Logo Frame */}
                    <div className="w-24 sm:w-28 h-8 flex items-center justify-center p-1 rounded-lg bg-slate-50/70 border border-slate-100 group-hover/card:bg-white group-hover/card:border-slate-200 transition-colors">
                      <img 
                        src={client.logo} 
                        alt={client.alt} 
                        className="max-h-6 sm:max-h-7 max-w-full w-auto object-contain filter grayscale-[25%] opacity-85 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    {/* Visual Hierarchy Stack */}
                    <div className="w-px h-6 bg-slate-200/80" />
                    <div className="flex flex-col text-left pr-1">
                      <span className="text-xs font-bold text-[#0a2540] group-hover/card:text-[#2e3192] transition-colors whitespace-nowrap">
                        {client.name}
                      </span>
                      <span className="text-[10px] font-mono-code text-[#64748b] whitespace-nowrap">
                        {client.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Trust Hierarchy Metrics Ribbon */}
          <div className="mt-8 pt-5 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#64748b]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-medium text-[#0a2540]">Fortune 500 & Global Conglomerates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-medium text-[#0a2540]">India · UAE · Saudi Arabia · USA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-medium text-[#0a2540]">ISO 27001 & SOC 2 Security Governance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-medium text-[#0a2540]">Zero Core Degradation Architecture</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Hero;