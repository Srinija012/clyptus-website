import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Globe2, 
  CheckCircle2, 
  Award,
  Activity
} from 'lucide-react';

export const EnterpriseTrustSection: React.FC = () => {
  const certifications = [
    {
      title: 'SOC 2 Type II Compliant',
      subtitle: 'Independently audited controls across security, availability, and confidential data isolation.',
      badge: 'AUDITED',
      icon: ShieldCheck
    },
    {
      title: 'ISO/IEC 27001 Certified',
      subtitle: 'Global standard for enterprise information security management systems (ISMS).',
      badge: 'CERTIFIED',
      icon: Lock
    },
    {
      title: 'SAP Clean Core Verified',
      subtitle: 'Strict zero-modification architectural governance via SAP BTP side-by-side extensibility.',
      badge: 'CLEAN CORE',
      icon: Award
    },
    {
      title: 'Global Statutory Compliance',
      subtitle: 'Pre-built localization for UAE Corporate Tax/FTA, Indian GST e-Invoicing, and US Multi-State Sales Tax.',
      badge: '30+ COUNTRIES',
      icon: Globe2
    }
  ];

  const infrastructureMetrics = [
    { label: 'Core Ledger SLA', value: '99.999%', sub: 'Mission-critical tier' },
    { label: 'Mediation Throughput', value: '10M+/hr', sub: 'High-volume BRIM' },
    { label: 'Follow-The-Sun AMS', value: '24/7/365', sub: 'India, UAE, USA' },
    { label: 'Average MTTR', value: '< 18 min', sub: 'Automated triage' }
  ];

  return (
    <section id="trust" className="relative py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192] bg-[#2e3192]/10 px-3 py-1 rounded-full">
            <Lock className="w-3.5 h-3.5" />
            Enterprise Trust & Security Architecture
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-[#0a2540] leading-tight">
            Engineered for organizations with{' '}
            <span className="font-extrabold text-[#0a2540]">
              zero tolerance for failure
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
            Our delivery frameworks combine SOC2 Type II security boundaries, multi-region sovereign data compliance, 
            and automated SAP/Oracle disaster recovery protocols.
          </p>
        </div>

        {/* 4-Box Certification Grid - Side-by-side on mobile (2 cols) and desktop (4 cols) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-12">
          {certifications.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#f6f9fc] rounded-2xl p-4 sm:p-6 border border-slate-200/80 stripe-card-shadow flex flex-col justify-between group hover:bg-white transition-all"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white text-[#2e3192] shadow-sm border border-slate-200/60 inline-flex">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono-code font-bold uppercase px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="text-xs sm:text-base font-bold text-[#0a2540] tracking-tight group-hover:text-[#2e3192] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#425466] leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono-code text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>Audited & Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Hyperscaler & SLA Banner */}
        <div className="bg-[#0a2540] rounded-3xl p-6 sm:p-10 text-white border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#ea4800] uppercase tracking-wider font-bold">
                <Activity className="w-4 h-4" />
                Global Hyperscaler Interconnect
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                High-availability edge across AWS, Azure, OCI & GCP
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Direct peering with major enterprise backbones. Low-latency database replication, 
                automated failover with RPO &lt; 5 seconds, and RTO &lt; 15 minutes.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-code">
              {infrastructureMetrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#ea4800]">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-bold text-white leading-tight">
                    {metric.label}
                  </div>
                  <div className="text-[9px] text-slate-400">
                    {metric.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
export default EnterpriseTrustSection;
