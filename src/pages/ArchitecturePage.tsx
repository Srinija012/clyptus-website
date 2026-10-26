import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check, 
  Play, 
  Activity, 
  ArrowRight,
  Server,
  Sparkles,
  ShieldCheck,
  Network
} from 'lucide-react';
import { EnterpriseArchitectureDossiers } from '../components/EnterpriseArchitectureDossiers';

interface ArchitecturePageProps {
  onOpenContact: () => void;
}

export const ArchitecturePage: React.FC<ArchitecturePageProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'rap' | 'sdk' | 'agent' | 'event'>('rap');
  const [copied, setCopied] = useState(false);
  const [simulationState, setSimulationState] = useState<'idle' | 'running' | 'completed'>('idle');

  const codeSnippets = {
    rap: `// Clyptus SAP BTP Side-by-Side Clean Core Extension
@EndUserText.label: 'Autonomous Enterprise Settlement Node'
@AccessControl.authorizationCheck: #CHECK
define root view entity ZI_ClyptusEnterpriseSettlement
  as select from zfi_ca_settle as Settlement
  composition [0..*] of ZI_ClyptusSettlementItem as _Items
{
  key settlement_uuid     as SettlementUUID,
      company_code        as CompanyCode,
      currency            as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      total_amount        as GrossAmount,
      settlement_status   as SettlementStatus,
      
      /* Cloud Event Streaming to SAP Event Mesh */
      _Items
}
// Clean Core Rule: 0 modifications to standard S/4HANA ECC tables`,
    sdk: `// Clyptus Cloud SDK - Real-time SAP Event Mesh Consumer
import { executeHttpRequest } from '@sap-cloud-sdk/http-client';
import { CloudEvent } from 'cloudevents';

export async function processHighThroughputBilling(event: CloudEvent) {
  const destination = { destinationName: 'CLYPTUS_S4_CLEAN_CORE' };
  
  // Real-time BRIM FICA Document Ingestion
  const response = await executeHttpRequest(destination, {
    method: 'POST',
    url: '/sap/opu/odata4/clyptus/billing/v0001/CreateManualDocument',
    data: {
      DocumentHeader: {
        DocumentType: 'FPE1',
        PostingDate: new Date().toISOString(),
        Currency: 'USD'
      },
      TelemetryTraceId: event.id
    }
  });

  return { status: 200, traceId: response.data.traceId };
}`,
    agent: `# Clyptus AI Agent - S/4HANA Reconciliation & Audit
from clyptus_agent_mesh import SAPCleanCoreEngine, ReconcilerBot
import os

engine = SAPCleanCoreEngine(
    endpoint=os.getenv("CLYPTUS_SAP_BTP_URL"),
    auth_mode="OAuth2MutualTLS",
    clean_core_strict=True
)

@engine.register_autonomous_task("GL_ANOMALY_DETECTION")
def audit_settlement_stream(transaction_batch):
    """Detects discrepancies in T-Code FPE1 manual postings."""
    anomalies = ReconcilerBot.evaluate(
        batch=transaction_batch,
        tolerance_usd=0.01,
        auto_reverse_on_fraud=True
    )
    return anomalies.publish_to_event_mesh()`,
    event: `/* Clyptus Event Mesh Telemetry & Microservices Contract */
{
  "specversion": "1.0",
  "type": "com.clyptus.enterprise.sap.settlement.v1",
  "source": "/hyderabad-core-dc01/sap-s4hana/btp-mesh",
  "id": "cly-evt-8941092-2026",
  "time": "2026-10-26T10:15:32.410Z",
  "datacontenttype": "application/json",
  "data": {
    "settlementId": "SETTLE-98042",
    "grossUsd": 1450290.00,
    "sourceTcode": "FPE1",
    "clearingStatus": "CLEARED_AUTOMATICALLY",
    "latencyMs": 14.8,
    "auditedBy": "Clyptus AI Co-Pilot"
  }
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setSimulationState('running');
    setTimeout(() => {
      setSimulationState('completed');
    }, 1200);
  };

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc]">
      
      {/* 1. Stripe Hero Header with Ambient Mesh & Micro-Badges */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200/80 stripe-mesh-light">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#2e3192]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192] mb-6">
            <Terminal className="w-3.5 h-3.5 text-[#ea4800]" />
            Engineering & Infrastructure Architecture
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
                Clean Core blueprints for{' '}
                <span className="font-extrabold text-[#0a2540] block sm:inline">
                  zero-downtime enterprises
                </span>
              </h1>
              <p className="text-base sm:text-xl text-[#425466] max-w-3xl leading-relaxed">
                Engineered around SAP BTP side-by-side extensibility, sub-20ms Event Mesh streaming, 
                and ISO/IEC 27001 audited security patterns that keep your core ERP untouched and permanently upgradeable.
              </p>
            </div>

            {/* Micro Architecture Benchmark Bento Tile */}
            <div className="lg:col-span-4">
              <div className="stripe-bezel-outer bg-white/70 backdrop-blur-md">
                <div className="stripe-bezel-inner p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0a2540] uppercase tracking-wider">Mesh Telemetry</span>
                    <span className="text-[11px] font-mono-code font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Live Pulse
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-medium">BTP Latency</div>
                      <div className="text-xl font-bold font-mono-code text-[#0284c7] mt-0.5">14.8ms</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-medium">Core Modifications</div>
                      <div className="text-xl font-bold font-mono-code text-emerald-600 mt-0.5">0 Total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stripe Signature Dark Code Sandbox with Ambient Glow */}
      <section className="relative py-20 bg-[#070d18] stripe-mesh-dark text-white overflow-hidden my-12 border-y border-white/10 shadow-2xl">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#2e3192]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Architectural Pillars */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE BLUEPRINT V4.2
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Extensibility without Core Contamination
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Traditional SAP customization modifies standard core tables, resulting in crippling multi-million dollar S/4HANA migration projects. Clyptus enforces the strict Clean Core architectural paradigm:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3.5 hover:border-white/20 transition-all">
                  <div className="p-1 rounded-full bg-orange-500/20 text-[#ea4800] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Side-by-Side BTP Extension</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">All business logic runs in cloud microservices communicating over governed OData v4 and REST.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3.5 hover:border-white/20 transition-all">
                  <div className="p-1 rounded-full bg-orange-500/20 text-[#ea4800] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sub-20ms Event-Driven Architecture</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">Asynchronous telemetry decoupling with Apache Kafka and SAP Event Mesh.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3.5 hover:border-white/20 transition-all">
                  <div className="p-1 rounded-full bg-orange-500/20 text-[#ea4800] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Autonomous AI Ingestion Mesh</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">Deterministic RAG pipelines reading ERP telemetry with zero data exfiltration.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#ea4800] hover:bg-[#d03f00] text-white transition-all shadow-lg shadow-orange-500/25 active:scale-95 flex items-center gap-2 group"
                >
                  <span>Request Technical Blueprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Code Sandbox */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#030712] border border-slate-700/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden ring-1 ring-white/10">
                
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 font-medium hidden sm:inline">
                      clyptus-enterprise-clean-core.btp
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>

                    <button
                      onClick={handleRunSimulation}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#ea4800] hover:bg-[#d03f00] text-white transition-colors active:scale-95 shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Execute</span>
                    </button>
                  </div>
                </div>

                {/* Tabs Selector */}
                <div className="flex items-center gap-1 px-3 py-2 bg-[#090d16] border-b border-slate-800/80 overflow-x-auto text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('rap')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeTab === 'rap' ? 'bg-[#2e3192] text-white font-bold border border-[#ea4800]/50' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ABAP RAP CDS
                  </button>
                  <button
                    onClick={() => setActiveTab('sdk')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeTab === 'sdk' ? 'bg-[#2e3192] text-white font-bold border border-[#ea4800]/50' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    TypeScript SDK
                  </button>
                  <button
                    onClick={() => setActiveTab('agent')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeTab === 'agent' ? 'bg-[#2e3192] text-white font-bold border border-[#ea4800]/50' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    AI Agent Mesh
                  </button>
                  <button
                    onClick={() => setActiveTab('event')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeTab === 'event' ? 'bg-[#2e3192] text-white font-bold border border-[#ea4800]/50' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    CloudEvent Spec
                  </button>
                </div>

                {/* Code Window */}
                <div className="p-4 sm:p-5 overflow-x-auto min-h-[220px]">
                  <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>

                {/* Live Simulation Output Tray */}
                {simulationState !== 'idle' && (
                  <div className="p-3 bg-slate-900 border-t border-slate-800 text-xs font-mono flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className={`w-4 h-4 ${simulationState === 'running' ? 'text-amber-400 animate-spin' : 'text-emerald-400'}`} />
                      <span className="text-slate-300">
                        {simulationState === 'running' ? 'Connecting to SAP S/4HANA Clean Core Endpoint...' : 'OData v4 200 OK — Telemetry event dispatched in 14.8ms.'}
                      </span>
                    </div>
                    <span className="text-emerald-400 font-bold">ZERO ERRORS</span>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. High-Throughput Microservice Stack Architecture (Bento Grid) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2e3192]/10 text-[#2e3192] text-xs font-bold uppercase tracking-wider">
            <Network className="w-3.5 h-3.5" />
            Tier-1 Integration Topology
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#0a2540] tracking-tight">
            How Clyptus integrates{' '}
            <span className="font-extrabold text-[#0a2540]">Enterprise Stacks</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Engineered to bridge legacy on-premise systems with hyperscaler cloud networks and modern multi-model AI inference engines.
          </p>
        </div>

        {/* Bento Grid with Double-Bezel and Dynamic Hover Lifts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: SAP BTP */}
          <div className="stripe-bezel-outer p-2 bg-gradient-to-b from-white to-slate-50">
            <div className="stripe-bezel-inner p-6 sm:p-7 space-y-5 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 w-fit rounded-xl bg-[#2e3192]/10 text-[#2e3192]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono-code font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                    Clean Core
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#0a2540]">SAP S/4HANA & BTP Core</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Clean Core compliant orchestration. Custom tables isolated to side-by-side BTP tenants with OData v4 and RFC interfaces.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Architecture Specs</div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>ABAP RAP & CAP Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Automated Regression Testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Zero SAP Core Modifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Oracle & Multi-Cloud */}
          <div className="stripe-bezel-outer p-2 bg-gradient-to-b from-white to-slate-50">
            <div className="stripe-bezel-inner p-6 sm:p-7 space-y-5 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 w-fit rounded-xl bg-[#2e3192]/10 text-[#2e3192]">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono-code font-bold text-[#ea4800] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                    CDC &lt;20ms
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#0a2540]">Oracle & Multi-Cloud Mesh</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bi-directional replication between Oracle Fusion ERP, EBS, and cloud lakes using GoldenGate and real-time CDC pipelines.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Architecture Specs</div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>OCI / AWS / Azure Hybrid Routing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Financial Reconciliation Engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>End-to-End Encryption in Transit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Autonomous AI Agents */}
          <div className="stripe-bezel-outer p-2 bg-gradient-to-b from-white to-slate-50">
            <div className="stripe-bezel-inner p-6 sm:p-7 space-y-5 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 w-fit rounded-xl bg-purple-50 text-purple-600">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono-code font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                    Sovereign AI
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#0a2540]">Autonomous AI Agents</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Private enterprise LLMs deployed on-premise or sovereign cloud with strict role-based data isolation and human-in-the-loop review.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Architecture Specs</div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>SAP Authorization Context Propagation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Automated Ledger Discrepancy Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Zero Data Retraining on Public AI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Interactive Engineering Artifacts & Architecture Dossiers (Glass Folder Vault) */}
      <EnterpriseArchitectureDossiers onOpenContact={onOpenContact} />

      {/* 5. Stripe-style Bottom Callout */}
      <section className="mt-16 mx-4 sm:mx-6 lg:mx-8 rounded-3xl overflow-hidden stripe-mesh-dark text-white border border-white/10 shadow-2xl relative">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono-code font-bold text-[#ea4800] uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ea4800]" />
            Clean Core Governance Certified
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Review our complete{' '}
            <span className="font-extrabold text-white">Clean Core Whitepaper</span>
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Discuss your system landscape with Clyptus Lead Solution Architects in Hyderabad, Dubai, or North America.
          </p>
          <div className="pt-2 flex flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <Link
              to="/contact"
              className="flex-1 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all shadow-lg shadow-orange-500/30 text-center whitespace-nowrap active:scale-95"
            >
              Book Review
            </Link>
            <Link
              to="/solutions"
              className="flex-1 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all text-center backdrop-blur-md whitespace-nowrap"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ArchitecturePage;
