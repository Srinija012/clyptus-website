import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PerspectiveCard {
  id: string;
  cardTitle: string;
  badge: string;
  category: string;
  readTime: string;
  date: string;
  headline: string;
  description: string;
  buttonText: string;
  image: string;
}

export const BlogSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const perspectives: PerspectiveCard[] = [
    {
      id: 'sap-fica-cfin',
      cardTitle: 'SAP FICA Architecture',
      badge: 'Architecture',
      category: 'SAP Finance & FICA',
      readTime: '6 min read',
      date: 'June 2025',
      headline: 'Decoupling high-volume enterprise ledgers with SAP FI-CA.',
      description: 'Our architecture practice explores how Contract Accounts Receivable and Payable enables sub-second mass processing, automated clearing, and real-time subledger reconciliation into S/4HANA Central Finance.',
      buttonText: 'Read publication',
      image: '/images/sap-implementation.png'
    },
    {
      id: 'sap-brim-hyderabad',
      cardTitle: 'SAP BRIM Blueprint',
      badge: 'Billing & CC',
      category: 'Monetization & Billing',
      readTime: '5 min read',
      date: 'October 2025',
      headline: 'Architecting 10M+ events/hr billing engines at Hyderabad CoE.',
      description: 'Analyzing why Hyderabad has become the premier global delivery hub for Convergent Charging, high-throughput mediation, and subscription monetization for telecommunications and utility conglomerates.',
      buttonText: 'Explore CoE blueprint',
      image: '/images/sap-brim.jpg'
    },
    {
      id: 'oracle-vs-sap-fpe1',
      cardTitle: 'T-Code FPE1 Guide',
      badge: 'Tutorials',
      category: 'Technical Tutorials',
      readTime: '4 min read',
      date: 'June 2025',
      headline: 'Production guide: Posting manual documents with T-Code FPE1.',
      description: 'Step-by-step engineering walkthrough for posting manual adjustments, reconciliation key controls, tax code assignments, and automatic clearing simulations within SAP FI-CA.',
      buttonText: 'Read technical guide',
      image: '/images/oracle-vs-sap.png'
    },
    {
      id: 'it-planning-mistakes',
      cardTitle: 'Enterprise IT Advisory',
      badge: 'Strategy',
      category: 'Executive Strategy',
      readTime: '5 min read',
      date: 'June 2025',
      headline: '5 costly enterprise ERP mistakes and how to prevent them.',
      description: 'Critical pitfalls in scope definition, data cleansing, change governance, and testing gates that derail large-scale ERP migrations, along with our proven framework to preempt them.',
      buttonText: 'Read strategy paper',
      image: '/images/oracle-erp.jpg'
    },
    {
      id: 'managed-it-costs',
      cardTitle: 'Managed Cloud ROI',
      badge: 'Cloud & TCO',
      category: 'Cloud Operations',
      readTime: '5 min read',
      date: 'July 2025',
      headline: 'Slashing operational enterprise infrastructure costs by 42%.',
      description: 'Practical financial modeling of proactive telemetry, continuous security compliance, and license optimization across hybrid multi-cloud and on-premise ERP environments.',
      buttonText: 'Review cloud benchmarks',
      image: '/images/enterprise-cloud.jpg'
    },
    {
      id: 'end-to-end-modernization',
      cardTitle: 'Full Lifecycle Delivery',
      badge: 'Modernization',
      category: 'Enterprise Delivery',
      readTime: '7 min read',
      date: 'August 2025',
      headline: 'Zero-disruption migration blueprints for Fortune 500 ecosystems.',
      description: 'Comprehensive methodology spanning discovery, architecture governance, automated test harness execution, and cutover orchestration across SAP, Oracle, and hybrid cloud workloads.',
      buttonText: 'Explore delivery model',
      image: '/images/end-to-end-impl.jpg'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + perspectives.length) % perspectives.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % perspectives.length);
  };

  // Auto-advance every 6.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % perspectives.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, perspectives.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) {
      handlePrev();
    } else if (deltaX < -40) {
      handleNext();
    }
    touchStartX.current = null;
  };

  const activeItem = perspectives[activeIndex];

  return (
    <section 
      id="blogs" 
      className="relative py-14 sm:py-20 md:py-24 bg-white border-t border-slate-200/70"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Arrow Controls */}
        <div className="flex flex-row items-end justify-between mb-6 sm:mb-8 md:mb-10 gap-3">
          <div className="space-y-1 max-w-xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#0a2540] tracking-tight">
              What's happening
            </h2>
            <p className="text-sm sm:text-xl lg:text-2xl text-slate-500 font-light leading-snug">
              Latest perspectives from our{' '}
              <span className="font-semibold text-[#0a2540]">
                Enterprise Centers of Excellence
              </span>
              .
            </p>
          </div>

          {/* Top Right Navigation Controls (Arrow Buttons) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous perspective"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#635bff]/10 hover:bg-[#635bff]/20 active:scale-95 text-[#635bff] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next perspective"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#635bff]/10 hover:bg-[#635bff]/20 active:scale-95 text-[#635bff] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Responsive Cards Container: Full-width on mobile (<md), Expandable Accordion on desktop (>=md) */}
        <div 
          className="relative w-full h-[360px] sm:h-[400px] md:h-[460px] flex gap-2 md:gap-3.5 select-none overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {perspectives.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Perspective ${idx + 1}: ${item.cardTitle}`}
                className={`relative h-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group ${
                  isActive
                    ? 'w-full md:flex-1 md:min-w-0 shadow-lg ring-1 ring-black/5 block'
                    : 'hidden md:block md:w-16 lg:w-24 shrink-0 hover:opacity-95'
                }`}
              >
                {/* Image Cover */}
                <img
                  src={item.image}
                  alt={item.cardTitle}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isActive ? 'scale-100' : 'group-hover:scale-105'
                  }`}
                />

                {/* Shading Overlays */}
                {isActive ? (
                  <>
                    {/* Deep gradient for crisp legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15 pointer-events-none" />
                    {/* Vibrant brand atmospheric glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2e3192]/40 via-transparent to-[#ea4800]/20 mix-blend-overlay pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[#0a2540]/30 group-hover:bg-[#0a2540]/10 transition-colors duration-300" />
                )}

                {/* Active Card Content */}
                {isActive && (
                  <div className="absolute inset-0 p-5 sm:p-7 md:p-8 flex flex-col justify-between z-10 animate-in fade-in duration-300">
                    {/* Top pill badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-medium tracking-wide shadow-sm max-w-[85%] truncate">
                        <span className="truncate">{item.category}</span>
                        <span className="text-white/60 shrink-0">•</span>
                        <span className="shrink-0">{item.readTime}</span>
                      </div>
                      {/* Mobile slide number badge */}
                      <span className="md:hidden text-[11px] font-mono-code font-bold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}/{perspectives.length}
                      </span>
                    </div>

                    {/* Bottom Left Title & Bottom Right Stripe-Style Parallelogram Glyph */}
                    <div className="flex items-end justify-between gap-3">
                      <div className="max-w-xl">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold md:font-normal text-white tracking-tight leading-[1.15] drop-shadow-md">
                          {item.cardTitle}
                        </h3>
                      </div>

                      {/* Geometric Parallelogram Mark (matching Stripe card visual) */}
                      <div 
                        className="w-7 h-5 sm:w-8 sm:h-6 bg-white/90 backdrop-blur-md rounded-[3px] transform -skew-x-12 shadow-sm flex items-center justify-center shrink-0 pointer-events-none"
                        aria-hidden="true"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2e3192]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Collapsed Card Vertical Hint (Desktop only) */}
                {!isActive && (
                  <div className="hidden md:flex absolute bottom-6 inset-x-0 justify-center pointer-events-none z-10">
                    <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-white/80 [writing-mode:vertical-rl] rotate-180 drop-shadow truncate max-h-32">
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-3.5">
          {perspectives.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-[#635bff]' : 'w-1.5 bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Bottom Details Row (Headline + Excerpt + Button) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-5 mt-5 sm:mt-8 pt-1">
          <div className="flex-1 max-w-3xl">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <strong className="font-semibold text-[#0a2540] block sm:inline mb-1 sm:mb-0">
                {activeItem.headline}{' '}
              </strong>
              <span className="text-slate-600 block sm:inline text-xs sm:text-sm">
                {activeItem.description}
              </span>
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-[#635bff] bg-white text-xs sm:text-sm font-semibold text-[#635bff] hover:text-[#4f46e5] hover:bg-[#635bff]/5 transition-all duration-200 shadow-sm group"
            >
              <span>{activeItem.buttonText}</span>
              <ChevronRight className="w-4 h-4 text-[#635bff] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
