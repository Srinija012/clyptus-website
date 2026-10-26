import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Search, CheckCircle, FileText } from 'lucide-react';

interface HRPoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HRPoliciesModal: React.FC<HRPoliciesModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPolicy, setSelectedPolicy] = useState<string>('posh');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const policies = [
    {
      id: 'posh',
      title: 'POSH Policy (Prevention of Sexual Harassment)',
      category: 'Workplace Safety & Compliance',
      effectiveDate: 'January 1, 2024',
      badge: 'Mandatory',
      summary: 'Strict compliance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act. An impartial Internal Committee (IC) conducts inquiries with rigorous confidentiality and strict non-retaliation protections.',
      keyPoints: [
        'Mandatory annual POSH training for all employees and contractors',
        'Direct reporting to Internal Committee at hr.india@clyptus.com',
        'Timebound inquiry completed within 90 days of complaint',
        'Strict zero-tolerance and anti-retaliation enforcement'
      ]
    },
    {
      id: 'code-of-conduct',
      title: 'Corporate Code of Conduct',
      category: 'Governance & Ethics',
      effectiveDate: 'January 1, 2024',
      badge: 'Core Governance',
      summary: 'Sets the standard for uncompromising integrity, fair competition, asset protection, intellectual property safeguarding, and prohibition of corrupt gifts across all business relationships.',
      keyPoints: [
        'Applicable to all full-time employees, contractors, and vendor partners',
        'Zero-tolerance policy on bribery, kickbacks, and insider trading',
        'Mandatory disclosure of conflict of interest',
        'Protection of client confidentiality and non-disclosure agreements (NDAs)'
      ]
    },
    {
      id: 'data-privacy',
      title: 'Enterprise Data Privacy & Security Policy',
      category: 'Data Governance',
      effectiveDate: 'Annual Review 2024',
      badge: 'Information Security',
      summary: 'Governs the lawful collection, processing, storage, and disposal of personal and proprietary data under international standards (GDPR, ISO 27001, Indian DPDP Act).',
      keyPoints: [
        'Strict role-based access control (RBAC) across ERP systems',
        'End-to-end encryption of all employee and client credentials',
        'Mandatory data breach notification protocol within 6 business hours',
        'Regular penetration testing and compliance audits'
      ]
    },
    {
      id: 'maternity-leave',
      title: 'Maternity & Parental Support Policy',
      category: 'Employee Welfare',
      effectiveDate: 'Statutory 2024',
      badge: 'Family Support',
      summary: 'Comprehensive maternity benefits adhering strictly to Indian statutory mandates, providing fully paid leave, adoption leave support, phased return-to-work options, and nursing breaks.',
      keyPoints: [
        '26 weeks of paid maternity leave for eligible female employees',
        'Adoption leave provisions for primary caregivers',
        'Gradual return-to-work program with flexible hybrid options',
        'Designated nursing break entitlements upon resumption of duty'
      ]
    },
    {
      id: 'disciplinary',
      title: 'Formal Disciplinary & Accountability Policy',
      category: 'HR Management',
      effectiveDate: 'January 1, 2024',
      badge: 'Workplace Conduct',
      summary: 'Defines progressive corrective actions for misconduct, establishing fair procedures from verbal counseling and written warnings through to termination for gross violations.',
      keyPoints: [
        'Structured warning ladder: Verbal -> First Written -> Final Written',
        'Gross misconduct (theft, data theft, violence) grounds for instant dismissal',
        'Right to fair hearing and documentation of defense',
        'All warnings remain on file for a 12-month probationary review'
      ]
    },
    {
      id: 'benefits',
      title: 'Comprehensive Employee Benefits & Health',
      category: 'Compensation & Perks',
      effectiveDate: 'Annual Cycle',
      badge: 'Benefits Suite',
      summary: 'High-grade medical insurance coverage for employees and dependents, Provident Fund (PF), Gratuity, annual performance incentives, and mental health wellness counseling.',
      keyPoints: [
        'Family floater health insurance coverage including parents/spouse',
        'Statutory Provident Fund (PF) and Gratuity contributions',
        'Certification sponsorship for SAP and Oracle credentials',
        'Annual wellness checks and 24/7 confidential counseling hotline'
      ]
    },
    {
      id: 'leave',
      title: 'Annual & Medical Leave Policy',
      category: 'Work-Life Balance',
      effectiveDate: 'January 1, 2024',
      badge: 'Time Off',
      summary: 'Generous leave framework covering Earned/Privilege Leave, Casual Leave, Sick Leave, and National/Festival holidays in full alignment with state labor regulations.',
      keyPoints: [
        'Monthly leave accrual credited automatically in HRMS portal',
        'Encashment and carry-forward options up to statutory limits',
        'Extended medical leave with medical board certification',
        'Paternity leave entitlement for new fathers'
      ]
    },
    {
      id: 'grievance',
      title: 'Employee Grievance Redressal Mechanism',
      category: 'Resolution Framework',
      effectiveDate: 'Active',
      badge: 'Fair Hearing',
      summary: 'Transparent, structured multi-tier procedure for addressing individual or collective workplace grievances swiftly, confidentially, and without fear of reprisal.',
      keyPoints: [
        'Tier 1: Direct discussion with immediate Reporting Manager',
        'Tier 2: Escalation to Head of HR within 5 business days',
        'Tier 3: Executive Grievance Committee final resolution',
        'Strict non-retaliation guarantee for whistleblowers and complainants'
      ]
    },
    {
      id: 'handbook',
      title: 'Official Clyptus Employee Handbook',
      category: 'General Reference',
      effectiveDate: 'Version 4.2',
      badge: 'Handbook',
      summary: 'The operational constitution of Clyptus. Combines daily office policies, hybrid working standards, device usage agreements, performance review cadences, and cultural values.',
      keyPoints: [
        'Complete guide given to every onboarded colleague',
        'Digital acknowledgment signed via DocuSign/HRMS upon joining',
        'Device security, clean desk, and remote connectivity protocols',
        'Performance appraisal cycles and promotion review criteria'
      ]
    },
    {
      id: 'rejoin',
      title: 'Alumni Rejoin & Rehire Policy',
      category: 'Talent Acquisition',
      effectiveDate: 'Active',
      badge: 'Alumni Network',
      summary: 'Welcoming former high-performing team members back into the Clyptus family with streamlined onboarding, tenure recognition, and adjusted seniority evaluation.',
      keyPoints: [
        'Eligible for alumni who left in good standing with formal notice',
        'Fast-track interview process with practice leadership',
        'Recognition of past tenure towards continuous service awards',
        'Dedicated alumni contact desk: hr.india@clyptus.com'
      ]
    }
  ];

  const filtered = policies.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const active = policies.find(p => p.id === selectedPolicy) || policies[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog Window (Clean White Stripe Aesthetic) */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white border border-slate-200/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#2e3192]/10 text-[#2e3192]">
              <ShieldCheck className="w-5 h-5 text-[#2e3192]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0a2540] tracking-tight">
                Clyptus HR Governance & Compliance Portal
              </h2>
              <p className="text-xs text-slate-500">
                Official statutory policies, employee handbooks, and compliance standards
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#0a2540] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search policies (POSH, leave, data privacy, disciplinary, code of conduct...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a2540] placeholder-slate-400 focus:outline-none focus:border-[#2e3192]"
            />
          </div>
        </div>

        {/* Split View */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          
          {/* Policy List Sidebar (5 cols) */}
          <div className="md:col-span-5 border-r border-slate-100 overflow-y-auto max-h-[45vh] md:max-h-none p-3 space-y-1 bg-slate-50/60">
            {filtered.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-400">
                No matching policies found.
              </div>
            ) : (
              filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedPolicy(item.id)}
                  className={`w-full p-3.5 rounded-xl text-left transition-all flex flex-col gap-1 ${
                    selectedPolicy === item.id
                      ? 'bg-white border border-[#2e3192] shadow-sm'
                      : 'hover:bg-white/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0a2540] line-clamp-1">{item.title}</span>
                    <span className={`text-[9px] font-mono-code font-bold px-1.5 py-0.5 rounded ${
                      selectedPolicy === item.id ? 'bg-[#2e3192] text-white' : 'text-slate-500 bg-slate-200/60'
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1">
                    {item.category}
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Policy Detail Area (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 overflow-y-auto space-y-6 bg-white">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold bg-[#ea4800]/10 text-[#ea4800]">
                  {active.category}
                </span>
                <span className="text-xs text-slate-400 font-mono-code font-medium">
                  Effective: {active.effectiveDate}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0a2540] tracking-tight">
                {active.title}
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/60 text-sm text-[#425466] leading-relaxed">
              {active.summary}
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#627d98]">
                Key Operational Provisions
              </h4>
              <div className="space-y-2">
                {active.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0a2540] bg-[#f6f9fc] p-3 rounded-xl border border-slate-200/50">
                    <CheckCircle className="w-4 h-4 text-[#00d924] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-500">
                Direct HR Questions: <a href="mailto:hr.india@clyptus.com" className="text-[#ea4800] hover:underline font-semibold">hr.india@clyptus.com</a>
              </div>
              <a
                href="mailto:hr.india@clyptus.com?subject=Policy%20Clarification%20Request"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0a2540] font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Request Signed PDF Copy
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
