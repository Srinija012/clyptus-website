import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Award, 
  Heart, 
  Plane, 
  ChevronRight
} from 'lucide-react';

interface CareersPageProps {
  onOpenContact: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sap' | 'oracle' | 'ai' | 'academy'>('all');

  const positions = [
    {
      id: 'sap-brim-lead',
      track: 'sap',
      title: 'Principal SAP BRIM & FI-CA Architect',
      department: 'Enterprise Billing Practice',
      location: 'Hyderabad, India (Hybrid) / Dubai, UAE',
      experience: '8 - 14 Years',
      type: 'Full-time',
      compensation: 'Competitive + Annual Performance Bonus',
      skills: ['SAP BRIM', 'Convergent Invoicing', 'FI-CA', 'T-code FPE1', 'Central Finance'],
      description: 'Lead high-throughput rating and billing architectures for global telecom and BFSI clients. Spearhead migration from ECC into S/4HANA Clean Core.'
    },
    {
      id: 'clean-core-abap',
      track: 'sap',
      title: 'Senior SAP S/4HANA Clean Core Specialist',
      department: 'SAP Core Technologies',
      location: 'Hyderabad / Bengaluru / Remote',
      experience: '5 - 9 Years',
      type: 'Full-time',
      compensation: 'Tier-1 Enterprise Package',
      skills: ['ABAP RESTful Application Programming (RAP)', 'CAP Model', 'SAP BTP', 'OData v4'],
      description: 'Design side-by-side cloud extensions ensuring zero core modifications in multi-tenant enterprise S/4HANA landscapes.'
    },
    {
      id: 'oracle-fusion-dir',
      track: 'oracle',
      title: 'Oracle Cloud ERP Practice Director',
      department: 'Oracle Modernization',
      location: 'Dubai, UAE (DIFC Hub)',
      experience: '10 - 16 Years',
      type: 'Full-time',
      compensation: 'Tax-Free UAE Package + Relocation',
      skills: ['Oracle Fusion Financials', 'E-Business Suite', 'OCI', 'SCM Cloud'],
      description: 'Lead client advisory, enterprise solution blueprints, and transformation delivery for Middle Eastern government and private conglomerates.'
    },
    {
      id: 'ai-erp-engineer',
      track: 'ai',
      title: 'Enterprise AI & LLM Systems Engineer',
      department: 'Applied AI & Telemetry Labs',
      location: 'Bengaluru / Hyderabad (Hybrid)',
      experience: '3 - 7 Years',
      type: 'Full-time',
      compensation: 'Top-tier Tech Compensation + ESOP Pool',
      skills: ['Python', 'LangChain', 'RAG over ERP', 'Kafka Event Mesh', 'Vector DBs'],
      description: 'Build private enterprise copilots and autonomous financial reconciliation agents operating securely on top of S/4HANA and Oracle databases.'
    },
    {
      id: 'academy-associate',
      track: 'academy',
      title: 'Associate Enterprise Consultant (Academy Track)',
      department: 'Clyptus Engineering Academy',
      location: 'Hyderabad / Vijayawada Delivery Hubs',
      experience: '0 - 1 Year (Campus Graduates 2024 - 2026)',
      type: 'Full-time Residency',
      compensation: 'Full Stipend during 6-mo Residency + Guaranteed Fast-Track Conversion',
      skills: ['B.Tech / MCA / M.Tech', 'Data Structures', 'SQL', 'Passion for Enterprise Cloud'],
      description: 'Intensive 6-month hands-on residency with 1:1 mentorship from Principal Architects, learning S/4HANA, BTP, and enterprise integration.'
    },
    {
      id: 'sap-sf-lead',
      track: 'sap',
      title: 'Lead SAP SuccessFactors Architect',
      department: 'HCM Transformation',
      location: 'Hyderabad / Chennai',
      experience: '6 - 11 Years',
      type: 'Full-time',
      compensation: 'Competitive Package',
      skills: ['Employee Central', 'Time Management', 'Payroll Integration', 'CPI'],
      description: 'Architect global HR transformations and complex payroll integrations across multi-country enterprise footprints.'
    }
  ];

