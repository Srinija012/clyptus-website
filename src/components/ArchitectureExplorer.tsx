import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Terminal, ArrowRight } from 'lucide-react';

export const ArchitectureExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'s4hana' | 'brim' | 'btp' | 'ai'>('s4hana');
  const [copied, setCopied] = useState(false);

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
              <Terminal className="w-4 h-4" />
              Developer & Architect Blueprint
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

          {/* Right Column: Authentic Stripe High-Contrast Dark Code Terminal */}
          <div className="lg:col-span-7">
            <div className="bg-[#051329] rounded-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
              
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