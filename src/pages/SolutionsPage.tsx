import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  CreditCard, 
  Database, 
  Cpu, 
  ChevronRight, 
  Check, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  ArrowUpRight, 
  Zap
} from 'lucide-react';

interface SolutionsPageProps {
  onOpenContact: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sap' | 'brim' | 'oracle' | 'ai'>('all');

  const practices = [
    {
      id: 'sap',
      category: 'sap',
      badge: 'Core Practice',
      badgeColor: 'text-[#2e3192] bg-[#2e3192]/10 border-[#2e3192]/20',
      accentColor: '#2e3192',
      icon: Layers,
      title: 'SAP S/4HANA, SuccessFactors & BTP',
      subtitle: 'Clean Core Migration & Rapid Deployment RDS',
      description: 'We guide enterprise organizations from legacy ECC 6.0 into SAP S/4HANA Clean Core. Our certified SAP consultants bring 5+ pre-packaged Rapid Deployment Solutions (RDS), delivering migrations up to 40% faster with zero core code contamination.',
      highlights: [
        'Greenfield & Brownfield S/4HANA Deployments',
        'SAP Central Finance & FICA High-Volume Reconciliations',
        'SAP SuccessFactors Core HR & Global Payroll Localizations',
        'Modern ABAP on Cloud, CDS Views & Fiori UI5 Custom Applications',
        'SAP BTP Side-by-Side Extensions & Integration Suite'
      ],
      metrics: [
        { label: 'Certified Consultants', value: '120+', detail: 'Enterprise CoE' },
        { label: 'Delivered Projects', value: '50+', detail: 'Zero Escalations' },
        { label: 'Localization Experience', value: '30+', detail: 'Global Countries' },
        { label: 'Proprietary RDS', value: '5+', detail: 'Clean Core Packaged' }
      ],
      telemetry: {
        badge: 'ACTIVE COE',
        title: 'VERIFIED METHODOLOGY',
        value: 'SAP Activate + Clyptus Clean Core Governance',
        metricTitle: 'Core Contamination',
        metricScore: '0.0% (Clean Core Compliant)'
      },
      ctaText: 'Consult SAP S/4HANA Team'
    },
    {
      id: 'brim',
      category: 'brim',
      badge: 'Billing & Monetization',
      badgeColor: 'text-[#0284c7] bg-[#0284c7]/10 border-[#0284c7]/20',
      accentColor: '#0284c7',
      icon: CreditCard,
      title: 'SAP BRIM (Billing & Revenue Innovation Management)',
      subtitle: 'Convergent Charging, Invoicing & FICA Subledgers',
      description: 'Transform high-volume transactions into recognized recurring revenue. Clyptus is one of the premier delivery partners for SAP BRIM across India and the Middle East, architecting Convergent Charging, Invoicing, and FICA subledgers capable of millions of transactions per second.',
      highlights: [
        'Convergent Charging (CC) Real-Time Rating & Dynamic Pricing',
        'Convergent Invoicing (CI) Aggregation & Tax Reconciliation',
        'Contract Accounts Receivable and Payable (FI-CA) Subledger Engine',
        'Subscription Order Management (SOM) & Partner Revenue Share Models'
      ],
      metrics: [
        { label: 'Peak Transaction Rate', value: '10M+', detail: 'Events / Hour' },
        { label: 'Clearing Latency', value: '<25ms', detail: 'Real-Time Clearing' },
        { label: 'Subledger Accuracy', value: '100%', detail: 'Zero Variance' },
        { label: 'Supported Carriers', value: 'Tier-1', detail: 'Telecom & BFSI' }
      ],
      telemetry: {
        badge: 'HIGH-CAPACITY',
        title: 'SUBLEDGER RECONCILIATION',
        value: '100% Real-Time Clearing via FPE1 Automation',
        metricTitle: 'Peak Transaction Ingestion',
        metricScore: '10,000,000+ Events Processed Per Hour'
      },
      ctaText: 'Consult BRIM Specialists'
    },
    {
      id: 'oracle',
      category: 'oracle',
      badge: 'Oracle Practice',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
      accentColor: '#d97706',
      icon: Database,
      title: 'Oracle ERP Cloud, EBS & PeopleSoft',
      subtitle: 'Fusion Modernization & Cloud Lift-and-Shift',
      description: 'We empower organizations to migrate, integrate, and modernize Oracle workloads. Whether you are orchestrating an on-premises EBS upgrade or transitioning to Oracle Fusion Cloud, our architects ensure zero data loss and flawless ledger consolidation.',
      highlights: [
        'Oracle Financials & General Ledger Multi-Entity Balancing',
        'Oracle Supply Chain Management (SCM) & Procurement Modernization',
        'Oracle Human Capital Management (HCM) Cloud Rollouts',
        'EBS to Oracle Cloud Infrastructure (OCI) Lift & Shift Operations'
      ],
      metrics: [
        { label: 'Ledger Modernization', value: '100%', detail: 'Multi-Entity Balanced' },
        { label: 'SCM Cycle Reduction', value: '35%', detail: 'Procurement Velocity' },
        { label: 'Lift & Shift Uptime', value: '99.99%', detail: 'OCI Enterprise' },
        { label: 'Coexistence Matrix', value: 'Fusion', detail: 'EBS & PeopleSoft' }
      ],
      telemetry: {
        badge: 'MULTI-CLOUD',
        title: 'STANDARDIZED ARCHITECTURE',
        value: 'Oracle Fusion Financials + OCI Automation',
        metricTitle: 'Multi-Entity General Ledger',
        metricScore: 'Automated Global Balance Verification'
      },
      ctaText: 'Consult Oracle Practice'
    },
    {
      id: 'ai',
      category: 'ai',
      badge: 'AI Operations',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200',
      accentColor: '#e11d48',
      icon: Cpu,
      title: 'AI-Driven Enterprise Operations & Automation',
      subtitle: 'Self-Healing AMS & Autonomous Ledger Agents',
      description: 'We engineer specialized autonomous agents and hyper-automation pipelines directly embedded into SAP and Oracle workflows. Reduce manual ticket load by up to 82% with automated short-dump analysis, IDoc bottleneck clearing, and predictive maintenance.',
      highlights: [
        'Self-Healing AMS: Autonomous Incident Triage & Resolution',
        'Automated SAP Note Matching & Diagnostic Analysis',
        'Predictive Infrastructure Monitoring Across Hybrid Clouds',
        'AI-Powered Intelligent Document Processing & Invoice Extraction'
      ],
      metrics: [
        { label: 'MTTR Reduction', value: '82%', detail: 'Mean Time to Remediate' },
        { label: 'IDoc Auto-Clear Rate', value: '94%', detail: 'Autonomous Resolution' },
        { label: 'False Positive Ratio', value: '<0.1%', detail: 'Strict Safeguards' },
        { label: 'Tool Integration', value: 'SAP+OEM', detail: 'Datadog & SolMan' }
      ],
      telemetry: {
        badge: 'ACCELERATED',
        title: 'MONITORING COMPATIBILITY',
        value: 'SAP Solution Manager + Datadog + Oracle OEM',
        metricTitle: 'Incident Resolution Acceleration',
        metricScore: '82% Mean Time to Remediate (MTTR) Reduction'
      },
      ctaText: 'Deploy AI Operations'
    }
  ];

