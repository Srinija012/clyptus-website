import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Users2, 
  HeartHandshake, 
  Search, 
  Download, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';

interface PoliciesPageProps {
  onOpenContact: () => void;
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ onOpenContact }) => {
  const [selectedPolicyId, setSelectedPolicyId] = useState<string>('posh');
  const [searchQuery, setSearchQuery] = useState('');

  const policies = [
    {
      id: 'posh',
      title: 'Prevention of Sexual Harassment (POSH) Policy',
      category: 'Workplace Governance',
      version: 'v4.2 (Updated 2026)',
      icon: ShieldCheck,
      summary: 'Mandatory zero-tolerance framework under the POSH Act, guaranteeing safe, dignified workplaces across all Clyptus global facilities.',
      keyPoints: [
        'Constituted Internal Complaints Committee (ICC) presided by an external independent female advocate.',
        'Guaranteed 100% whistleblower anonymity and immediate interim protection for the aggrieved person.',
        'Timebound inquiry and final disposition within 90 days of grievance filing.',
        'Zero tolerance for retaliatory action against complainants or witnesses.'
      ],
      fullText: `Clyptus is committed to providing a work environment free of sexual harassment, discrimination, and intimidation. This policy applies to all employees, consultants, interns, vendors, and visitors across all Clyptus premises and virtual communication channels.

The Internal Complaints Committee (ICC) meets quarterly to review workplace safety metrics and conducts mandatory sensitization workshops for every new onboarded employee. Complaints can be registered directly with icc@clyptus.com or anonymously through the Clyptus Governance Portal.`
    },
    {
      id: 'code-of-conduct',
      title: 'Code of Business Conduct & Ethics',
      category: 'Corporate Governance',
      version: 'v3.8 (Updated 2026)',
      icon: FileText,
      summary: 'Standards of integrity, client confidentiality, anti-bribery regulations, and ethical stewardship for all Clyptus staff.',
      keyPoints: [
        'Strict prohibition of bribery, kickbacks, or facilitation payments under FCPA and UK Bribery Act standards.',
        'Mandatory disclosure of any personal conflict of interest or external commercial engagements.',
        'Protection of client intellectual property, trade secrets, and non-disclosure commitments.',
        'Responsible use of company assets, communication channels, and generative AI tools.'
      ],
      fullText: `Ethical integrity is the foundation of Clyptus client relationships. Every team member acts as an ambassador of our values. Unethical conduct, including undisclosed outside employment (moonlighting) in competing sectors or unauthorized distribution of proprietary SAP/Oracle client configurations, results in immediate disciplinary action up to termination with cause.`
    },
    {
      id: 'equal-opportunity',
      title: 'Equal Employment Opportunity & Anti-Discrimination',
      category: 'Diversity & Culture',
      version: 'v2.5',
      icon: Users2,
      summary: 'Commitment to meritocratic hiring, fair pay parity, neurodiversity inclusion, and zero tolerance for discrimination.',
      keyPoints: [
        'Decisions on hiring, compensation, and promotion based solely on demonstrated merit and skill.',
        'Zero tolerance for bias based on gender, race, religion, sexual orientation, caste, or age.',
        'Special accommodation protocols for candidates and employees with physical or sensory disabilities.',
        'Active representation targets for women in technical architecture and leadership roles.'
      ],
      fullText: `Clyptus champions a workplace where diverse perspectives thrive. We conduct anonymized technical resume reviews for all lateral hires and ensure equal pay for equal work across all delivery centers in Hyderabad, Bengaluru, Dubai, and North America.`
    },
    {
      id: 'data-privacy',
      title: 'Information Security, Data Protection & Privacy',
      category: 'Security & Compliance',
      version: 'v5.1 (ISO 27001 Certified)',
      icon: Lock,
      summary: 'ISO/IEC 27001, GDPR, and Indian DPDP Act 2023 compliant data governance protecting employee and client information.',
      keyPoints: [
        'Zero client data exfiltration: all customer ERP databases restricted to dedicated VPN tunnels.',
        'End-to-end AES-256 encryption for data at rest and TLS 1.3 for data in transit.',
        'Strict clean-desk and clean-screen policy across all offshore delivery centres (ODCs).',
        'Regular third-party vulnerability assessments and penetration testing (VAPT).'
      ],
      fullText: `Information security is paramount in enterprise ERP implementations. Clyptus enforces role-based access control (RBAC), multi-factor hardware authentication, and sovereign data residency guarantees to ensure zero unauthorized exposure of financial ledgers or personally identifiable information (PII).`
    },
    {
      id: 'maternity-parental',
      title: 'Maternity, Paternity & Parental Support Policy',
      category: 'Employee Well-being',
      version: 'v3.1',
      icon: HeartHandshake,
      summary: 'Comprehensive paid leave, healthcare benefits, and flexible transition support for new parents and adoptive guardians.',
      keyPoints: [
        '26 weeks of fully paid maternity leave for female employees.',
        '2 weeks of paid paternity leave for male employees.',
        '16 weeks of paid adoption and surrogate leave benefits.',
        'Phased return-to-work program with hybrid hours during the first 6 months post-maternity.'
      ],
      fullText: `We believe parenting and high-impact enterprise careers can coexist. In addition to statutory maternity coverage, Clyptus offers childcare assistance subsidies and guaranteed role preservation upon return from parental leave.`
    },
    {
      id: 'whistleblower',
      title: 'Whistleblower Protection & Ombudsman Redressal',
      category: 'Corporate Governance',
      version: 'v2.0',
      icon: AlertCircle,
      summary: 'Protected escalation channels allowing any employee or partner to report financial or ethical malpractices safely.',
      keyPoints: [
        'Direct confidential reporting to the Board Audit Committee and external Ombudsman.',
        'Guaranteed statutory immunity from workplace retaliation, demotion, or adverse reviews.',
        'Immediate acknowledgment of reported concerns within 48 business hours.',
        'Annual published transparency disclosures on resolved grievances.'
      ],
      fullText: `Employees are encouraged to report any suspected violations of law, safety standards, or company policies without fear of reprisal. All submissions are investigated thoroughly with strict confidentiality.`
    }
  ];

  const filteredPolicies = policies.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedPolicy = policies.find(p => p.id === selectedPolicyId) || policies[0];
  const SelectedIcon = selectedPolicy.icon;

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc]">
      
      {/* 1. Stripe Ambient Mesh Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200/80 stripe-mesh-light">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#ea4800]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ea4800]" />
            Corporate Governance & Compliance
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
                Transparent policies for a{' '}
                <span className="font-extrabold text-[#0a2540] block sm:inline">
                  responsible workplace
                </span>
              </h1>
              <p className="text-base sm:text-xl text-[#425466] max-w-3xl leading-relaxed">
                Clyptus operates with institutional governance standards, ensuring safe, inclusive, and legally protected operations for our 330+ employees and global enterprise clients.
              </p>
            </div>

            {/* Quick Search */}
            <div className="lg:col-span-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search policies, POSH, privacy, maternity..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs sm:text-sm text-[#0a2540] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2e3192]/30 focus:border-[#2e3192]"
                />
              </div>
            </div>
          </div>

          {/* Compliance Assurance Badges */}
          <div className="pt-6 flex flex-wrap items-center gap-2 sm:gap-3 border-t border-slate-200/60">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-block">Accreditations:</span>
            {['ISO/IEC 27001 Certified', 'POSH Act 2013 Governed', 'GDPR & DPDP Act Compliant', 'SOC 2 Type II Verified'].map((cert, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono-code font-bold bg-white text-slate-700 border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                {cert}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Main Two-Column Interactive Policy Viewer (Double-Bezel Bento Grid) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Policy Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 flex items-center justify-between">
              <span>Official Policy Documents</span>
              <span className="font-mono-code font-bold text-[#2e3192]">{filteredPolicies.length} Total</span>
            </div>

            <div className="space-y-3">
              {filteredPolicies.map(policy => {
                const Icon = policy.icon;
                const isSelected = policy.id === selectedPolicyId;
                return (
                  <div
                    key={policy.id}
                    onClick={() => setSelectedPolicyId(policy.id)}
                    className={`cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'stripe-bezel-outer p-1 bg-gradient-to-r from-[#2e3192]/30 to-[#ea4800]/20 shadow-md'
                        : 'p-1 hover:bg-slate-100/60 rounded-2xl'
                    }`}
                  >
                    <div className={`p-4 rounded-[calc(1rem-2px)] transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-white shadow-xs'
                        : 'bg-white/80 border border-slate-200/80 hover:bg-white'
                    }`}>
                      <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                        isSelected ? 'bg-[#2e3192] text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-mono-code font-bold uppercase tracking-wider ${
                            isSelected ? 'text-[#2e3192]' : 'text-slate-500'
                          }`}>
                            {policy.category}
                          </span>
                          <span className="text-[10px] font-mono-code text-slate-400">
                            {policy.version}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#0a2540] leading-snug">
                          {policy.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {policy.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Policy Reader (High-End Double-Bezel Frame) */}
          <div className="lg:col-span-7">
            <div className="stripe-bezel-outer p-2 sm:p-3 bg-gradient-to-b from-white to-slate-50 shadow-xl">
              <div className="stripe-bezel-inner p-6 sm:p-10 bg-white space-y-6">
                
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-[#2e3192]/10 text-[#2e3192]">
                        <SelectedIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#2e3192]">
                        {selectedPolicy.category}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight">
                      {selectedPolicy.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-code font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {selectedPolicy.version}
                    </span>
                    <a
                      href={`mailto:hr.india@clyptus.com?subject=Policy Clarification Request: ${encodeURIComponent(selectedPolicy.title)}`}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#ea4800] hover:text-white text-slate-600 transition-colors shadow-xs"
                      title="Request Official Signed Copy"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-blue-50/50 border border-indigo-100 text-xs sm:text-sm text-indigo-950 leading-relaxed font-medium">
                  {selectedPolicy.summary}
                </div>

                {/* Core Policy Mandates */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Policy Mandates
                  </h4>
                  <div className="space-y-2.5">
                    {selectedPolicy.keyPoints.map((pt, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Text Statement */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Full Policy Statement
                  </h4>
                  <div className="text-xs sm:text-sm text-[#425466] leading-relaxed whitespace-pre-line p-4 rounded-xl bg-slate-50/50 border border-slate-100">
                    {selectedPolicy.fullText}
                  </div>
                </div>

                {/* Contact Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
                    Need confidential HR or POSH consultation?
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={onOpenContact}
                      className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-bold text-[#0a2540] bg-slate-100 hover:bg-slate-200 transition-all text-center"
                    >
                      Confidential Meeting
                    </button>
                    <a
                      href="mailto:hr.india@clyptus.com"
                      className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all shadow-md text-center"
                    >
                      Email HR Desk
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default PoliciesPage;
