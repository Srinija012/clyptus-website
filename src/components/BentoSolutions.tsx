import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  CreditCard, 
  Database, 
  Cpu, 
  Factory, 
  Cloud, 
  ChevronRight, 
  Check, 
  X
} from 'lucide-react';

interface BentoSolutionsProps {
  onOpenContact: () => void;
}

interface SolutionDetail {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  accentColor: string;
  metrics: { label: string; value: string }[];
  capabilities: string[];
  specs: { title: string; desc: string }[];
}

export const BentoSolutions: React.FC<BentoSolutionsProps> = ({ onOpenContact }) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionDetail | null>(null);

  // Complete Scraped Clyptus Enterprise Solutions Data
  const solutions: Record<string, SolutionDetail> = {
    sap: {
      id: 'sap',
      badge: 'Core Practice · Clean Core Validated',
      title: 'Accept and orchestrate core enterprise workloads globally',
      tagline: 'SAP S/4HANA Cloud, Clean Core & SAP BTP',
      description: 'Clyptus modernises complex enterprise cores with zero-modification SAP S/4HANA Cloud implementations. Utilizing SAP BTP side-by-side extensions and 5+ pre-packaged Rapid Deployment Suites (RDS), we accelerate migration velocity by 40% while preserving absolute core purity.',
      image: '/images/sap-implementation.png',
      icon: <Layers className="w-5 h-5 text-[#2e3192]" />,
      accentColor: '#2e3192',
      metrics: [
        { label: 'Core Modifications', value: '0 (Clean Core)' },
        { label: 'Migration Velocity', value: '40% Faster' },
        { label: 'Certified Consultants', value: '120+' },
        { label: 'Active Deployments', value: '50+ Global' }
      ],
      capabilities: [
        'Central Finance & FI-CA Real-Time Subledgers',
        'SAP BTP Side-by-Side CAP / RAP Microservices',
        'SuccessFactors Core HR & Global Payroll Sync',
        'Modern Fiori UI5 Design Systems with OData v4',
        'Automated S/4HANA Data Cleansing & Pipeline Audits'
      ],
      specs: [
        { title: 'Clean Core Architecture', desc: 'Ensures zero modification to SAP standard code for frictionless automatic hyperscaler upgrades.' },
        { title: 'RDS Suite Acceleration', desc: 'Pre-configured financial and operational workflows tuned for manufacturing, retail, and BFSI.' },
        { title: 'Statutory Compliance', desc: 'Out-of-the-box multi-country tax localizations covering India, UAE VAT/Corporate Tax, and US GAAP.' }
      ]
    },
    brim: {
      id: 'brim',
      badge: 'High-Throughput Billing · Hyderabad CoE',
      title: 'Enable any subscription and high-volume billing model',
      tagline: 'SAP BRIM & Convergent Invoicing Engine',
      description: 'Purpose-built for telcos, logistics, and digital platforms processing millions of daily transactions. Clyptus configures high-speed Convergent Charging (CC) and Convergent Invoicing (CI) to rate complex, usage-based tariffs with sub-20ms rating latency.',
      image: '/images/sap-brim.jpg',
      icon: <CreditCard className="w-5 h-5 text-[#ea4800]" />,
      accentColor: '#ea4800',
      metrics: [
        { label: 'Rating Throughput', value: '4.8M / hr' },
        { label: 'Rating Latency', value: '14.8 ms' },
        { label: 'Settlement Drift', value: 'Zero Drift' },
        { label: 'CoE Location', value: 'Hyderabad, India' }
      ],
      capabilities: [
        'High-Speed Convergent Charging (CC) Rating Engine',
        'Convergent Invoicing (CI) & Dispute Aggregation',
        'FI-CA Contract Accounts Ledger for High-Volume Data',
        'Multi-Tier Dynamic Rating & Real-Time Usage Meters',
        'Automated Revenue Recognition & Audit Trails'
      ],
      specs: [
        { title: 'Scalable Micro-Metering', desc: 'Handles bursty IoT and API telemetry with automated mediation and tier reconciliation.' },
        { title: 'Dispute Reduction', desc: 'Real-time billing feedback loops cut billing reconciliation disputes by over 74%.' }
      ]
    },
    oracle: {
      id: 'oracle',
      badge: 'Multi-Cloud ERP · Dubai & USA Practice',
      title: 'Unify finance and operations on Oracle Cloud ERP and OCI',
      tagline: 'Oracle Fusion Financials Cloud & GoldenGate CDC',
      description: 'Modernise legacy Oracle EBS, PeopleSoft, and JD Edwards estates into unified Oracle Fusion Cloud Financials and SCM. Clyptus pairs sub-second GoldenGate Change Data Capture (CDC) with automated ledger closing workflows.',
      image: '/images/oracle-erp.jpg',
      icon: <Database className="w-5 h-5 text-[#ea4800]" />,
      accentColor: '#ea4800',
      metrics: [
        { label: 'GoldenGate Sync', value: 'Sub-second CDC' },
        { label: 'Financial Close', value: '-60% Cycle Time' },
        { label: 'Ledger Parity', value: '99.99%' },
        { label: 'Infrastructure', value: 'Oracle OCI / Multi-Cloud' }
      ],
      capabilities: [
        'Oracle Fusion Cloud Financials & Central Ledger Consolidation',
        'GoldenGate Real-Time Change Data Capture (CDC)',
        'Oracle HCM Cloud Talent & Global Workforce Lifecycle',
        'Oracle EPM Cloud Enterprise Financial Planning & Budgeting',
        'Legacy EBS R12 to Cloud Migration Roadmaps'
      ],
      specs: [
        { title: 'Continuous Ledger Parity', desc: 'Eliminates batch settlement delays with event-driven journal propagation.' },
        { title: 'Accelerated Financial Close', desc: 'Cuts quarterly close cycle from 12 days to under 4 days with automated reconciliations.' }
      ]
    },
    ai: {
      id: 'ai',
      badge: 'Next-Gen AMS · Sovereign AI Mesh',
      title: 'Automate operations with enterprise AI and copilots',
      tagline: 'SAP Joule & Autonomous Incident Telemetry',
      description: 'Transform traditional reactive enterprise support into self-healing autonomous operations. Clyptus deploys private enterprise LLM copilots trained over your S/4HANA and Oracle event streams with 100% data residency guarantee.',
      image: '/images/data-analytics.jpg',
      icon: <Cpu className="w-5 h-5 text-[#7928ca]" />,
      accentColor: '#7928ca',
      metrics: [
        { label: 'Incident MTTR', value: '18 mins (was 4 hrs)' },
        { label: 'Triage Automation', value: '82% Automated' },
        { label: 'Data Residency', value: '100% Private' },
        { label: 'Security Gate', value: 'ISO 27001' }
      ],
      capabilities: [
        'Autonomous Level-1 & Level-2 Ticket Triage & Resolution',
        'SAP Joule Copilot Custom Fine-Tuning & Business Logic Integration',
        'Automated Purchase Order & Invoice Reconciliation Bots',
        'Continuous Ledger Anomaly & Drift Detection Radar',
        'Zero-Data-Exfiltration Enterprise Security Architecture'
      ],
      specs: [
        { title: 'Self-Healing Workflows', desc: 'Resolves recurring batch job stalls and interface deadlocks automatically within minutes.' },
        { title: 'Zero Data Leakage', desc: 'All LLM inference runs inside client sovereign cloud boundaries with no external logging.' }
      ]
    },
    manufacturing: {
      id: 'manufacturing',
      badge: 'Industry 4.0 · Smart Factory Operations',
      title: 'Orchestrate smart factories and connected supply chains',
      tagline: 'MES Integration, Digital Twins & IoT Shopfloor Mesh',
      description: 'Connect shop-floor PLCs, SCADA sensors, and MES systems directly to your central SAP Digital Manufacturing and Oracle SCM backbone. Clyptus enables real-time yield optimization and automated inventory replenishment.',
      image: '/images/smart-factory.jpg',
      icon: <Factory className="w-5 h-5 text-[#059669]" />,
      accentColor: '#059669',
      metrics: [
        { label: 'Inventory Accuracy', value: '99.98%' },
        { label: 'Shopfloor Telemetry', value: 'Sub-50ms Latency' },
        { label: 'OEE Improvement', value: '+14% Uplift' },
        { label: 'Active Facilities', value: '25+ Plants' }
      ],
      capabilities: [
        'SAP Digital Manufacturing Cloud (DMC) Integration',
        'Real-Time MES to ERP Machine Telemetry Synchronization',
        'Automated Kanban & Predictive Replenishment Loops',
        'Digital Twin Modeling for High-Value Industrial Assets',
        'Mobile Barcode & RFID Warehouse Management'
      ],
      specs: [
        { title: 'Shopfloor-to-Topfloor Sync', desc: 'Eliminates paper-based tracking with real-time tablet-based operator dashboards.' },
        { title: 'Predictive Maintenance', desc: 'Predicts component failures 48 hours prior to catastrophic downtime.' }
      ]
    },
    cloud: {
      id: 'cloud',
      badge: 'Multi-Cloud Fabric · Global Follow-the-Sun',
      title: 'Embed scalable multi-cloud enterprise infrastructure',
      tagline: 'AWS, Azure, Google Cloud & Sovereign OCI Mesh',
      description: 'Architecting resilient, mission-critical hyperscaler infrastructure engineered for zero-downtime SAP and Oracle workloads. Backed by Clyptus 24/7 Follow-the-Sun delivery hubs across Hyderabad HQ, Dubai Internet City, and Phoenix USA.',
      image: '/images/enterprise-cloud.jpg',
      icon: <Cloud className="w-5 h-5 text-[#2e3192]" />,
      accentColor: '#2e3192',
      metrics: [
        { label: 'Global Delivery Nodes', value: '3 Continents' },
        { label: 'Production Uptime SLA', value: '99.999%' },
        { label: 'P1 Response Time', value: '< 15 Minutes' },
        { label: 'Compliance Certs', value: 'SOC 2 & ISO 27001' }
      ],
      capabilities: [
        'Certified Hyperscaler Migration on AWS, Azure, and Google Cloud',
        'Multi-Region Active-Active Disaster Recovery (< 15 min RPO/RTO)',
        'Sovereign Cloud & Regional Data Residency Compliance',
        'Automated Terraform Infrastructure-as-Code (IaC) Pipelines',
        '24/7 Follow-The-Sun L1-L4 Engineering & Managed Services'
      ],
      specs: [
        { title: 'High-Resilience Mesh', desc: 'Ensures zero transaction loss across multi-zone outages with automated failover routing.' },
        { title: 'Follow-The-Sun Continuity', desc: 'Seamless engineering handoffs across India, UAE, and US time zones guarantee nonstop coverage.' }
      ]
    }
  };

  return (
    <section 
      id="services" 
      className="modular-solutions-section relative py-20 sm:py-28 bg-white overflow-hidden border-b border-slate-200/80"
    >
      {/* 
        Exact Stripe Background Element (.modular-solutions-bg):
        Clean off-white canvas with subtle ambient micro-gradient and hairline grid 
      */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 bg-[#ffffff]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, rgba(46, 49, 146, 0.035) 0%, rgba(246, 249, 252, 0.8) 60%),
            linear-gradient(to bottom, #ffffff 0%, #fcfdfe 50%, #f8fafc 100%)
          `
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title (Exact Stripe Typography & Composition) */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-[0.06em] text-[#2e3192]">
            <span className="w-2 h-2 rounded-full bg-[#ea4800] animate-pulse" />
            <span>Modular Enterprise Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#0a2540] tracking-[-0.03em] leading-[1.14]">
            Flexible solutions for every enterprise model.
          </h2>

          <p className="text-base sm:text-xl text-[#425466] leading-relaxed font-normal">
            Grow your business with a comprehensive set of enterprise platforms and modern cloud architectures – designed to work individually or together.
          </p>
        </div>

        {/* 
          BENTO GRID LAYOUT:
          Row 1: Card 1 (Payments equivalent / SAP S/4HANA, 8 cols / 66.6%) + Card 2 (Billing equivalent / BRIM, 4 cols / 33.3%)
          Row 2: Card 3 (Oracle, 4 cols) + Card 4 (AI, 4 cols) + Card 5 (Smart Factory, 4 cols)
          Row 3: Card 6 (Connect equivalent / Cloud Mesh, 12 cols / 100% full width)
          
          Mobile: Clean single column with uncropped cards and comfortable reading room (gap-4 sm:gap-5)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          
          {/* ========================================================================= */}
          {/* CARD 1: Payments Equivalent -> SAP S/4HANA & Clean Core (8 cols / 66.6%) */}
          {/* ========================================================================= */}
          <div 
            onClick={() => setSelectedSolution(solutions.sap)}
            className="group relative col-span-1 md:col-span-2 lg:col-span-8 rounded-[22px] bg-white p-5 sm:p-7 border border-slate-200/90 stripe-card-shadow flex flex-col justify-between overflow-hidden cursor-pointer hover:border-slate-300 transition-all duration-300"
          >
            {/* Stripe Radial Hover Glow */}
            <div className="absolute inset-0 rounded-[22px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(46,49,146,0.06),transparent_70%)]" />

            {/* Top Bar: Title + Dialog Entry Icon */}
            <div className="flex items-start justify-between gap-4 mb-4 z-10">
              <div className="space-y-1 max-w-xl">
                <div className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#2e3192]">
                  SAP Clean Core & BTP
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a2540] tracking-tight leading-snug">
                  Accept and orchestrate core enterprise workloads globally
                </h3>
              </div>

              {/* Exact Stripe Dialog Entry Icon */}
              <div 
                className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#2e3192] group-hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shrink-0 shadow-sm"
                title="Explore SAP Architecture"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.75 6.75L10.25 6.75L10.25 5L15.5 5L15.5 10.25L13.75 10.25L13.75 6.75Z" fill="currentColor" />
                  <path d="M6.75 10.25L5 10.25L5 15.5L10.25 15.5L10.25 13.75L6.75 13.75L6.75 10.25Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Card Graphic: Real Clyptus Image + Interactive Telemetry Overlay */}
            <div className="relative w-full h-44 sm:h-60 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
              <img 
                src="/images/sap-implementation.png" 
                alt="SAP S/4HANA Implementation Architecture" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 via-[#0a2540]/30 to-transparent" />
              
              {/* Telemetry Glass Badge */}
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[9px] sm:text-[10px] font-mono-code font-bold text-[#0a2540] shadow-sm max-w-[90%]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                <span className="truncate sm:overflow-visible">
                  CLEAN CORE VALIDATED<span className="hidden sm:inline"> · ZERO MODIFICATIONS</span>
                </span>
              </div>

              {/* In-Image Live Readout */}
              <div className="absolute bottom-3 left-3 right-3 text-white flex flex-col sm:flex-row items-start sm:items-end justify-between gap-1.5 sm:gap-2">
                <div>
                  <div className="text-[10px] font-mono-code text-indigo-200 uppercase tracking-wider">S/4HANA Cloud BTP</div>
                  <div className="text-sm sm:text-lg font-bold tracking-tight">Rapid Deployment Suite (RDS)</div>
                </div>
                <span className="text-[11px] sm:text-xs font-mono-code font-bold bg-[#ea4800] text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg shadow-sm shrink-0">
                  40% Velocity Boost
                </span>
              </div>
            </div>

            {/* Bottom Proof Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-100 z-10 text-xs font-mono-code">
              <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200/80">
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Clean Core</div>
                <div className="text-sm font-bold text-[#0a2540]">0 Modifications</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200/80">
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Consultants</div>
                <div className="text-sm font-bold text-[#2e3192]">120+ Certified</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200/80">
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Subledgers</div>
                <div className="text-sm font-bold text-[#0a2540]">Central Finance</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#f8fafc] border border-slate-200/80">
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Deployments</div>
                <div className="text-sm font-bold text-emerald-700">50+ Global</div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 2: Billing Equivalent -> SAP BRIM Usage Meter (4 cols / 33.3%)      */}
          {/* ========================================================================= */}
          <div 
            onClick={() => setSelectedSolution(solutions.brim)}
            className="group relative col-span-1 md:col-span-1 lg:col-span-4 rounded-[22px] bg-white p-4 sm:p-6 border border-slate-200/90 stripe-card-shadow flex flex-col justify-between overflow-hidden cursor-pointer hover:border-slate-300 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-[22px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,212,255,0.06),transparent_70%)]" />

            <div className="flex items-start justify-between gap-2 mb-3 z-10">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#0284c7]">
                  SAP BRIM Engine
                </div>
                <h3 className="text-base sm:text-xl font-bold text-[#0a2540] tracking-tight leading-snug">
                  Enable any billing model
                </h3>
              </div>

              <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0284c7] group-hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shrink-0 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.75 6.75L10.25 6.75L10.25 5L15.5 5L15.5 10.25L13.75 10.25L13.75 6.75Z" fill="currentColor" />
                  <path d="M6.75 10.25L5 10.25L5 15.5L10.25 15.5L10.25 13.75L6.75 13.75L6.75 10.25Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Interactive Usage-Based Meter Widget (Stripe Signature Pattern) */}
            <div className="rounded-xl bg-[#f8fafc] border border-slate-200 p-3.5 space-y-3 mb-3 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ea4800] animate-ping" />
                  <span className="text-xs font-bold text-[#0a2540]">Convergent Charging</span>
                </div>
                <span className="text-[10px] font-mono-code font-bold bg-orange-100 text-[#ea4800] px-2 py-0.5 rounded-full">
                  Billed Monthly
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-slate-600 font-medium mb-1">
                  <span>Usage Rating</span>
                  <span className="font-mono-code font-bold text-[#0a2540]">4.8M / hr</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#2e3192] to-[#ea4800] h-2 rounded-full w-[78%]" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-600 pt-1 border-t border-slate-200/70">
                <span>Rating Latency</span>
                <span className="font-bold text-emerald-700">14.8 ms</span>
              </div>
            </div>

            {/* Image Thumbnail */}
            <div className="relative w-full h-20 sm:h-24 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="/images/sap-brim.jpg" 
                alt="SAP BRIM Invoicing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-mono-code text-cyan-200 font-bold leading-tight">
                  FI-CA High-Volume Subledgers
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 3: Agentic Commerce Equivalent -> Oracle Cloud ERP (4 cols / 33.3%)  */}
          {/* ========================================================================= */}
          <div 
            onClick={() => setSelectedSolution(solutions.oracle)}
            className="group relative col-span-1 md:col-span-1 lg:col-span-4 rounded-[22px] bg-white p-4 sm:p-6 border border-slate-200/90 stripe-card-shadow flex flex-col justify-between overflow-hidden cursor-pointer hover:border-slate-300 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-[22px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(234,72,0,0.06),transparent_70%)]" />

            <div className="flex items-start justify-between gap-2 mb-3 z-10">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#ea4800]">
                  Oracle Fusion ERP
                </div>
                <h3 className="text-base sm:text-xl font-bold text-[#0a2540] tracking-tight leading-snug">
                  Unify finance and operations
                </h3>
              </div>

              <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#ea4800] group-hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shrink-0 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.75 6.75L10.25 6.75L10.25 5L15.5 5L15.5 10.25L13.75 10.25L13.75 6.75Z" fill="currentColor" />
                  <path d="M6.75 10.25L5 10.25L5 15.5L10.25 15.5L10.25 13.75L6.75 13.75L6.75 10.25Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Oracle CDC & Close Cycle UI Widget */}
            <div className="rounded-xl bg-[#f8fafc] border border-slate-200 p-3 space-y-2 mb-3 z-10 text-xs font-mono-code">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold">GOLDENGATE CDC</span>
                <span className="font-bold text-[#ea4800]">Sub-second</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold">CLOSE CYCLE</span>
                <span className="font-bold text-emerald-700">-60% Time</span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                <span className="text-[10px] text-slate-500 font-semibold">DATA PARITY</span>
                <span className="font-bold text-[#0a2540]">99.99%</span>
              </div>
            </div>

            {/* Real Scraped Image */}
            <div className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="/images/oracle-erp.jpg" 
                alt="Oracle Fusion ERP Cloud" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-mono-code text-amber-200 font-bold leading-tight">
                  Dubai & USA Modernization Practice
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 4: Issuing Equivalent -> Enterprise AI Operations (4 cols / 33.3%)   */}
          {/* ========================================================================= */}
          <div 
            onClick={() => setSelectedSolution(solutions.ai)}
            className="group relative col-span-1 md:col-span-1 lg:col-span-4 rounded-[22px] bg-white p-4 sm:p-6 border border-slate-200/90 stripe-card-shadow flex flex-col justify-between overflow-hidden cursor-pointer hover:border-slate-300 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-[22px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(121,40,202,0.06),transparent_70%)]" />

            <div className="flex items-start justify-between gap-2 mb-3 z-10">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#7928ca]">
                  Sovereign AI Mesh
                </div>
                <h3 className="text-base sm:text-xl font-bold text-[#0a2540] tracking-tight leading-snug">
                  Automate with enterprise AI
                </h3>
              </div>

              <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#7928ca] group-hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shrink-0 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.75 6.75L10.25 6.75L10.25 5L15.5 5L15.5 10.25L13.75 10.25L13.75 6.75Z" fill="currentColor" />
                  <path d="M6.75 10.25L5 10.25L5 15.5L10.25 15.5L10.25 13.75L6.75 13.75L6.75 10.25Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* AI Ops Radar Widget */}
            <div className="rounded-xl bg-[#f8fafc] border border-slate-200 p-3 space-y-2 mb-3 z-10 text-xs font-mono-code">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold">INCIDENT MTTR</span>
                <span className="font-bold text-emerald-700">18 min (was 4h)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold">TRIAGE AUTOMATION</span>
                <span className="font-bold text-[#7928ca]">82% Speedup</span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                <span className="text-[10px] text-slate-500 font-semibold">DATA RESIDENCY</span>
                <span className="font-bold text-[#0a2540]">100% Sovereign</span>
              </div>
            </div>

            {/* Real Scraped Image */}
            <div className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="/images/data-analytics.jpg" 
                alt="AI-Driven Operations Automation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-mono-code text-purple-200 font-bold leading-tight">
                  SAP Joule Copilot & Incident Radar
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 5: Crypto Equivalent -> Smart Factory & Supply Chain (4 cols / 33.3%)*/}
          {/* ========================================================================= */}
          <div 
            onClick={() => setSelectedSolution(solutions.manufacturing)}
            className="group relative col-span-1 md:col-span-1 lg:col-span-4 rounded-[22px] bg-white p-4 sm:p-6 border border-slate-200/90 stripe-card-shadow flex flex-col justify-between overflow-hidden cursor-pointer hover:border-slate-300 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-[22px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(5,150,105,0.06),transparent_70%)]" />

            <div className="flex items-start justify-between gap-2 mb-3 z-10">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-emerald-700">
                  Industry 4.0 MES
                </div>
                <h3 className="text-base sm:text-xl font-bold text-[#0a2540] tracking-tight leading-snug">
                  Orchestrate smart factories
                </h3>
              </div>

              <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shrink-0 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.75 6.75L10.25 6.75L10.25 5L15.5 5L15.5 10.25L13.75 10.25L13.75 6.75Z" fill="currentColor" />
                  <path d="M6.75 10.25L5 10.25L5 15.5L10.25 15.5L10.25 13.75L6.75 13.75L6.75 10.25Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Smart Factory Telemetry Widget */}
            <div className="rounded-xl bg-[#f8fafc] border border-slate-200 p-3 space-y-2 mb-3 z-10 text-xs font-mono-code">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold">INVENTORY ACCURACY</span>
                <span className="font-bold text-emerald-700">99.98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold">OEE UPLIFT</span>
                <span className="font-bold text-[#0a2540]">+14% Improvement</span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                <span className="text-[10px] text-slate-500 font-semibold">SHOPFLOOR TELEMETRY</span>
                <span className="font-bold text-emerald-700">&lt; 50ms Edge Sync</span>
              </div>
            </div>

            {/* Real Scraped Image */}
            <div className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src="/images/smart-factory.jpg" 
                alt="Smart Factory & Supply Chain Automation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 to-transparent flex items-end p-2.5">
                <span className="text-[11px] font-mono-code text-emerald-200 font-bold leading-tight">
                  SAP DMC & Connected SCM Integration
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 6: Connect Equivalent -> Enterprise Cloud Mesh (12 cols / 100%)     */}
          {/* ========================================================================= */}
          <div 
            onClick={() => setSelectedSolution(solutions.cloud)}
            className="group relative col-span-1 md:col-span-2 lg:col-span-12 rounded-[22px] bg-white p-5 sm:p-7 border border-slate-200/90 stripe-card-shadow flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden cursor-pointer hover:border-slate-300 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-[22px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(46,49,146,0.06),transparent_70%)]" />

            {/* Left Column Content */}
            <div className="space-y-4 max-w-2xl z-10 w-full">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#2e3192]">
                  <Cloud className="w-4 h-4" />
                  <span>Multi-Cloud Global Mesh</span>
                </div>

                {/* Dialog Entry on Mobile */}
                <div className="lg:hidden w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#2e3192] group-hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shrink-0 shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M13.75 6.75L10.25 6.75L10.25 5L15.5 5L15.5 10.25L13.75 10.25L13.75 6.75Z" fill="currentColor" />
                    <path d="M6.75 10.25L5 10.25L5 15.5L10.25 15.5L10.25 13.75L6.75 13.75L6.75 10.25Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a2540] tracking-tight leading-snug">
                  Embed scalable multi-cloud enterprise infrastructure
                </h3>
                <p className="text-xs sm:text-sm text-[#425466] mt-2 leading-relaxed">
                  Mission-critical hyperscaler hosting across AWS, Azure, Google Cloud, and Oracle OCI. 
                  Continuous follow-the-sun operations across Hyderabad, Dubai, and Phoenix USA delivering sub-15-minute P1 incident SLAs.
                </p>
              </div>

              {/* 3 Continent Footprint Tags */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 text-[11px] sm:text-xs font-semibold">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 text-[#0a2540] border border-slate-200">
                  🇮🇳 Hyderabad HQ & CoE
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 text-[#0a2540] border border-slate-200">
                  🇦🇪 Dubai Internet City (In5)
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 text-[#0a2540] border border-slate-200">
                  🇺🇸 Phoenix Practice
                </span>
              </div>
            </div>

            {/* Right Column: Visual Panoramic Graphic + Dialog Entry */}
            <div className="relative w-full lg:w-96 h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 z-10">
              <img 
                src="/images/enterprise-cloud.jpg" 
                alt="Global Enterprise Cloud Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <div className="hidden lg:flex w-8 h-8 rounded-full bg-white/95 backdrop-blur-md group-hover:bg-[#2e3192] group-hover:text-white text-slate-700 items-center justify-center transition-all duration-200 shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M13.75 6.75L10.25 6.75L10.25 5L15.5 5L15.5 10.25L13.75 10.25L13.75 6.75Z" fill="currentColor" />
                      <path d="M6.75 10.25L5 10.25L5 15.5L10.25 15.5L10.25 13.75L6.75 13.75L6.75 10.25Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between text-white text-[11px] font-mono-code font-bold">
                  <span>99.999% SLA UPTIME</span>
                  <span className="text-emerald-400">SOC 2 TYPE II</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* STRIPE-GRADE INTERACTIVE DEEP DIVE MODAL (DIALOG)                         */}
      {/* ========================================================================= */}
      {selectedSolution && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedSolution(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative w-full h-48 sm:h-56 bg-slate-100 overflow-hidden shrink-0">
              <img 
                src={selectedSolution.image} 
                alt={selectedSolution.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/40 to-transparent" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedSolution(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all backdrop-blur-md"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Badges */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono-code font-bold uppercase tracking-wider mb-2">
                  {selectedSolution.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {selectedSolution.tagline}
                </h3>
              </div>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-500">
                  Architectural Overview
                </h4>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {selectedSolution.description}
                </p>
              </div>

              {/* Scraped Performance Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {selectedSolution.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#f8fafc] border border-slate-200 text-center">
                    <div className="text-base sm:text-lg font-mono-code font-bold text-[#0a2540]">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5 uppercase tracking-wide">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Capabilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-500">
                  Verified Enterprise Capabilities
                </h4>
                <div className="space-y-2">
                  {selectedSolution.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#0a2540]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-500">
                  Implementation Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSolution.specs.map((spec, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-xs font-bold text-[#0a2540]">{spec.title}</div>
                      <div className="text-xs text-slate-600 leading-normal">{spec.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions Footer (Side by Side Buttons) */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-row items-center justify-between gap-3 shrink-0">
              <button
                onClick={() => setSelectedSolution(null)}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:text-[#0a2540] transition-colors"
              >
                Close
              </button>

              <div className="flex flex-row items-center gap-2 sm:gap-3">
                <Link
                  to={`/solutions#${selectedSolution.id}`}
                  onClick={() => setSelectedSolution(null)}
                  className="px-4 py-2.5 rounded-full text-xs font-bold text-[#0a2540] bg-white border border-slate-300 hover:border-slate-400 transition-all shadow-sm"
                >
                  Full Specification
                </Link>

                <button
                  onClick={() => {
                    setSelectedSolution(null);
                    onOpenContact();
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all shadow-md shadow-orange-500/20"
                >
                  <span>Request Review</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
export default BentoSolutions;
