import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  ChevronRight, 
  MapPin, 
  Clock,
  Mail
} from 'lucide-react';

interface CareersSectionProps {
  onOpenContact?: () => void;
}

export const CareersSection: React.FC<CareersSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'senior' | 'junior'>('senior');

  const openings = [
    {
      title: 'Senior SAP S/4HANA Solution Architect',
      type: 'senior',
      location: 'Hyderabad / Bengaluru (Hybrid)',
      experience: '7 - 12 Years',
      skills: ['S/4HANA Migration', 'Central Finance', 'Fiori UI5', 'BTP Architecture'],
      badge: 'Urgent'
    },
    {
      title: 'SAP BRIM / FICA Technical Specialist',
      type: 'senior',
      location: 'Hyderabad / Dubai (Hybrid)',
      experience: '5 - 9 Years',
      skills: ['Convergent Invoicing', 'FICA Subledger', 'Subscription Order Mgmt'],
      badge: 'High Priority'
    },
    {
      title: 'Oracle ERP Cloud Financials Consultant',
      type: 'senior',
      location: 'Chennai / Mumbai / Remote',
      experience: '6 - 10 Years',
      skills: ['Oracle Financials', 'EBS to Cloud', 'General Ledger', 'Payables'],
      badge: 'Active'
    },
    {
      title: 'Enterprise AI & Automation Engineer',
      type: 'senior',
      location: 'Hyderabad / Remote',
      experience: '4 - 8 Years',
      skills: ['Python', 'LLM Agent Architectures', 'SAP Integration', 'RPA'],
      badge: 'New Team'
    },
    {
      title: 'Associate SAP Consultant — Junior Track',
      type: 'junior',
      location: 'Hyderabad Campus',
      experience: '0 - 2 Years (B.Tech / MCA / MBA)',
      skills: ['ABAP Basics', 'Database Concepts', 'Analytical Problem Solving'],
      badge: 'Cohort 2026'
    },
    {
      title: 'Junior Full-Stack & UI5 Developer',
      type: 'junior',
      location: 'Vijayawada / Hyderabad',
      experience: '0 - 1.5 Years',
      skills: ['TypeScript', 'React / UI5', 'REST APIs', 'Cloud Essentials'],
      badge: 'Cohort 2026'
    }
  ];

  const filtered = openings.filter(o => o.type === activeTab);

  return (
    <section id="careers" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.06em] text-[#2e3192]">
            Careers at Clyptus
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-[#0a2540] leading-tight">
            Work with elite minds solving{' '}
            <span className="font-extrabold text-[#0a2540]">
              complex enterprise challenges
            </span>
          </h2>

          <p className="text-base text-[#425466]">
            Whether you are a seasoned architect or an ambitious graduate, Clyptus offers a global stage, 
            hands-on SAP/Oracle certifications, and rapid career progression.
          </p>
        </div>

        {/* Program Track Tabs */}
        <div className="flex mb-12">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-full">
            <button
              onClick={() => setActiveTab('senior')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'senior'
                  ? 'bg-white text-[#0a2540] shadow-sm'
                  : 'text-slate-500 hover:text-[#0a2540]'
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#2e3192]" />
              Senior Lateral Professionals
            </button>
            <button
              onClick={() => setActiveTab('junior')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'junior'
                  ? 'bg-white text-[#0a2540] shadow-sm'
                  : 'text-slate-500 hover:text-[#0a2540]'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#ea4800]" />
              Clyptus Junior Academy
            </button>
          </div>
        </div>

        {/* Openings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filtered.map((job, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 stripe-card-shadow flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-code font-bold px-2.5 py-0.5 rounded-full bg-[#2e3192]/10 text-[#2e3192]">
                    {job.badge}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {job.experience}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0a2540] tracking-tight">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#ea4800]" />
                    {job.location}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.skills.map((sk, sIdx) => (
                    <span key={sIdx} className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-100">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-[#627d98]">Full-time Role</span>
                <a
                  href={`mailto:hr.india@clyptus.com?subject=Application:%20${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#ea4800] hover:text-[#2e3192] transition-colors"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Direct Resume Drop Banner */}
        <div className="bg-[#f6f9fc] rounded-3xl p-8 sm:p-10 border border-slate-200/80 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0a2540] tracking-tight">
            Don't see your specific role?
          </h3>
          <p className="text-sm text-[#425466] max-w-xl mx-auto">
            We review every profile personally. Send your resume directly to our talent acquisition team and we will reach out when a match opens.
          </p>
          <div className="pt-2">
            <a
              href="mailto:hr.india@clyptus.com?subject=General%20Resume%20Submission"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all shadow-md shadow-orange-500/20 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Email Resume to hr.india@clyptus.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