  const filteredPositions = activeFilter === 'all'
    ? positions
    : positions.filter(p => p.track === activeFilter);

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc]">
      
      {/* 1. Stripe Ambient Mesh Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200/80 stripe-mesh-light">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#ea4800]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192]">
            <Briefcase className="w-3.5 h-3.5 text-[#ea4800]" />
            Careers at Clyptus
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
                Build the systems that{' '}
                <span className="font-extrabold text-[#0a2540] block sm:inline">
                  power global commerce
                </span>
              </h1>
              <p className="text-base sm:text-xl text-[#425466] max-w-3xl leading-relaxed">
                Join 330+ enterprise engineers, SAP mentors, and cloud architects working on high-impact transformations in India, the UAE, and North America.
              </p>
            </div>

            {/* Quick Hero Key Stats Bento */}
            <div className="lg:col-span-4">
              <div className="stripe-bezel-outer bg-white/70 backdrop-blur-md">
                <div className="stripe-bezel-inner p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0a2540] uppercase tracking-wider">Engineering Cohort</span>
                    <span className="text-[11px] font-mono-code font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Hiring 2026
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-medium">Global Strength</div>
                      <div className="text-xl font-bold font-mono-code text-[#2e3192] mt-0.5">330+</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-medium">Cert Sponsorship</div>
                      <div className="text-xl font-bold font-mono-code text-[#ea4800] mt-0.5">100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center gap-2 sm:gap-3 border-t border-slate-200/60">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-block">Filter Practice:</span>
            {[
              { id: 'all', label: 'All Roles (6 Openings)' },
              { id: 'sap', label: 'SAP Practices' },
              { id: 'oracle', label: 'Oracle Cloud' },
              { id: 'ai', label: 'AI & Telemetry Labs' },
              { id: 'academy', label: 'Academy / Freshers' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === tab.id
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

      {/* 2. Perks & Culture Double-Bezel Bento Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="stripe-bezel-outer p-1.5 bg-gradient-to-b from-white to-slate-50 shadow-sm hover:shadow-lg transition-all">
            <div className="stripe-bezel-inner p-6 space-y-3 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-xl bg-[#2e3192]/10 text-[#2e3192]">
                  <Plane className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0a2540]">Global Mobility</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Opportunities to deploy on-site to Dubai, Singapore, and North America client offices.
                </p>
              </div>
              <span className="text-[10px] font-mono-code font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md w-fit">
                3 Global Hubs
              </span>
            </div>
          </div>

          <div className="stripe-bezel-outer p-1.5 bg-gradient-to-b from-white to-slate-50 shadow-sm hover:shadow-lg transition-all">
            <div className="stripe-bezel-inner p-6 space-y-3 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-xl bg-emerald-50 text-emerald-600">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0a2540]">100% Cert Sponsorship</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Complete exam fee reimbursement and prep bootcamps for official SAP, Oracle & AWS credentials.
                </p>
              </div>
              <span className="text-[10px] font-mono-code font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md w-fit">
                Zero Out-of-Pocket
              </span>
            </div>
          </div>

          <div className="stripe-bezel-outer p-1.5 bg-gradient-to-b from-white to-slate-50 shadow-sm hover:shadow-lg transition-all">
            <div className="stripe-bezel-inner p-6 space-y-3 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-xl bg-[#2e3192]/10 text-[#2e3192]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0a2540]">1:1 Principal Mentorship</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Learn directly from certified Practice Directors with 15+ years in high-volume enterprise billing.
                </p>
              </div>
              <span className="text-[10px] font-mono-code font-bold text-[#2e3192] bg-indigo-50 px-2 py-0.5 rounded-md w-fit">
                Direct CoE Mentors
              </span>
            </div>
          </div>

          <div className="stripe-bezel-outer p-1.5 bg-gradient-to-b from-white to-slate-50 shadow-sm hover:shadow-lg transition-all">
            <div className="stripe-bezel-inner p-6 space-y-3 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-xl bg-pink-50 text-pink-600">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0a2540]">Comprehensive Healthcare</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Extensive group health insurance covering spouse, children, and dependent parents with zero deduction.
                </p>
              </div>
              <span className="text-[10px] font-mono-code font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-md w-fit">
                Family & Parents Covered
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Open Positions List (Stripe-Grade Double-Bezel Cards) */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540]">
              Current Openings
            </h2>
            <p className="text-sm text-slate-500">
              Showing {filteredPositions.length} active opportunities. Direct evaluation within 48 business hours.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {filteredPositions.map(pos => (
            <div
              key={pos.id}
              className="stripe-bezel-outer p-2 bg-gradient-to-b from-white to-slate-50/60 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="stripe-bezel-inner p-6 sm:p-8 bg-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2e3192]/10 text-[#2e3192] border border-[#2e3192]/20">
                      {pos.department}
                    </span>
                    <span className="text-[11px] font-mono-code text-slate-500 px-2.5 py-1 rounded-full bg-slate-100">
                      {pos.type}
                    </span>
                    <span className="text-[11px] font-mono-code text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {pos.compensation}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540] group-hover:text-[#2e3192] transition-colors">
                    {pos.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                    {pos.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pos.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pos.experience}</span>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pos.skills.map((skill, idx) => (
                      <span key={idx} className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
                  <a
                    href={`mailto:hr.india@clyptus.com?subject=Application for ${encodeURIComponent(pos.title)}`}
                    className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all text-center shadow-md shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Apply with Resume</span>
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Academy Showcase Strip (Stripe Dark Mesh) */}
      <section className="mt-16 mx-4 sm:mx-6 lg:mx-8 rounded-3xl overflow-hidden stripe-mesh-dark text-white border border-white/10 shadow-2xl relative">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20 space-y-8 relative z-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#00d4ff] bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              University Relations & Junior Program
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
              The Clyptus Junior{' '}
              <span className="font-extrabold text-white">Engineering Academy</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Over 150+ engineers have launched their enterprise cloud careers through our structured curriculum. 
              We bridge academic foundations to live client S/4HANA production clusters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:border-white/20 transition-all">
              <span className="text-xs font-mono-code text-[#00d4ff] font-bold">STAGE 01</span>
              <h4 className="text-lg font-bold text-white">Foundation Sprint (Month 1-2)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Relational schemas, ABAP modern syntax, RESTful APIs, Git workflows, and enterprise Clean Core standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:border-white/20 transition-all">
              <span className="text-xs font-mono-code text-[#00d4ff] font-bold">STAGE 02</span>
              <h4 className="text-lg font-bold text-white">Sandbox Delivery (Month 3-4)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deploying real OData microservices on SAP BTP and integrating Oracle Cloud test harnesses with mock data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2 hover:border-white/20 transition-all">
              <span className="text-xs font-mono-code text-[#00d4ff] font-bold">STAGE 03</span>
              <h4 className="text-lg font-bold text-white">Shadow Production (Month 5-6)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Shadowing Lead Architects on live multinational client projects with direct code reviews and PR gating.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto">
            <a
              href="mailto:hr.india@clyptus.com?subject=Application for Clyptus Engineering Academy 2026"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#ea4800] text-white hover:bg-[#d03f00] transition-all shadow-lg shadow-orange-500/30 whitespace-nowrap text-center active:scale-95"
            >
              <span>Apply Academy</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onOpenContact}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all whitespace-nowrap text-center backdrop-blur-md"
            >
              <span>Consult Director</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;
