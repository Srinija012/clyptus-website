import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { BentoSolutions } from '../components/BentoSolutions';
import { ArchitectureExplorer } from '../components/ArchitectureExplorer';
import { EnterpriseRoiCalculator } from '../components/EnterpriseRoiCalculator';
import { EnterpriseTrustSection } from '../components/EnterpriseTrustSection';
import { ReviewsMarqueeSection } from '../components/ReviewsMarqueeSection';
import { GlobalOffices } from '../components/GlobalOffices';
import { LeadershipSection } from '../components/LeadershipSection';
import { BlogSection } from '../components/BlogSection';

interface HomePageProps {
  onOpenContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContact }) => {
  return (
    <div>
      {/* 1. Stripe Aurora Hero Section with Live Telemetry Console */}
      <Hero onOpenContact={onOpenContact} />

      {/* 2. Stripe-Grade Modular Solutions Bento (Section 2 - Exact Replica) */}
      <BentoSolutions onOpenContact={onOpenContact} />

      {/* 3. The Backbone of Enterprise Operations (Stripe-Grade Proof Grid) */}
      <StatsStrip />

      {/* 4. Interactive Architecture & Live Telemetry Explorer */}
      <ArchitectureExplorer />

      {/* 5. Interactive Enterprise TCO & Modernization Estimator */}
      <EnterpriseRoiCalculator onOpenContact={onOpenContact} />

      {/* 6. Enterprise Trust, Security & Compliance Hub */}
      <EnterpriseTrustSection />

      {/* 7. Verified Client Reviews & Executive Testimonials Marquee (Image Style) */}
      <ReviewsMarqueeSection />

      {/* 8. Global Offices (Hyderabad HQ, Dubai, USA & India) */}
      <GlobalOffices />

      {/* 8. Practice Leadership & Executive Governance */}
      <LeadershipSection />

      {/* 9. Engineering & Architecture Insights */}
      <BlogSection />

      {/* 10. Stripe-Style Bottom Full-Width CTA Banner */}
      <section className="relative py-14 sm:py-20 bg-[#f6f9fc] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2e3192] via-[#232779] to-[#1a1d5a] rounded-3xl p-6 sm:p-14 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border border-[#2e3192]/20">
            <div className="space-y-2.5 sm:space-y-3 max-w-xl">
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-orange-200">
                Ready to Modernize Your Enterprise?
              </span>
              <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug">
                Architect your SAP, Oracle, and AI future today.
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Direct engagement with Clyptus Senior Practice Directors in India, UAE, and North America.
              </p>
            </div>

            <div className="flex flex-col min-[380px]:flex-row items-stretch min-[380px]:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
              <Link
                to="/contact"
                className="flex-1 sm:flex-initial px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all shadow-md text-center whitespace-nowrap active:scale-95"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+917799988139"
                className="flex-1 sm:flex-initial px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center whitespace-nowrap"
              >
                +91 7799988139
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
