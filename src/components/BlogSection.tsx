import React from 'react';
import { ChevronRight, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogSection: React.FC = () => {
  const posts = [
    {
      title: 'The Strategic Role of SAP FICA in S/4HANA Central Finance Deployments',
      category: 'SAP Finance & FICA',
      readTime: '6 min read',
      date: 'June 2025',
      excerpt: 'How Contract Accounts Receivable and Payable (FI-CA) enables high-volume mass processing, subledger reconciliation, and real-time integration into S/4HANA Central Finance.',
      tag: 'SAP Architecture',
      image: '/images/sap-implementation.png'
    },
    {
      title: 'SAP BRIM Services & Implementation Blueprint in Hyderabad',
      category: 'Monetization & Billing',
      readTime: '5 min read',
      date: 'October 2025',
      excerpt: 'Analyzing why Hyderabad has become the premier global delivery hub for Convergent Charging, High-Throughput Mediation, and Subscription Billing transformations.',
      tag: 'SAP BRIM',
      image: '/images/sap-brim.jpg'
    },
    {
      title: 'How to Post a Manual Document Using T-Code FPE1 in SAP',
      category: 'Technical Tutorials',
      readTime: '4 min read',
      date: 'June 2025',
      excerpt: 'Step-by-step technical guide for posting manual documents, setting reconciliation keys, handling subledger tax codes, and posting clearing entries using transaction FPE1.',
      tag: 'ABAP & FICA',
      image: '/images/oracle-vs-sap.png'
    },
    {
      title: 'IT Project Planning: 5 Costly Enterprise Mistakes to Avoid',
      category: 'Executive Strategy',
      readTime: '5 min read',
      date: 'June 2025',
      excerpt: 'Critical pitfalls in scope definition, data cleansing, change management, and testing gates that derail large-scale ERP migrations and how to preempt them.',
      tag: 'Project Advisory',
      image: '/images/oracle-erp.jpg'
    }
  ];

  return (
    <section id="blogs" className="relative py-20 sm:py-24 bg-[#f6f9fc] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.06em] text-[#2e3192]">
              <BookOpen className="w-3.5 h-3.5 text-[#ea4800]" />
              Engineering & Architecture Insights
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-[#0a2540] leading-tight">
              Latest perspectives from our{' '}
              <span className="font-extrabold text-[#0a2540]">
                Enterprise Centers of Excellence
              </span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea4800] hover:text-[#2e3192] transition-colors self-start md:self-auto"
          >
            <span>View All Publications ({posts.length}+)</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Grid: Minimal Tight Spacing (gap-4 sm:gap-5) with Real Card Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {posts.map((post, idx) => (
            <Link 
              key={idx} 
              to="/blog"
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 stripe-card-shadow flex flex-col justify-between overflow-hidden group"
            >
              <div className="space-y-4">
                {/* Visual Image Header */}
                <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono-code font-bold text-[#0a2540] shadow-sm">
                    <span>{post.category}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 text-xs font-mono-code text-indigo-200">
                    {post.tag}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="text-slate-400 font-mono-code text-[11px]">{post.date}</span>
                    <div className="flex items-center gap-1.5 font-medium text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0a2540] tracking-tight group-hover:text-[#2e3192] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed line-clamp-2 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono-code">Architecture Note</span>
                <span className="inline-flex items-center gap-1 font-bold text-[#ea4800] group-hover:text-[#2e3192] transition-colors">
                  <span>Read Full Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
export default BlogSection;