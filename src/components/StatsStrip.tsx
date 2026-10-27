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

        {/* High-End Stripe Proof Grid with Balanced Mobile Tiles & Desktop Hairline Dividers */}
        <div className="bg-white rounded-2xl p-3 sm:p-6 border border-slate-200/80 stripe-card-shadow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-0 sm:divide-x sm:divide-y-0 divide-slate-200/70">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-3 sm:px-4 sm:py-2 rounded-xl sm:rounded-none bg-[#f8fafc]/90 sm:bg-transparent border sm:border-0 border-slate-100/90 text-center flex flex-col justify-center items-center group transition-colors"
            >
              <div className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0a2540] group-hover:text-[#2e3192] transition-colors font-mono-code">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0a2540] mt-1 sm:mt-1.5 leading-snug">
                {stat.label}
              </div>
              <div className="text-[10.5px] sm:text-[11px] text-[#627d98] mt-0.5 font-normal leading-tight">
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