import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe2, 
  ChevronRight,
  Zap
} from 'lucide-react';
import { StripeGlobe } from '../components/StripeGlobe';

interface OfficesPageProps {
  onOpenContact: () => void;
}

export const OfficesPage: React.FC<OfficesPageProps> = ({ onOpenContact }) => {
  const [activeRegion, setActiveRegion] = useState<'all' | 'india' | 'uae' | 'usa'>('all');

  const offices = [
    {
      id: 'hyderabad',
      region: 'india',
      tier: 'Global Headquarters & CoE',
      name: 'Hyderabad Global Delivery Centre',
      city: 'Hyderabad, India',
      address: 'Level 4, Gumidelli Towers, Old Airport Road, Begumpet, Hyderabad, Telangana 500016',
      phone: '+91 7799988139',
      altPhone: '+91 9100115466',
      email: 'Sales@clyptus.com',
      hrEmail: 'hr.india@clyptus.com',
      timezone: 'IST (UTC+5:30)',
      headcount: '180+ Engineers & SAP Architects',
      badge: 'Headquarters'
    },
    {
      id: 'dubai',
      region: 'uae',
      tier: 'Middle East & Africa HQ',
      name: 'Dubai DIFC & Tech Hub',
      city: 'Dubai, UAE',
      address: 'In5 Tech, Dubai Internet City / DIFC Financial District, Dubai, UAE',
      phone: '+971 52 350 3297',
      altPhone: '+971 50 483 6190',
      email: 'hr.uae@clyptus.com',
      hrEmail: 'hr.uae@clyptus.com',
      timezone: 'GST (UTC+4:00)',
      headcount: '40+ Enterprise Solution Advisors',
      badge: 'MENA Hub'
    },
    {
      id: 'usa',
      region: 'usa',
      tier: 'North America Engagement Office',
      name: 'North America Operations',
      city: 'Phoenix / Scottsdale, USA',
      address: 'North Scottsdale Corporate Centre, Phoenix Metro, Arizona, USA',
      phone: '+1 (480) 427-6373',
      altPhone: '+1 (480) 427-6373',
      email: 'hr.usa@clyptus.com',
      hrEmail: 'hr.usa@clyptus.com',
      timezone: 'MST (UTC-7:00)',
      headcount: 'North America Advisory Practice',
      badge: 'Americas Hub'
    },
    {
      id: 'bengaluru',
      region: 'india',
      tier: 'Advanced Engineering Centre',
      name: 'Bengaluru Tech Lab',
      city: 'Bengaluru, Karnataka, India',
      address: 'Whitefield IT Park & Outer Ring Road Tech Zone, Bengaluru, Karnataka 560066',
      phone: '+91 733 116 1699',
      altPhone: '+91 7799988139',
      email: 'Sales@clyptus.com',
      hrEmail: 'hr.india@clyptus.com',
      timezone: 'IST (UTC+5:30)',
      headcount: 'Cloud, AI & Full-Stack Hub',
      badge: 'Delivery Centre'
    },
    {
      id: 'chennai',
      region: 'india',
      tier: 'Enterprise Systems Centre',
      name: 'Chennai Innovation Centre',
      city: 'Chennai, Tamil Nadu, India',
      address: 'OMR Cyber Corridor, Thoraipakkam, Chennai, Tamil Nadu 600097',
      phone: '+91 7799988139',
      altPhone: '+91 9100115466',
      email: 'Sales@clyptus.com',
      hrEmail: 'hr.india@clyptus.com',
      timezone: 'IST (UTC+5:30)',
      headcount: 'SAP S/4HANA & SuccessFactors',
      badge: 'Delivery Centre'
    },
    {
      id: 'mumbai',
      region: 'india',
      tier: 'BFSI & FinTech Center',
      name: 'Mumbai Financial District',
      city: 'Mumbai, Maharashtra, India',
      address: 'Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051',
      phone: '+91 7799988139',
      altPhone: '+91 733 116 1699',
      email: 'Sales@clyptus.com',
      hrEmail: 'hr.india@clyptus.com',
      timezone: 'IST (UTC+5:30)',
      headcount: 'Banking & Central Finance Hub',
      badge: 'FinTech Hub'
    },
    {
      id: 'vijayawada',
      region: 'india',
      tier: 'Regional Delivery Centre',
      name: 'Vijayawada Development Office',
      city: 'Vijayawada, Andhra Pradesh, India',
      address: 'IT SEZ & Tech Enclave, Vijayawada, Andhra Pradesh 520008',
      phone: '+91 7799988139',
      altPhone: '+91 9100115466',
      email: 'hr.india@clyptus.com',
      hrEmail: 'hr.india@clyptus.com',
      timezone: 'IST (UTC+5:30)',
      headcount: 'Junior Talent & Academy Hub',
      badge: 'Academy Centre'
    },
    {
      id: 'indore',
      region: 'india',
      tier: 'Central India Hub',
      name: 'Indore Technology Center',
      city: 'Indore, Madhya Pradesh, India',
      address: 'Super Corridor IT Hub, Indore, Madhya Pradesh 452005',
      phone: '+91 7799988139',
      altPhone: '+91 733 116 1699',
      email: 'hr.india@clyptus.com',
      hrEmail: 'hr.india@clyptus.com',
      timezone: 'IST (UTC+5:30)',
      headcount: 'Supply Chain & Logistics Centre',
      badge: 'Delivery Centre'
    }
  ];

  const filteredOffices = activeRegion === 'all' 
    ? offices 
    : offices.filter(o => o.region === activeRegion);

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc]">
      
      {/* 1. Header Banner with Stripe 3D Globe & Radiant Ambient Mesh */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200/80 stripe-mesh-light">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#ea4800]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Title & Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192]">
                <Globe2 className="w-3.5 h-3.5 text-[#ea4800]" />
                Global Presence & Regional Hubs
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
                Seamless delivery across{' '}
                <span className="font-extrabold text-[#0a2540] block sm:inline">
                  three continents
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#425466] leading-relaxed">
                Headquartered in Hyderabad with dedicated regional hubs in Dubai and North America, Clyptus operates 24/7 follow-the-sun engineering and production support for enterprise clients worldwide.
              </p>

              {/* Region Tabs */}
              <div className="pt-3 flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'All Offices (8 Locations)' },
                  { id: 'india', label: 'India Network (6 Cities)' },
                  { id: 'uae', label: 'UAE & Middle East (Dubai)' },
                  { id: 'usa', label: 'North America (Phoenix)' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveRegion(tab.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activeRegion === tab.id
                        ? 'bg-[#0a2540] text-white shadow-md shadow-slate-900/10 scale-105'
                        : 'bg-white text-slate-600 hover:text-[#0a2540] hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive 3D Stripe Dot Globe in Double-Bezel Frame */}
            <div className="lg:col-span-6">
              <div className="stripe-bezel-outer p-2 bg-gradient-to-b from-white to-slate-100 shadow-xl">
                <div className="stripe-bezel-inner rounded-[calc(1.5rem-2px)] overflow-hidden bg-white p-2">
                  <StripeGlobe />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Global Offices Grid (Double-Bezel Bento Cards) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredOffices.map(office => (
            <div 
              key={office.id}
              className="stripe-bezel-outer p-2 bg-gradient-to-b from-white to-slate-50/60 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="stripe-bezel-inner p-6 sm:p-7 space-y-4 flex flex-col justify-between h-full bg-white">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2e3192]/10 text-[#2e3192] border border-[#2e3192]/20">
                      {office.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono-code bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{office.timezone}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0a2540] group-hover:text-[#2e3192] transition-colors leading-snug">
                      {office.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#ea4800] mt-0.5 font-mono-code">
                      {office.tier}
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#425466] leading-relaxed pt-1">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="font-mono-code text-slate-700 hover:text-[#2e3192] font-semibold">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#ea4800] shrink-0" />
                      <a href={`mailto:${office.email}`} className="font-mono-code text-slate-700 hover:text-[#2e3192]">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium font-mono-code">{office.headcount}</span>
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ea4800] hover:text-[#2e3192] transition-colors group/btn"
                  >
                    <span>Connect</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Follow-the-Sun SLA Guarantee (Stripe Dark Mesh) */}
      <section className="mt-16 mx-4 sm:mx-6 lg:mx-8 rounded-3xl overflow-hidden stripe-mesh-dark text-white border border-white/10 shadow-2xl relative">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono-code font-bold text-[#ea4800] uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-[#ea4800]" />
                24/7/365 Global SLA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Continuous follow-the-sun operations
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                When business hours close in the Americas, engineering seamlessly hands off to India and the UAE, guaranteeing continuous P1 incident response under 15 minutes.
              </p>
            </div>

            <div className="flex flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:+917799988139"
                className="flex-1 md:flex-initial px-6 py-3.5 rounded-full text-xs font-bold bg-white text-[#0a2540] hover:bg-slate-100 transition-all text-center whitespace-nowrap shadow-md"
              >
                Call Global Desk
              </a>
              <button
                onClick={onOpenContact}
                className="flex-1 md:flex-initial px-6 py-3.5 rounded-full text-xs font-bold bg-[#ea4800] text-white hover:bg-[#d03f00] transition-all text-center whitespace-nowrap shadow-lg shadow-orange-500/30 active:scale-95"
              >
                Book Meeting
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OfficesPage;
