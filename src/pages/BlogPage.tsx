import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Search, 
  ChevronRight, 
  X,
  Sparkles,
  Terminal,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface BlogPageProps {
  onOpenContact: () => void;
}

interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: 'architecture' | 'sap' | 'cloud' | 'strategy';
  author: string;
  role: string;
  summary: string;
  fullContent?: string[];
  tags: string[];
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'architecture' | 'sap' | 'cloud' | 'strategy'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'sap-fica-cfin',
      slug: 'strategic-role-sap-fica-cfin',
      title: 'The Strategic Role of SAP FICA in S/4HANA Central Finance Deployments',
      date: 'June 26, 2025',
      readTime: '6 min read',
      category: 'sap',
      author: 'Clyptus Architecture Advisory Board',
      role: 'Enterprise Practice Group',
      summary: 'Why enterprises processing millions of consumer invoices daily decouple standard general ledgers with Contract Accounts Receivable and Payable (FI-CA) as the high-throughput operational sub-ledger.',
      tags: ['SAP FICA', 'Central Finance', 'S/4HANA', 'Enterprise Ledger'],
      fullContent: [
        'In massive consumer-facing industries—such as utilities, telecommunications, public sector agencies, and high-frequency digital subscription platforms—a standard general ledger (FI-GL) quickly becomes a performance bottleneck under millions of open line items.',
        'SAP Contract Accounts Receivable and Payable (FI-CA) acts as an optimized, multi-threaded sub-ledger capable of processing mass transactional data with minimal database locking.',
        'When integrated with S/4HANA Central Finance (CFIN), FI-CA documents are posted at line-item granularity within the operational system, while summarized financial totals are replicated near real-time into the central reporting ledger.',
        'Key Architectural Recommendation: Enforce automated clearing algorithms and strict reconciliation tolerances to prevent sub-ledger drift between FI-CA and CFIN Universal Journal (ACDOCA).'
      ]
    },
    {
      id: 'tcode-fpe1-guide',
      slug: 'post-manual-document-tcode-fpe1',
      title: 'How to Post a Manual Document Using T-code FPE1: A Step-by-Step Production Guide',
      date: 'June 21, 2025',
      readTime: '8 min read',
      category: 'sap',
      author: 'Senior SAP Financial Operations Team',
      role: 'Clyptus SAP CoE',
      summary: 'A field-tested operational blueprint on navigating transaction code FPE1 for ad-hoc manual adjustment postings in SAP FI-CA, document headers, clearing controls, and audit verification.',
      tags: ['T-code FPE1', 'FI-CA Posting', 'Operations', 'SAP Guide'],
      fullContent: [
        'Transaction Code FPE1 is the foundational transaction for manual single-document postings in SAP Contract Accounting (FI-CA).',
        'Step 1: Document Header Initialization. Specify the Document Date, Posting Date, Document Type, and Currency. The document type determines whether number ranges are internal or external.',
        'Step 2: Business Partner & Contract Account Allocation. Enter the target Business Partner GUID and associated Contract Account ID. Ensure main and sub-transactions are mapped accurately to drive correct GL account determination.',
        'Step 3: Line Item Entry & Due Date Determination. Define debit/credit indicator, gross transaction amount, tax code, and net due dates for dunning calculation.',
        'Step 4: Simulation & Posting. Always execute a document simulation before commit to inspect tax calculations and automatic clearing propositions.'
      ]
    },
    {
      id: 'sap-brim-hyderabad',
      slug: 'sap-brim-services-hyderabad',
      title: 'SAP BRIM Services in Hyderabad: Architecting High-Throughput Billing Engines',
      date: 'October 7, 2025',
      readTime: '5 min read',
      category: 'architecture',
      author: 'Hyderabad Enterprise CoE',
      role: 'Clyptus Core Team',
      summary: 'How Hyderabad has emerged as the global epicenter for SAP Billing and Revenue Innovation Management (BRIM) engineering, Convergent Charging (CC), and high-scale subscription rating.',
      tags: ['SAP BRIM', 'Hyderabad CoE', 'Subscription Economy', 'High Throughput'],
      fullContent: [
        'The transition toward recurring revenue, consumption-based pricing, and complex partner revenue share models has made SAP BRIM the enterprise gold standard.',
        'Clyptus has established a 120+ consultant strong BRIM Center of Excellence in Hyderabad, delivering end-to-end architectures encompassing Convergent Mediation (CM), Convergent Charging (CC), Convergent Invoicing (CI), and FI-CA.',
        'Our pre-packaged accelerator suites enable enterprises to launch new digital consumption products within 6 weeks, rather than traditional 9-month migration cycles.'
      ]
    },
    {
      id: 'managed-it-services-cost-cut',
      slug: 'how-managed-it-services-cut-costs',
      title: 'How Managed IT Services Can Cut Enterprise Run Costs by 38%',
      date: 'June 26, 2025',
      readTime: '4 min read',
      category: 'strategy',
      author: 'Global Practice Director',
      role: 'Clyptus Cloud Ops',
      summary: 'A financial analysis of shifting from high-friction multi-vendor ticket maintenance to proactive, outcome-committed Application Management Services (AMS) with automated SLA triage.',
      tags: ['Cost Optimization', 'Managed Services', 'AMS', 'Enterprise ROI'],
      fullContent: [
        'Enterprises often spend 70% of IT budgets maintaining legacy lights-on operations, leaving only 30% for strategic modernization.',
        'By transitioning to Clyptus 24/7 Follow-the-Sun AMS with automated Level-1 and Level-2 AI incident triage, our clients consistently observe a 38% reduction in total operational run spend within 12 months.',
        'Key performance indicator: Incident Mean Time to Resolution (MTTR) reduced from 4.2 hours to 18 minutes via telemetry automation.'
      ]
    },
    {
      id: 'it-project-planning-mistakes',
      slug: 'it-project-planning-mistakes-to-avoid',
      title: 'IT Project Planning: 5 Critical Architectural Mistakes to Avoid in ERP Migrations',
      date: 'June 26, 2025',
      readTime: '7 min read',
      category: 'strategy',
      author: 'Lead Solution Architect',
      role: 'Enterprise Advisory',
      summary: 'The five fatal assumptions enterprise project directors make during brownfield S/4HANA migrations—and how Clean Core discipline prevents post-go-live operational gridlock.',
      tags: ['Project Management', 'ERP Migration', 'Clean Core', 'Architecture Pitfalls'],
      fullContent: [
        'Mistake 1: Lift-and-Shift of Legacy Z-Code. Carrying over 15 years of technical debt without automated custom code impact analysis.',
        'Mistake 2: Delaying Data Cleansing until Cutover. Historical transactional clutter bloating HANA in-memory memory footprint and migration windows.',
        'Mistake 3: Underestimating Change Management for Fiori UX. Users resisting modernized modern web tiles when training focuses purely on legacy GUI screens.',
        'Mistake 4: Absence of Automated Event-Driven Testing. Manually testing thousands of integration points instead of automated regression pipelines.',
        'Mistake 5: Failing to decouple custom logic onto SAP BTP side-by-side cloud environments.'
      ]
    },
    {
      id: 'it-services-london-europe',
      slug: 'it-services-london-business-needs',
      title: 'IT Services in London & Europe: Meeting Sovereign Data Residency Mandates',
      date: 'June 18, 2025',
      readTime: '4 min read',
      category: 'cloud',
      author: 'Global Compliance Practice',
      role: 'Legal & Tech Architecture',
      summary: 'Navigating European financial regulatory standards, GDPR compliance, and sovereign enterprise cloud hosting for cross-border multinational corporations.',
      tags: ['London', 'GDPR', 'Compliance', 'Sovereign Cloud'],
      fullContent: [
        'Multinational enterprises operating in London and across Europe face increasingly rigorous regulatory expectations regarding cross-border financial data flows.',
        'Clyptus delivers hybrid architectures that maintain sensitive financial journals and personal data within local EU sovereign zones while orchestrating distributed business analytics globally.',
        'Our engineering patterns are validated against ISO/IEC 27001, SOC 2 Type II, and the UK Data Protection Act.'
      ]
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc]">
      
      {/* 1. Stripe Ambient Mesh Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200/80 stripe-mesh-light">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#ea4800]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192]">
            <BookOpen className="w-3.5 h-3.5 text-[#ea4800]" />
            Clyptus Engineering Publications & Insights
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
                Field notes from the{' '}
                <span className="font-extrabold text-[#0a2540] block sm:inline">
                  frontlines of enterprise cloud
                </span>
              </h1>
              <p className="text-base sm:text-xl text-[#425466] max-w-3xl leading-relaxed">
                Architectural teardowns, production runbooks, SAP BRIM patterns, and Clean Core strategies written by practicing Lead Architects.
              </p>
            </div>

            {/* Quick Search Input */}
            <div className="lg:col-span-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search topics, T-codes, SAP..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs sm:text-sm text-[#0a2540] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2e3192]/30 focus:border-[#2e3192]"
                />
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center gap-2 sm:gap-3 border-t border-slate-200/60">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-block">Filter Topic:</span>
            {[
              { id: 'all', label: 'All Articles' },
              { id: 'sap', label: 'SAP & FI-CA' },
              { id: 'architecture', label: 'Architecture & BRIM' },
              { id: 'strategy', label: 'Project Strategy' },
              { id: 'cloud', label: 'Cloud & Compliance' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === tab.id
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

      {/* 2. Featured Article Banner (Stripe Dark Mesh Hero) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          onClick={() => setReadingArticle(articles[0])}
          className="cursor-pointer rounded-3xl p-8 sm:p-12 stripe-mesh-dark text-white border border-white/10 shadow-2xl hover:scale-[1.008] transition-transform duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2e3192]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-3xl relative z-10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase tracking-wider bg-[#ea4800] text-white shadow-sm">
                Featured Architecture Teardown
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono-code">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{articles[0].readTime}</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white group-hover:text-[#00d4ff] transition-colors leading-tight">
              {articles[0].title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {articles[0].summary}
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2 font-mono-code">
              <span className="font-semibold text-slate-200">{articles[0].author}</span>
              <span>•</span>
              <span>{articles[0].date}</span>
            </div>
          </div>

          <div className="shrink-0 relative z-10 w-full lg:w-auto">
            <span className="inline-flex items-center justify-center gap-2 w-full lg:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white text-[#0a2540] group-hover:bg-[#ea4800] group-hover:text-white transition-all shadow-lg active:scale-95">
              <span>Read Technical Guide</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </section>

      {/* 3. Articles Double-Bezel Bento Grid */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map(article => (
            <article
              key={article.id}
              onClick={() => setReadingArticle(article)}
              className="cursor-pointer stripe-bezel-outer p-2 bg-gradient-to-b from-white to-slate-50/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="stripe-bezel-inner p-6 sm:p-7 space-y-4 flex flex-col justify-between h-full bg-white">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2e3192]/10 text-[#2e3192] border border-[#2e3192]/20">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-code">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0a2540] group-hover:text-[#2e3192] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono-code">{article.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2e3192] group-hover:text-[#ea4800] transition-colors group/btn">
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Full Article Reader Modal (Stripe Glass Overlay) */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-10 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase bg-[#2e3192]/10 text-[#2e3192]">
                  {readingArticle.category}
                </span>
                <span className="text-xs text-slate-400 font-mono-code">{readingArticle.readTime}</span>
              </div>
              <button
                onClick={() => setReadingArticle(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] leading-tight">
                {readingArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-slate-500 font-mono-code">
                <span className="font-semibold text-slate-700">{readingArticle.author}</span>
                <span>•</span>
                <span>{readingArticle.date}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "{readingArticle.summary}"
            </div>

            <div className="space-y-4 text-sm text-[#425466] leading-relaxed font-normal">
              {readingArticle.fullContent?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {readingArticle.tags.map((t, idx) => (
                  <span key={idx} className="text-xs font-mono-code px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setReadingArticle(null);
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#ea4800] hover:bg-[#d34000] transition-all shadow-md active:scale-95"
              >
                Consult Author Team
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default BlogPage;
