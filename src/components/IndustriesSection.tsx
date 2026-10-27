import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  FlaskConical, 
  Building, 
  Briefcase, 
  Pill, 
  BatteryCharging, 
  ChevronRight
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenContact: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mfg' | 'process' | 'services'>('all');

  const industries = [
    {
      id: 'machine-components',
      name: 'Manufacturing & Smart Factory',
      category: 'mfg',
      desc: 'Discrete manufacturing ERP, shop floor MES integration, PP/QM modules and Industry 4.0 PLC telemetry.',
      icon: Factory,
      color: 'text-blue-600 bg-blue-50',
      image: '/images/smart-factory.jpg'
    },
    {
      id: 'finance-business',
      name: 'Banking, BFSI & Central Finance',
      category: 'services',
      desc: 'Central Finance, FICA high-volume contract accounting, automated reconciliation and IFRS 17 regulatory reporting.',
      icon: Building,
      color: 'text-[#2e3192] bg-[#2e3192]/10',
      image: '/images/financial-accounting.jpg'
    },
    {
      id: 'professional-services',
      name: 'High-Tech, Telecom & Analytics',
      category: 'services',
      desc: 'Convergent mediation, real-time CDR rating, usage-based metering, and ASC 606 revenue recognition.',
      icon: Briefcase,
      color: 'text-cyan-600 bg-cyan-50',
      image: '/images/data-analytics.jpg'
    },
    {
      id: 'ev-semiconductors',
      name: 'EV, Batteries & Semiconductors',
      category: 'mfg',
      desc: 'Cleanroom MES integration, cell traceability, rapid ramp-up templates, and wafer tracking.',
      icon: BatteryCharging,
      color: 'text-emerald-700 bg-emerald-50',
      image: '/images/enterprise-cloud.jpg'
    },
    {
      id: 'pharma',
      name: 'Pharmaceuticals & Life Sciences',
      category: 'process',
      desc: 'FDA 21 CFR Part 11 validation, cold-chain logistics, batch serialization and GxP compliance.',
      icon: Pill,
      color: 'text-teal-600 bg-teal-50',
      image: '/images/sap-implementation.png'
    },
    {
      id: 'chemical',
      name: 'Chemical & Process Industries',
      category: 'process',
      desc: 'Batch management, environmental compliance (EHS), recipe optimization & safety workflows.',
      icon: FlaskConical,
      color: 'text-purple-600 bg-purple-50',
      image: '/images/oracle-erp.jpg'
    }
  ];

  const filteredIndustries = activeCategory === 'all'
    ? industries
    : industries.filter(ind => ind.category === activeCategory);

  return (
    <section id="industries" className="relative py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.06em] text-[#2e3192]">
              17+ Specialized Verticals
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-[#0a2540] leading-tight">
              Deep industry blueprints for{' '}
              <span className="font-extrabold text-[#0a2540]">
                regulated & manufacturing enterprises
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#425466]">
              Pre-packaged industry RDS templates, regulatory compliance engines, 
              and localized business blueprints to shorten time-to-value.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-full border border-slate-200/80 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-[#0a2540] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-[#0a2540]'
              }`}
            >
              All Verticals
            </button>
            <button
              onClick={() => setActiveCategory('mfg')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === 'mfg'
                  ? 'bg-white text-[#0a2540] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-[#0a2540]'
              }`}
            >
              Manufacturing & EV
            </button>
            <button
              onClick={() => setActiveCategory('process')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === 'process'
                  ? 'bg-white text-[#0a2540] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-[#0a2540]'
              }`}
            >
              Pharma & Chemical
            </button>
            <button
              onClick={() => setActiveCategory('services')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === 'services'
                  ? 'bg-white text-[#0a2540] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-[#0a2540]'
              }`}
            >
              Finance & Tech
            </button>
          </div>
        </div>

        {/* Grid: Clean White Cards with Tight Minimal Spacing (gap-4) & Real Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 stripe-card-shadow flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Image Header */}
                <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/70">
                  <img 
                    src={ind.image} 
                    alt={ind.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 p-2 rounded-lg bg-white/95 backdrop-blur-md text-[#0a2540] shadow-sm">
                    <Icon className="w-4 h-4 text-[#2e3192]" />
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm text-slate-100 font-bold">
                      {ind.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0a2540] tracking-tight group-hover:text-[#2e3192] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-[#425466] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#627d98] font-mono-code text-[11px]">Certified RDS</span>
                  <div className="flex items-center gap-2">
                    <Link
                      to="/industries"
                      className="text-slate-600 hover:text-[#0a2540] text-xs font-semibold"
                    >
                      Details
                    </Link>
                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-1 text-[#ea4800] hover:text-[#2e3192] transition-colors"
                    >
                      <span>Consult</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Link to Full 17+ Industries Page */}
        <div className="mt-10 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#0a2540] bg-slate-100 hover:bg-slate-200/80 transition-colors"
          >
            <span>Explore All 17+ Industry Domain Blueprints</span>
            <ChevronRight className="w-4 h-4 text-[#ea4800]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
export default IndustriesSection;