  const filteredPractices = activeFilter === 'all' 
    ? practices 
    : practices.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc]">
      
      {/* 1. High-Impact Stripe-Grade Hero Banner */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-200/80 stripe-mesh-light">
        {/* Ambient Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#ea4800]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ea4800] animate-pulse" />
            Enterprise Solutions Portfolio
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
                Comprehensive services for{' '}
                <span className="font-extrabold text-[#0a2540] block sm:inline">
                  mission-critical technology
                </span>
              </h1>
              <p className="text-base sm:text-xl text-[#425466] max-w-3xl leading-relaxed">
                From SAP S/4HANA transformations and high-throughput BRIM billing to Oracle Cloud ERP and autonomous AI operations, Clyptus turns enterprise complexity into competitive advantage.
              </p>
            </div>

            {/* Quick Hero Key Differentiator Bento Card */}
            <div className="lg:col-span-4">
              <div className="stripe-bezel-outer bg-white/60 backdrop-blur-md">
                <div className="stripe-bezel-inner p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0a2540] uppercase tracking-wider">Enterprise Guarantee</span>
                    <span className="text-[11px] font-mono-code font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                      SLA 99.99%
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-medium">Core Contamination</div>
                      <div className="text-xl font-bold font-mono-code text-[#2e3192] mt-0.5">0.0%</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-medium">Throughput Peak</div>
                      <div className="text-xl font-bold font-mono-code text-[#ea4800] mt-0.5">10M/hr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Pills Navigation */}
          <div className="mt-12 flex flex-wrap items-center gap-2 sm:gap-3 pt-6 border-t border-slate-200/60">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-block">Filter Practice:</span>
            {[
              { id: 'all', label: 'All Practices' },
              { id: 'sap', label: 'SAP S/4HANA & Clean Core' },
              { id: 'brim', label: 'SAP BRIM High-Volume' },
              { id: 'oracle', label: 'Oracle Modernization' },
              { id: 'ai', label: 'AI Operations & AMS' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#0a2540] text-white shadow-md shadow-slate-900/10 scale-105'
                    : 'bg-white text-slate-600 hover:text-[#0a2540] hover:bg-slate-100/80 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Bento-Structured Enterprise Practices */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {filteredPractices.map((practice, index) => {
          const IconComponent = practice.icon;
          const isReversed = index % 2 === 1;

          return (
            <div 
              key={practice.id}
              id={practice.id}
              className="stripe-bezel-outer p-2 sm:p-3 bg-gradient-to-b from-white to-slate-50/50 shadow-lg shadow-slate-200/50"
            >
              <div className="stripe-bezel-inner p-6 sm:p-10 bg-white">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Solution Narrative & Deliverables */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${practice.badgeColor} flex items-center gap-2`}>
                        <IconComponent className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">{practice.badge}</span>
                      </div>
                      <span className="text-xs font-mono-code text-slate-400">PRACTICE #{index + 1}</span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight leading-tight">
                        {practice.title}
                      </h2>
                      <div className="text-sm font-semibold text-[#2e3192]">
                        {practice.subtitle}
                      </div>
                    </div>

                    <p className="text-[#425466] text-base leading-relaxed">
                      {practice.description}
                    </p>

                    {/* Feature Highlights Grid */}
                    <div className="space-y-2.5 pt-1">
                      {practice.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0a2540]">
                          <div className="mt-0.5 p-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive CTA */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all shadow-md shadow-orange-500/20 active:scale-95 group"
                      >
                        <span>{practice.ctaText}</span>
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>

                      <button
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-[#0a2540] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#2e3192]" />
                        <span>Request Architecture Blueprint</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: High-Tech Bento Card with Live Metrics */}
                  <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                    
                    {/* Top Telemetry Header */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0a2540] text-white shadow-md space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#ea4800] animate-pulse" />
                          <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-slate-300">
                            {practice.telemetry.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono-code font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                          {practice.telemetry.badge}
                        </span>
                      </div>

                      <div>
                        <div className="text-[11px] text-slate-400 font-mono-code uppercase">{practice.telemetry.metricTitle}</div>
                        <div className="text-xl sm:text-2xl font-bold font-mono-code text-[#ea4800] mt-0.5">
                          {practice.telemetry.metricScore}
                        </div>
                        <div className="text-xs text-slate-300 mt-1 font-sans">
                          {practice.telemetry.value}
                        </div>
                      </div>
                    </div>

                    {/* Bento 2x2 Metrics Matrix */}
                    <div className="grid grid-cols-2 gap-3">
                      {practice.metrics.map((metric, mIdx) => (
                        <div 
                          key={mIdx}
                          className="p-4 rounded-xl bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-700">
                              {metric.label}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2e3192] transition-colors" />
                          </div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] font-mono-code mt-1.5 tracking-tight">
                            {metric.value}
                          </div>
                          <div className="text-[11px] font-semibold text-emerald-600 mt-1">
                            {metric.detail}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Compliance & Security Strip */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-600 font-medium">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Security & Compliance Guaranteed</span>
                      </div>
                      <span className="font-mono-code text-[11px] text-[#2e3192] font-bold bg-[#2e3192]/5 px-2 py-0.5 rounded-md">
                        SOC2 + ISO 27001
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          );
        })}

      </section>

      {/* 3. High-Impact Dark Stripe CTA Section */}
      <section className="mt-16 mx-4 sm:mx-6 lg:mx-8 rounded-3xl overflow-hidden stripe-mesh-dark text-white border border-white/10 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e3192]/30 via-transparent to-[#ea4800]/20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono-code font-bold text-[#ea4800] uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#ea4800]" />
            Immediate Enterprise Engagement
          </div>
          
          <h3 className="text-3xl sm:text-5xl font-light tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to explore an{' '}
            <span className="font-extrabold text-white">implementation roadmap?</span>
          </h3>
          
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Discuss your technical architecture with a Clyptus Principal Solution Director in Hyderabad, Dubai, or North America.
          </p>

          <div className="pt-4 flex flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <button
              onClick={onOpenContact}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all shadow-lg shadow-orange-500/30 active:scale-95 whitespace-nowrap"
            >
              <span>Instant Scoping</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all backdrop-blur-md whitespace-nowrap"
            >
              <span>Regional Contacts</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
