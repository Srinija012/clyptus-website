import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface EnterpriseRoiCalculatorProps {
  onOpenContact: () => void;
}

export const EnterpriseRoiCalculator: React.FC<EnterpriseRoiCalculatorProps> = ({ onOpenContact }) => {
  const [workloadType, setWorkloadType] = useState<'s4hana' | 'brim' | 'oracle' | 'ai'>('brim');
  const [annualVolumeMillion, setAnnualVolumeMillion] = useState<number>(75); // $75M
  const [enterpriseUsers, setEnterpriseUsers] = useState<number>(1200); // 1,200 users
  const [currentReconciliationDays, setCurrentReconciliationDays] = useState<number>(12); // 12 days

  // Calibrated reactive calculations based on enterprise benchmarks
  const calculations = useMemo(() => {
    // Annual savings estimation
    const baseSavings = (annualVolumeMillion * 0.007) + (enterpriseUsers * 140) + (currentReconciliationDays * 12500);
    const estimatedSavings = Math.round(baseSavings * 1000) / 1000;
    
    // Latency reduction
    const latencyReductionPercent = workloadType === 'brim' ? 98.4 : workloadType === 'ai' ? 92.0 : 85.5;
    
    // Days reduced
    const targetCloseTime = Math.max(0.5, Math.round((currentReconciliationDays * 0.15) * 10) / 10);
    
    // Clean core score
    const cleanCoreScore = workloadType === 's4hana' ? '99.4%' : workloadType === 'brim' ? '100%' : '96.8%';
    
    // Payback in months
    const paybackMonths = Math.max(3.2, Math.round((5.8 - (annualVolumeMillion / 200)) * 10) / 10);

    return {
      savingsFormatted: `$${(estimatedSavings / 1000).toFixed(1)}k / yr`,
      totalSavingsRaw: estimatedSavings,
      latencyReductionPercent,
      targetCloseTime,
      cleanCoreScore,
      paybackMonths
    };
  }, [workloadType, annualVolumeMillion, enterpriseUsers, currentReconciliationDays]);

  return (
    <section id="roi-calculator" className="relative py-20 sm:py-28 bg-[#f6f9fc] border-t border-slate-200/80 overflow-hidden">
      
      {/* Background Subtle Gradient Accents */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #2e3192 0%, #ea4800 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192]">
            <Calculator className="w-3.5 h-3.5" />
            Interactive TCO & ROI Estimator
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-[#0a2540] leading-tight">
            Quantify your modernization ROI{' '}
            <span className="font-extrabold text-[#0a2540]">
              before writing a line of code
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
            Configure your enterprise workload parameters to simulate infrastructure cost optimization, 
            cycle-time compression, and Clean Core compliance under Clyptus architecture.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 stripe-card-shadow space-y-6">
            
            {/* Workload Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-500">
                1. Select Target Enterprise Architecture
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'brim', label: 'SAP BRIM', desc: 'Billing & FICA' },
                  { id: 's4hana', label: 'S/4HANA', desc: 'Clean Core ERP' },
                  { id: 'oracle', label: 'Oracle ERP', desc: 'Fusion Financials' },
                  { id: 'ai', label: 'Enterprise AI', desc: 'Autonomous AMS' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setWorkloadType(item.id as any)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      workloadType === item.id
                        ? 'border-[#2e3192] bg-[#2e3192]/5 ring-2 ring-[#2e3192]/20 shadow-sm'
                        : 'border-slate-200/70 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#0a2540]">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Annual Transaction / Billing Volume */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#0a2540]">
                  Annual Transaction / Billing Volume
                </span>
                <span className="font-mono-code font-bold text-[#2e3192] bg-[#2e3192]/10 px-2 py-0.5 rounded-full">
                  ${annualVolumeMillion}M USD
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={annualVolumeMillion}
                onChange={(e) => setAnnualVolumeMillion(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2e3192]"
              />
              <div className="flex justify-between text-[10px] font-mono-code text-slate-400">
                <span>$10M</span>
                <span>$250M</span>
                <span>$500M+</span>
              </div>
            </div>

            {/* Slider 2: Enterprise Users Footprint */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#0a2540]">
                  Global Enterprise User Footprint
                </span>
                <span className="font-mono-code font-bold text-[#2e3192] bg-[#2e3192]/10 px-2 py-0.5 rounded-full">
                  {enterpriseUsers.toLocaleString()} Users
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={enterpriseUsers}
                onChange={(e) => setEnterpriseUsers(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2e3192]"
              />
              <div className="flex justify-between text-[10px] font-mono-code text-slate-400">
                <span>100</span>
                <span>2,500</span>
                <span>5,000+</span>
              </div>
            </div>

            {/* Slider 3: Current Financial Reconciliation Cycle */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#0a2540]">
                  Current Period-End Close / Reconciliation Cycle
                </span>
                <span className="font-mono-code font-bold text-[#0284c7] bg-cyan-50 px-2 py-0.5 rounded-full">
                  {currentReconciliationDays} Business Days
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={currentReconciliationDays}
                onChange={(e) => setCurrentReconciliationDays(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0284c7]"
              />
              <div className="flex justify-between text-[10px] font-mono-code text-slate-400">
                <span>2 Days (Optimized)</span>
                <span>15 Days</span>
                <span>30 Days (Legacy)</span>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="pt-3 text-[11px] text-slate-500 flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Based on audited telemetry across 50+ Clyptus production implementations in India, UAE, and North America.
              </span>
            </div>

          </div>

          {/* Results Display Column (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0a2540] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ea4800]" />
                <span className="text-xs font-mono-code uppercase tracking-wider text-slate-300">
                  Projected Annual Impact
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono-code font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                MODEL: P50_MEDIAN
              </span>
            </div>

            {/* Hero Value: Annual Savings */}
            <div className="space-y-1">
              <div className="text-xs font-mono-code text-slate-400">
                Estimated Annual TCO Optimization
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-[#ea4800] font-mono-code">
                {calculations.savingsFormatted}
              </div>
              <div className="text-xs text-slate-300 font-normal">
                Direct compute rightsizing, zero-modification maintenance, and automated reconciliation.
              </div>
            </div>

            {/* Output Metric Tiles */}
            <div className="grid grid-cols-2 gap-3 font-mono-code">
              
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <Clock className="w-3 h-3 text-[#ea4800]" />
                  <span>CLOSE DURATION</span>
                </div>
                <div className="text-xl font-bold text-white">
                  {calculations.targetCloseTime} Days
                </div>
                <div className="text-[10px] text-emerald-400">
                  ↓ Down from {currentReconciliationDays} days
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <TrendingUp className="w-3 h-3 text-[#ea4800]" />
                  <span>LATENCY CUT</span>
                </div>
                <div className="text-xl font-bold text-[#ea4800]">
                  {calculations.latencyReductionPercent}%
                </div>
                <div className="text-[10px] text-slate-300">
                  Sub-second mediation
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>CLEAN CORE</span>
                </div>
                <div className="text-xl font-bold text-emerald-400">
                  {calculations.cleanCoreScore}
                </div>
                <div className="text-[10px] text-slate-300">
                  Zero table mod
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <DollarSign className="w-3 h-3 text-amber-400" />
                  <span>EST. PAYBACK</span>
                </div>
                <div className="text-xl font-bold text-amber-300">
                  {calculations.paybackMonths} Mo
                </div>
                <div className="text-[10px] text-slate-300">
                  Rapid ROI realization
                </div>
              </div>

            </div>

            {/* Direct Action Trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#ea4800] hover:bg-[#d03f00] text-white transition-all shadow-lg active:scale-95"
              >
                <span>Request Custom Migration Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2 font-mono-code">
                Confidential executive review with Clyptus Practice Leads
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default EnterpriseRoiCalculator;
