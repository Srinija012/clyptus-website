import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  CreditCard, 
  Radio, 
  HeartPulse, 
  Factory, 
  ShoppingBag, 
  Zap, 
  Landmark, 
  Truck, 
  Laptop, 
  Home, 
  Plane, 
  FlaskConical, 
  ChevronRight, 
  CheckCircle2,
  Search,
  Sparkles
} from 'lucide-react';

interface IndustriesPageProps {
  onOpenContact: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'financial' | 'industrial' | 'consumer' | 'tech'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    {
      id: 'bfsi',
      category: 'financial',
      title: 'Banking, Financial Services & Insurance (BFSI)',
      icon: CreditCard,
      highlight: 'SAP BRIM & Central Finance',
      description: 'High-throughput clearing, automated reconciliation, and multi-currency regulatory reporting handling millions of transactions daily.',
      metrics: ['99.999% Settlement Uptime', 'Zero Reconciliation Drift', 'IFRS 17 / IFRS 9 Compliant'],
      deliverables: ['Convergent Invoicing (CI)', 'Contract Accounts Receivable (FI-CA)', 'Anti-Money Laundering Telemetry']
    },
    {
      id: 'telecom',
      category: 'tech',
      title: 'Telecommunications & 5G Networks',
      icon: Radio,
      highlight: 'Convergent Mediation & Billing',
      description: 'Sub-millisecond rating, subscription entitlement engines, and cross-carrier interconnect settlement for Tier-1 telcos.',
      metrics: ['10M+ Daily CDR Processing', 'Sub-20ms Rating Latency', 'Multi-tenant BSS/OSS'],
      deliverables: ['Real-time Rating Engine', 'Subscriber Billing Matrix', 'B2B Partner Interconnect']
    },
    {
      id: 'healthcare',
      category: 'consumer',
      title: 'Healthcare & Pharmaceuticals',
      icon: HeartPulse,
      highlight: 'GxP Validated Architecture',
      description: 'HIPAA and 21 CFR Part 11 compliant ERP architectures ensuring batch trace, clinical inventory tracking, and patient accounting.',
      metrics: ['100% GxP Audit Record', 'End-to-End Cold Chain Trace', 'Zero Patient PII Leakage'],
      deliverables: ['Electronic Batch Records', 'Serialized Track & Trace', 'Hospital Billing Integration']
    },
    {
      id: 'manufacturing',
      category: 'industrial',
      title: 'Automotive & Discrete Manufacturing',
      icon: Factory,
      highlight: 'Industry 4.0 MES Integration',
      description: 'Synchronized shop-floor execution with SAP S/4HANA digital manufacturing cloud, predictive maintenance, and JIT/JIS sequencing.',
      metrics: ['35% Inventory Reduction', 'Sub-second PLC Telemetry', 'Zero Line-Stoppage Deployments'],
      deliverables: ['SAP DMC Integration', 'Kanban Sequencing Loops', 'OEE Equipment Monitoring']
    },
    {
      id: 'retail',
      category: 'consumer',
      title: 'Retail & Consumer Packaged Goods (CPG)',
      icon: ShoppingBag,
      highlight: 'Unified Commerce Backbone',
      description: 'Omnichannel POS synchronization, global supply allocation, and consumer loyalty ledgers supporting hyper-peak festive volumes.',
      metrics: ['50,000+ Peak TPS Handling', 'Real-time Stock Visibility', '12-Store Pilot to 800+ Rollout'],
      deliverables: ['Omnichannel POS Sync', 'Promotion Settlement Rules', 'Supply Chain Visibility']
    },
    {
      id: 'energy',
      category: 'industrial',
      title: 'Energy, Utilities & Renewables',
      icon: Zap,
      highlight: 'Asset Maintenance & Smart Grid',
      description: 'GIS-coupled asset lifecycle management, smart meter telemetry ingestion, and regulated utility tariff billing.',
      metrics: ['Sub-minute Meter Event Ingestion', 'Critical Asset Uptime > 99.8%', 'Carbon Accounting Ledgers'],
      deliverables: ['SAP IS-U Migration', 'Smart Meter Data Exchange', 'Plant Maintenance Workflows']
    },
    {
      id: 'public_sector',
      category: 'financial',
      title: 'Public Sector & Sovereign Governments',
      icon: Landmark,
      highlight: 'Sovereign Cloud ERP',
      description: 'Audited public finance, state treasury allocations, and citizen service backbones with strict national data residency.',
      metrics: ['100% On-Premise / Sovereign Cloud', 'CAG & Statutory Compliance', 'Multi-Tier Approvals'],
      deliverables: ['Public Funds Accounting', 'Procurement Portal Integrations', 'Statutory Audit Ledgers']
    },
    {
      id: 'logistics',
      category: 'industrial',
      title: 'Logistics, Shipping & Freight Forwarding',
      icon: Truck,
      highlight: 'SAP Transportation Management',
      description: 'Autonomous freight rating, container tracking, customs bonded warehouse integration, and multi-modal route optimization.',
      metrics: ['22% Freight Cost Savings', 'Real-time GPS Milestone Events', 'Paperless Customs Clearing'],
      deliverables: ['SAP TM & EWM Integration', 'Port EDI Message Processing', 'Carrier Settlement Portals']
    },
    {
      id: 'saas_tech',
      category: 'tech',
      title: 'High-Tech & Subscription SaaS',
      icon: Laptop,
      highlight: 'Automated Revenue Recognition',
      description: 'ASC 606 / IFRS 15 automated revenue scheduling, consumption billing, and CRM-to-ERP quote-to-cash pipelines.',
      metrics: ['Automated Monthly Close in 2 Days', 'Multi-tier Metering Engine', 'Zero Billing Leakage'],
      deliverables: ['Usage Metering Aggregators', 'ASC 606 Revenue Recognition', 'Stripe & SAP Hybrid Bridge']
    },
    {
      id: 'real_estate',
      category: 'financial',
      title: 'Real Estate & Commercial Infrastructure',
      icon: Home,
      highlight: 'IFRS 16 Lease & Asset Management',
      description: 'Commercial tenancy management, CAM expense reconciliation, and multi-tenant property revenue automation.',
      metrics: ['100% Lease Accounting Compliance', 'Automated CAM Billing', 'Tenant Portal Self-Service'],
      deliverables: ['Flexible Real Estate (RE-FX)', 'Utility Sub-meter Costing', 'Automated Escalation Rules']
    },
    {
      id: 'aerospace',
      category: 'industrial',
      title: 'Aerospace & Defense',
      icon: Plane,
      highlight: 'ITAR & Defense Supply Security',
      description: 'Stringent compliance with military specs, traceable parts genealogy, and segregated defense contractor security enclaves.',
      metrics: ['ITAR Compliant Data Boundary', '100% Material Serialization', 'Mission-Critical Reliability'],
      deliverables: ['Defense Project Systems (PS)', 'Export Control Gates', 'Secure Supplier Collaboration']
    },
    {
      id: 'chemicals',
      category: 'industrial',
      title: 'Chemicals & Process Manufacturing',
      icon: FlaskConical,
      highlight: 'Batch Traceability & REACH',
      description: 'Hazardous material management, multi-stage recipe formulation, and real-time environment regulatory reporting.',
      metrics: ['Instant Batch Recall Trace', 'Global REACH / OSHA Compliance', 'Yield Optimization'],
      deliverables: ['Process Orders Management', 'Hazardous Substance Ledger', 'Quality Inspection Engine']
    }
  ];

  const filteredIndustries = industries.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.deliverables.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc]">
      
      {/* 1. Stripe Ambient Mesh Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200/80 stripe-mesh-light">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#ea4800]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192]">
            <Building2 className="w-3.5 h-3.5 text-[#ea4800]" />
            17+ Global Industry Verticals
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
                Specialized solutions for{' '}
                <span className="font-extrabold text-[#0a2540] block sm:inline">
                  regulated enterprise domains
                </span>
              </h1>
              <p className="text-base sm:text-xl text-[#425466] max-w-3xl leading-relaxed">
                Enterprise software is only as good as its domain fit. Clyptus delivers battle-tested blueprints customized for the operational compliance, billing nuances, and telemetry of your industry.
              </p>
            </div>

            {/* Quick Domain Search Box */}
            <div className="lg:col-span-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search industry or tech (e.g. BFSI, GxP, TM)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs sm:text-sm text-[#0a2540] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2e3192]/30 focus:border-[#2e3192]"
                />
              </div>
            </div>
          </div>

          {/* Interactive Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center gap-2 sm:gap-3 border-t border-slate-200/60">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-block">Filter Sector:</span>
            {[
              { id: 'all', label: 'All Verticals (17+)' },
              { id: 'financial', label: 'Banking & Financial' },
              { id: 'industrial', label: 'Industrial & Manufacturing' },
              { id: 'consumer', label: 'Healthcare & Retail' },
              { id: 'tech', label: 'Telecom & Tech' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#0a2540] text-white shadow-md shadow-slate-900/10 scale-105'
                    : 'bg-white text-slate-600 hover:text-[#0a2540] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Bento-Structured Industry Double-Bezel Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredIndustries.map(item => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="stripe-bezel-outer p-2 bg-gradient-to-b from-white to-slate-50/50 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="stripe-bezel-inner p-6 sm:p-7 space-y-5 flex flex-col justify-between h-full bg-white">
                  
                  <div className="space-y-4">
                    {/* Card Top: Icon & Monospace Highlight */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="p-3 rounded-xl bg-[#2e3192]/10 text-[#2e3192] group-hover:scale-110 group-hover:bg-[#ea4800]/10 group-hover:text-[#ea4800] transition-all">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono-code font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60 truncate max-w-[200px]">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0a2540] group-hover:text-[#2e3192] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Metrics Chips */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Verified Metrics</div>
                      <div className="space-y-1.5">
                        {item.metrics.map((m, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="font-mono-code text-[11px]">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverable Micro-Pills */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.deliverables.map((deliv, dIdx) => (
                        <span 
                          key={dIdx}
                          className="text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-md"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Request Blueprint CTA */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">Certified RDS Package</span>
                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea4800] hover:text-[#2e3192] transition-colors group/btn"
                    >
                      <span>Request Blueprint</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Global Delivery Callout Banner (Stripe Dark Mesh) */}
      <section className="mt-16 mx-4 sm:mx-6 lg:mx-8 rounded-3xl overflow-hidden stripe-mesh-dark text-white border border-white/10 shadow-2xl relative">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono-code font-bold text-[#00d4ff] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#ea4800]" />
            Global Domain Competence
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
            Need an enterprise architect{' '}
            <span className="font-extrabold text-white">specialized in your domain?</span>
          </h2>
          
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our 120+ senior SAP & Oracle consultants have delivered implementations across 30+ countries. Speak directly with an Industry Lead today.
          </p>

          <div className="pt-2 flex flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <button
              onClick={onOpenContact}
              className="flex-1 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all shadow-lg shadow-orange-500/30 whitespace-nowrap active:scale-95"
            >
              Consult Specialist
            </button>
            <Link
              to="/architecture"
              className="flex-1 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all whitespace-nowrap text-center backdrop-blur-md"
            >
              View Clean Core
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;
