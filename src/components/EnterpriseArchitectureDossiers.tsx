import React from 'react';
import GlassFolder from '@/components/ui/glass-folder-cards';
import { FolderLock, Sparkles } from 'lucide-react';

interface EnterpriseArchitectureDossiersProps {
  onOpenContact?: () => void;
}

export const EnterpriseArchitectureDossiers: React.FC<EnterpriseArchitectureDossiersProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80 overflow-hidden">
      
      {/* Background Decorative Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-slate-400 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.1px, transparent 1.4px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192] bg-[#2e3192]/10 px-3 py-1 rounded-full">
            <FolderLock className="w-3.5 h-3.5" />
            Interactive Engineering Vault
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-[#0a2540] leading-tight">
            Explore verified enterprise{' '}
            <span className="font-extrabold text-[#0a2540]">
              architecture dossiers
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
            Tangible, interactive blueprints from Clyptus production deployments. 
            Hover any folder to lean its frosted glass, click to fan and inspect the contained specifications.
          </p>
        </div>

        {/* 3 Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-8 items-end justify-items-center">
          
          {/* Folder 1: S/4HANA Clean Core Vault */}
          <div className="flex flex-col items-center">
            <GlassFolder
              label="S/4HANA Clean Core"
              meta="3 Deliverables"
              tone="light"
              art="aurora"
              seed={5}
              appearDelay={0}
              files={[
                { name: "RDS Scope Matrix", meta: "PDF · 1.8 MB", art: "aurora" },
                { name: "BTP Kyma Architecture", meta: "TypeScript · Clean Core", art: "glacier" },
                { name: "Zero Table Mod Policy", meta: "Audit Spec · Grade A" }
              ]}
              action="add"
              onFileSelect={() => {
                if (onOpenContact) onOpenContact();
              }}
            />
            <div className="mt-6 text-center">
              <span className="text-xs font-bold text-[#0a2540]">Core Migration Blueprint</span>
              <p className="text-[11px] text-slate-500 mt-0.5">RDS Fast-Track & Side-by-Side BTP</p>
            </div>
          </div>

          {/* Folder 2: SAP BRIM Monetization Vault */}
          <div className="flex flex-col items-center">
            <GlassFolder
              label="BRIM & FICA Vault"
              meta="4 Deliverables"
              tone="light"
              art="none"
              action="more"
              labelPlacement="top-left"
              appearDelay={140}
              files={[
                { name: "Convergent Charging", meta: "10M CDR/hr Model", art: "dusk" },
                { name: "T-code FPE1 Automation", meta: "ABAP RAP Script" },
                { name: "ASC 606 Revenue Recognition", meta: "Regulatory Spec", art: "ember" },
                { name: "Vertex Tax Integration", meta: "REST API Contract" }
              ]}
              menu={[
                { label: "Request Full Dossier", onSelect: () => onOpenContact?.() },
                { label: "Share Architecture Spec", onSelect: () => {} },
                { label: "Download Executive Summary", onSelect: () => onOpenContact?.() }
              ]}
              onFileSelect={() => {
                if (onOpenContact) onOpenContact();
              }}
            />
            <div className="mt-6 text-center">
              <span className="text-xs font-bold text-[#0a2540]">High-Volume Monetization</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Mediation, Rating & Invoicing</p>
            </div>
          </div>

          {/* Folder 3: Enterprise AI & Autonomous AMS */}
          <div className="flex flex-col items-center">
            <GlassFolder
              label="Enterprise AI Ops"
              meta="Airgapped VPC"
              tone="dark"
              art="ember"
              seed={17}
              action="none"
              labelPlacement="top-right"
              appearDelay={280}
              files={[
                { name: "Autonomous AMS Agent", meta: "LangGraph Orchestrator", art: "verdant" },
                { name: "SOC2 Data Isolation", meta: "VPC Airgap Topology" },
                { name: "Self-Healing IDoc Watcher", meta: "Sub-Second Alerting", art: "ember" }
              ]}
              onFileSelect={() => {
                if (onOpenContact) onOpenContact();
              }}
            />
            <div className="mt-6 text-center">
              <span className="text-xs font-bold text-[#0a2540]">Agentic Infrastructure</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Zero-Data-Leakage Enterprise Agents</p>
            </div>
          </div>

        </div>

        {/* Interaction Hint */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase bg-white border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2e3192]" />
            Hover to lean frosted glass · Click folder to fan files · Click any file to request access
          </p>
        </div>

      </div>
    </section>
  );
};
export default EnterpriseArchitectureDossiers;
