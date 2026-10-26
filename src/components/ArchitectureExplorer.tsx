import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ArchitectureExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'s4hana' | 'brim' | 'btp' | 'ai'>('s4hana');
  const [copied, setCopied] = useState(false);

  const corporateModules = {
    s4hana: {
      badge: 'Clean Core Strategy',
      title: 'SAP S/4HANA Cloud & BTP',
      tagline: 'Zero Core Modifications · Side-by-Side CAP/RAP',
      specs: [
        { label: 'S/4HANA Target', value: '2026 Clean Core' },
        { label: 'Subledger Sync', value: 'FI-CA Real-Time' },
        { label: 'Currencies', value: 'USD, AED, INR, EUR' },
        { label: 'SLA Guarantee', value: '99.999% SLA' }
      ],
      highlights: [
        'Preserves core ERP standard code for frictionless automatic updates',
        'Event-driven asynchronous messaging via AMQP Enterprise Broker',
        'Modern Fiori UI5 launchpad with unified mobile responsiveness'
      ]
    },
    brim: {
      badge: 'High-Volume Monetization',
      title: 'SAP BRIM Convergent Invoicing',
      tagline: '10M Events / Hour · Sub-20ms Rating Latency',
      specs: [
        { label: 'Throughput', value: '10M Events / hr' },
        { label: 'Mediation', value: 'Kafka Stream' },
        { label: 'Pricing Matrix', value: 'Dynamic Billing' },
        { label: 'Settlement', value: 'Zero Drift' }
      ],
      highlights: [
        'Real-time credit checks and multi-tier usage metering',
        'Pre-integrated Vertex tax engine for cross-border compliance',
        'Automated dispute resolution cutting reconciliation overhead'
      ]
    },
    btp: {
      badge: 'Enterprise Cloud Extensions',
      title: 'SAP BTP Microservices Mesh',
      tagline: 'Strict Tenant Isolation · Zero Data Drift',
      specs: [
        { label: 'Isolation', value: 'Strict Tenant VPC' },
        { label: 'Security', value: 'XSUAA & MFA' },
        { label: 'Connectivity', value: 'Cloud Connector' },
        { label: 'Propagation', value: 'Principal Trust' }
      ],
      highlights: [
        'Custom vendor portal, procure-to-pay, and audit microservices',
        'Clean extension runtime without modifying underlying database',
        'Role-based zero-trust security and end-to-end token validation'
      ]
    },
    ai: {
      badge: 'Autonomous Operations',
      title: 'Enterprise Self-Healing AIOps',
      tagline: '3.4s MTTD · 82% MTTR Acceleration',
      specs: [
        { label: 'Detection Speed', value: '< 3.4 seconds' },
        { label: 'MTTR Speedup', value: '82% Faster' },
        { label: 'Data Privacy', value: '100% Private Cloud' },
        { label: 'Telemetry', value: 'SolMan & Cloud Stream' }
      ],
      highlights: [
        'Autonomous rate-limited reprocessing of blocked IDoc queues',
        'Automated rogue lock-table mitigation with instant incident notification',
        'Deep LLM diagnostic note matching for immediate resolution'
      ]
    }
  };

  const codeSnippets = {
    s4hana: `// Clyptus SAP S/4HANA Clean Core Migration Architecture
import { S4HANAClient, CloudBTP } from '@clyptus/sap-core';

export const enterpriseArchitecture = new S4HANAClient({
  deploymentMode: 'HYBRID_CLEAN_CORE',
  targetVersion: 'S/4HANA 2026 FPS02',
  centralFinance: {
    ficaSubledgerSync: true,
    realTimeReplication: 'SAP_SLT_ENGINE',
    multicurrencyLedger: ['USD', 'AED', 'INR', 'EUR']
  },
  btpExtensions: {
    runtime: 'NODEJS_CAP_V8',
    eventMesh: 'AMQP_ENTERPRISE_BROKER',
    fioriLaunchpad: 'UI5_MODERN_V1_120'
  },
  slaGuarantee: '99.999% MISSION_CRITICAL'
});`,
    brim: `// Clyptus SAP BRIM (Billing & Revenue Innovation Management)
import { ConvergentCharging, FICAEngine } from '@clyptus/sap-brim';

export const billingPipeline = new ConvergentCharging({
  throughputTarget: '10,000,000 events / hr',
  mediationEngine: 'REALTIME_STREAM_KAFKA',
  pricingLogic: {
    tierModel: 'CONSUMPTION_DYNAMIC_MATRIX',
    currencyNormalization: true,
    realTimeCreditCheck: true
  },
  invoicing: {
    convergentInvoicing: true,
    taxEngine: 'VERTEX_GLOBAL_INTEGRATION',
    autoDisputeResolution: 'AI_AGENTIC_DISPATCH'
  }
});`,
    btp: `// Clyptus SAP BTP Side-by-Side Extension Pattern
import { BTPRuntime, AIWorkflow } from '@clyptus/sap-btp';

export const btpExtension = new BTPRuntime({
  isolation: 'TENANT_STRICT',
  destination: 'S4HANA_ON_PREM_CLOUD_CONNECTOR',
  security: {
    xsuaa: true,
    principalPropagation: true,
    mfaEnforced: true
  },
  customApps: [
    'VendorPortal_Fiori_UI5',
    'ProcureToPay_Analytics_Dashboard',
    'AI_Expense_Audit_Bot'
  ]
});`,
    ai: `// Clyptus Enterprise AI Self-Healing Ops Engine
import { ClyptusAIOps, IncidentTriage } from '@clyptus/ai-enterprise';

export const autonomousOps = new ClyptusAIOps({
  agentRole: 'ENTERPRISE_SAP_ORACLE_SRE',
  monitoringFeeds: ['SAP_SOLMAN', 'DATADOG', 'ORACLE_OEM'],
  autoRemediation: {
    idocBottlenecks: 'AUTO_REPROCESS_WITH_RATE_LIMIT',
    lockTableExhaustion: 'AUTO_KILL_ROGUE_SESSION_NOTIFY_LEAD',
    shortDumpAnalysis: 'DEEP_LLM_NOTE_MATCHING'
  },
  meanTimeToDetect: '< 3.4 seconds',
  mttrImprovement: '82% faster than manual AMS'
});`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ecosystem" className="relative py-24 sm:py-36 bg-[#0a2540] text-white overflow-hidden my-12">
      
      {/* Stripe Authentic Diagonal Section Accent Slices */}
      <div className="absolute -top-12 left-0 right-0 h-20 bg-[#0a2540] transform -skew-y-2 origin-top-left" />
      <div className="absolute -bottom-12 left-0 right-0 h-20 bg-[#0a2540] transform -skew-y-2 origin-bottom-left" />

      {/* Ambient Radial Gradient Glow */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, #ea4800 0%, #2e3192 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Technical Narrative (Stripe Style) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.06em] text-[#ea4800]">
              <ShieldCheck className="w-4 h-4" />
              Enterprise Architecture Blueprint
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-white leading-tight">
              Built for architects, engineered for{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ea4800] via-[#ff7a3d] to-amber-200">
                pure resilience
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Inspect the exact technical paradigms Clyptus deploys. We champion SAP Clean Core principles, 
              isolated BTP extension microservices, and automated SLA telemetry.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea4800] shrink-0" />
                <span>Zero modification of S/4HANA core via BTP side-by-side apps</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea4800] shrink-0" />
                <span>High-throughput BRIM billing rating millions of events per hour</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea4800] shrink-0" />
                <span>Automated ticket triage and self-healing AMS workflows</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/architecture"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#ea4800] hover:bg-[#d03f00] text-white transition-all shadow-lg shadow-orange-500/20 active:scale-95"
              >
                <span>Full Interactive Architecture Console</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Corporate Module View (Mobile) / Interactive Terminal (Desktop) */}
          <div className="lg:col-span-7">
            {/* ========================================================================= */}
            {/* MOBILE VIEW: Executive Corporate Architecture Modules (Zero CLI aesthetic) */}
            {/* ========================================================================= */}
            <div className="block md:hidden bg-[#081b38] rounded-2xl border border-white/10 p-4 space-y-4 shadow-2xl">
              {/* Corporate Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-black/20 rounded-xl">
                <button
                  onClick={() => setActiveTab('s4hana')}
                  className={`py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all text-center ${
                    activeTab === 's4hana'
                      ? 'bg-[#2e3192] text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Clean Core
                </button>
                <button
                  onClick={() => setActiveTab('brim')}
                  className={`py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all text-center ${
                    activeTab === 'brim'
                      ? 'bg-[#2e3192] text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  BRIM Engine
                </button>
                <button
                  onClick={() => setActiveTab('btp')}
                  className={`py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all text-center ${
                    activeTab === 'btp'
                      ? 'bg-[#2e3192] text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  BTP Mesh
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all text-center ${
                    activeTab === 'ai'
                      ? 'bg-[#2e3192] text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AIOps
                </button>
              </div>

              {/* Active Corporate Card Content */}
              <div className="p-4 rounded-xl bg-[#051329] border border-white/10 space-y-3.5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider text-[#ea4800]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ea4800]" />
                    <span>{corporateModules[activeTab].badge}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {corporateModules[activeTab].title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {corporateModules[activeTab].tagline}
                  </p>
                </div>

                {/* 2x2 Corporate Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {corporateModules[activeTab].specs.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">{item.label}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Implementation Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {corporateModules[activeTab].highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Live SLA & Status */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Clean Core Validated
                  </span>
                  <span className="text-[#ea4800] font-bold">99.999% SLA</span>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* DESKTOP VIEW: High-Contrast Technical Architecture Code Explorer         */}
            {/* ========================================================================= */}
            <div className="hidden md:block bg-[#051329] rounded-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
              
              {/* Window Header / Tabs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-3 border-b border-white/10 bg-[#081b38] gap-2.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('s4hana')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                      activeTab === 's4hana'
                        ? 'bg-[#2e3192] text-white font-bold border border-[#ea4800]/50'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    S4HANA_CleanCore.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('brim')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                      activeTab === 'brim'
                        ? 'bg-[#2e3192] text-white font-bold border border-[#ea4800]/50'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    SAP_BRIM_Engine.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('btp')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                      activeTab === 'btp'
                        ? 'bg-[#2e3192] text-white font-bold border border-[#ea4800]/50'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Cloud_BTP_Mesh.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                      activeTab === 'ai'
                        ? 'bg-[#2e3192] text-white font-bold border border-[#ea4800]/50'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    AIOps_Agent.ts
                  </button>
                </div>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs font-mono-code text-slate-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00d924]" />
                      <span className="text-[#00d924]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-[13px] font-mono-code text-slate-200 leading-relaxed bg-[#030c1c]">
                <pre>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2.5 border-t border-white/5 bg-[#051329] flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Status: 200 OK — Clean Core Validated
                </span>
                <span className="text-[#ea4800]">Latency: 14.8ms</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default ArchitectureExplorer;