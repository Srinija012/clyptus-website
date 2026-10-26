import React from 'react';
import { MapPin, Phone, Mail, Globe2, ChevronRight, Clock, ShieldCheck, Zap, Server, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StripeGlobe } from './StripeGlobe';

export const GlobalOffices: React.FC = () => {
  const hubs = [
    {
      id: 'hyderabad',
      badge: 'Global Headquarters & CoE',
      city: 'Hyderabad, India',
      address: 'Level 4, Gumidelli Towers, Begumpet, Hyderabad 500016',
      phone: '+91 7799988139',
      email: 'Sales@clyptus.com',
      timezone: 'IST (UTC+5:30)',
      flag: '🇮🇳',
      stat: '180+ Enterprise Engineers',
      tech: 'SAP S/4HANA • BRIM • Clean Core'
    },
    {
      id: 'dubai',
      badge: 'Middle East Regional Hub',
      city: 'Dubai, UAE',
      address: 'In5 Tech, Dubai Internet City / DIFC, Dubai, UAE',
      phone: '+971 52 350 3297',
      email: 'hr.uae@clyptus.com',
      timezone: 'GST (UTC+4:00)',
      flag: '🇦🇪',
      stat: '40+ Advisory Consultants',
      tech: 'MENA BFSI • Cloud Migrations'
    },
    {
      id: 'usa',
      badge: 'North America Practice',
      city: 'Phoenix / Scottsdale, USA',
      address: 'Corporate Centre, Phoenix Metro, Arizona, USA',
      phone: '+1 (480) 427-6373',
      email: 'hr.usa@clyptus.com',
      timezone: 'MST (UTC-7:00)',
      flag: '🇺🇸',
      stat: 'North America Practice',
      tech: 'Enterprise Architecture • AI Ops'
    }
  ];

  const deliveryNodes = [
    { city: 'Bengaluru', role: 'Cloud & AI Innovation Lab', tz: 'IST' },
    { city: 'Chennai', role: 'SAP S/4HANA Delivery Center', tz: 'IST' },
    { city: 'Mumbai', role: 'BFSI & Central Finance Hub', tz: 'IST' },
    { city: 'Vijayawada', role: 'Engineering Academy & Tech Park', tz: 'IST' },
    { city: 'Indore', role: 'Supply Chain & SCM Operations', tz: 'IST' }
  ];

  const stripeStats = [
    {
      value: '99.999%',
      label: 'Core SLA Uptime',
      desc: 'Carrier-grade architecture redundancy',
      icon: ShieldCheck
    },
    {
      value: '< 15 min',
      label: 'Follow-The-Sun P1 SLA',
      desc: 'Direct triage by Lead Architects',
      icon: Zap
    },
    {
      value: '3 Continents',
      label: 'Global Delivery Network',
      desc: 'Seamless cross-border orchestration',
      icon: Server
    },
    {
      value: '180+',
      label: 'Enterprise Architects',
      desc: 'Certified across SAP, Oracle & Cloud',
      icon: Activity
    }
  ];

  return (
    <section id="offices" className="relative py-16 sm:py-24 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100/40 via-purple-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-pink-100/30 via-rose-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Stripe-Style Global Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Stripe Global Scale Narrative & Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2e3192]/10 border border-[#2e3192]/20 text-xs font-bold font-mono-code uppercase tracking-[0.08em] text-[#2e3192]">
              <Globe2 className="w-3.5 h-3.5" />
              Global Scale & Infrastructure
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
                The backbone for{' '}
                <span className="font-extrabold text-[#0a2540] block sm:inline">
                  global enterprise systems.
                </span>
              </h2>

              <p className="text-base text-[#334155] leading-relaxed font-normal">
                Continuous follow-the-sun operations ensuring sub-15-minute P1 response times and localized statutory compliance across three continents. Direct live synchronization between North America advisory and India & UAE delivery centers of excellence.
              </p>
            </div>

            {/* Stripe-style 2x2 Telemetry Metric Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stripeStats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200/90 hover:border-[#2e3192]/40 hover:bg-white transition-all shadow-[0_2px_8px_rgba(10,37,64,0.03)]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="w-4 h-4 text-[#2e3192]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-2xl font-extrabold text-[#0a2540] tracking-tight font-mono-code">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-[#0a2540] mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#64748b] mt-0.5 leading-snug">
                      {stat.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/offices"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0a2540] text-white text-xs font-bold hover:bg-[#2e3192] transition-all shadow-sm"
              >
                <span>View All Regional Nodes</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#475569]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>All 8 nodes operating normally</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Stripe Dot Globe (Copied & adapted from Stripe's signature image) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#f8fafc] to-[#ffffff] border border-slate-200/90 shadow-[0_20px_50px_rgba(10,37,64,0.06)] overflow-hidden p-2 sm:p-4">
              <StripeGlobe />
            </div>
          </div>

        </div>

        {/* 3 Primary Corporate Flagships (Eye-Soothing High Contrast Cards) */}
        <div className="mb-4">
          <div className="text-xs font-bold font-mono-code uppercase tracking-wider text-[#2e3192] mb-3">
            Primary Corporate Headquarters & Regional Hubs
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {hubs.map((hub) => (
              <div
                key={hub.id}
                className="bg-[#f8fafc] rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_2px_10px_rgba(10,37,64,0.04)] flex flex-col justify-between hover:bg-white hover:border-[#2e3192]/40 transition-all group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{hub.flag}</span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono-code font-bold text-[#475569] bg-white px-2 py-0.5 rounded-md border border-slate-200/80">
                      <Clock className="w-3.5 h-3.5 text-[#2e3192]" />
                      <span>{hub.timezone}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono-code font-bold uppercase text-[#2e3192] tracking-wider">
                      {hub.badge}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a2540] mt-0.5 group-hover:text-[#2e3192] transition-colors">
                      {hub.city}
                    </h3>
                  </div>

                  <div className="text-xs text-[#334155] leading-relaxed flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{hub.address}</span>
                  </div>

                  <div className="text-[11px] font-mono-code text-[#64748b] bg-slate-100/70 rounded-lg px-2.5 py-1.5 border border-slate-200/60">
                    <span className="text-[#0a2540] font-semibold">{hub.stat}</span>
                    <span className="mx-1.5 text-slate-400">•</span>
                    <span>{hub.tech}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 space-y-2 text-xs font-mono-code">
                  <a
                    href={`tel:${hub.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-2 font-bold text-[#0a2540] hover:text-[#2e3192] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{hub.phone}</span>
                  </a>
                  <a
                    href={`mailto:${hub.email}`}
                    className="flex items-center gap-2 text-[#475569] hover:text-[#0a2540] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#2e3192]" />
                    <span>{hub.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Network Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="font-bold text-[#0a2540] uppercase tracking-wider font-mono-code text-[11px] shrink-0">
            Regional Centers of Excellence:
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#334155]">
            {deliveryNodes.map((node, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-sm font-semibold text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[#0a2540] font-bold">{node.city}</span>
                <span className="text-[10px] text-slate-500 font-normal hidden sm:inline">({node.role})</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalOffices;
