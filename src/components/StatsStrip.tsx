import React from 'react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: '10+',
      label: 'Years of Excellence',
      subtext: 'Enterprise Transformation'
    },
    {
      value: '120+',
      label: 'Certified Consultants',
      subtext: 'SAP S/4HANA, BTP & BRIM'
    },
    {
      value: '50+',
      label: 'Global Deliveries',
      subtext: 'Multinational Rollouts'
    },
    {
      value: '30+',
      label: 'Country Localizations',
      subtext: 'Statutory & Tax Compliance'
    },
    {
      value: '330+',
      label: 'Specialized Engineers',
      subtext: 'India, UAE & North America'
    },
    {
      value: '99.99%',
      label: 'Production SLA',
      subtext: '24/7 Follow-The-Sun AMS'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 border-b border-slate-200/80 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 space-y-1.5">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#2e3192] font-bold font-mono-code">
            The Backbone of Enterprise Operations
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540] tracking-tight">
            Verified scale across global enterprise deployments
          </h3>
        </div>

        {/* Monochromatic High-End Stripe Proof Grid with Hairline Dividers */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 stripe-card-shadow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="px-4 py-3 sm:py-2 text-center flex flex-col justify-center items-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0a2540] group-hover:text-[#2e3192] transition-colors font-mono-code">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0a2540] mt-1.5 leading-snug">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#627d98] mt-0.5 font-normal">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default StatsStrip;