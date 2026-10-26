import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck,
  Globe,
  ArrowUpRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#f6f9fc] border-t border-slate-200/80 text-[#425466] text-xs overflow-hidden">
      
      {/* =========================================================================
          1. MOBILE COMPACT FOOTER (Max ~Half Screen Height, Zero Endless Scrolling)
          ========================================================================= */}
      <div className="sm:hidden px-5 py-6 space-y-4">
        {/* Brand & Region Row */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
          <Link to="/" className="inline-block">
            <img 
              src="/clyptus-logo.png" 
              alt="Clyptus Official Logo" 
              className="h-8 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0a2540] bg-white px-2.5 py-1 rounded-full border border-slate-200/80 shadow-sm">
            <Globe className="w-3 h-3 text-[#2e3192]" />
            <span>India (HQ) · Global</span>
          </div>
        </div>

        {/* Compact 2-Column Quick Navigation Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold text-[#0a2540]">
          <Link to="/solutions" className="hover:text-[#2e3192] transition-colors py-0.5">
            Enterprise Solutions
          </Link>
          <Link to="/architecture" className="hover:text-[#2e3192] transition-colors py-0.5">
            Architecture & Stack
          </Link>
          <Link to="/industries" className="hover:text-[#2e3192] transition-colors py-0.5">
            17+ Industries
          </Link>
          <Link to="/offices" className="hover:text-[#2e3192] transition-colors py-0.5">
            Global Nodes (8 Hubs)
          </Link>
          <Link to="/careers" className="hover:text-[#2e3192] transition-colors py-0.5">
            Careers & Academy
          </Link>
          <Link to="/policies" className="hover:text-[#2e3192] transition-colors py-0.5 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            POSH & Governance
          </Link>
        </div>

        {/* Mobile Contact Quick Strip */}
        <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-sm flex items-center justify-between text-[11px]">
          <a href="tel:+917799988139" className="font-bold text-[#ea4800] flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            +91 7799988139
          </a>
          <a href="mailto:Sales@clyptus.com" className="text-slate-600 hover:text-[#0a2540] flex items-center gap-1">
            <Mail className="w-3 h-3" />
            Sales@clyptus.com
          </a>
        </div>

        {/* Compact Copyright & Legal Row */}
        <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400">
          <span>© {new Date().getFullYear()} Clyptus Software Pvt Ltd.</span>
          <div className="flex items-center gap-2.5">
            <Link to="/policies" className="hover:underline">Privacy</Link>
            <span>•</span>
            <Link to="/policies" className="hover:underline">Terms</Link>
            <span>•</span>
            <Link to="/contact" className="text-[#ea4800] font-semibold">Contact</Link>
          </div>
        </div>
      </div>


      {/* =========================================================================
          2. DESKTOP / TABLET FULL EXPANDED FOOTER (Stripe Enterprise Directory)
          ========================================================================= */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Corporate Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/clyptus-logo.png" 
                alt="Clyptus Official Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-[#425466] text-xs leading-relaxed max-w-sm font-normal">
              Global enterprise technology partner specializing in SAP S/4HANA, SuccessFactors, 
              SAP BRIM, Oracle ERP Cloud, and AI-driven hyper-automation. Operating across India, UAE, and USA.
            </p>

            <div className="pt-2 space-y-2 font-mono-code text-[11px] text-[#0a2540] font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2e3192]" />
                <span>HQ: Level 4, Gumidelli Towers, Begumpet, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <a href="tel:+917799988139" className="hover:text-[#2e3192] transition-colors">
                  +91 7799988139 (Sales Desk)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ea4800]" />
                <a href="mailto:Sales@clyptus.com" className="hover:text-[#2e3192] transition-colors">
                  Sales@clyptus.com
                </a>
              </div>
            </div>

            {/* Country Selector (Stripe Style) */}
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0a2540]">
              <Globe className="w-4 h-4 text-[#2e3192]" />
              <span>India · Global Delivery Network</span>
            </div>
          </div>

          {/* Solutions Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
              Enterprise Suite
            </div>
            <ul className="space-y-2">
              <li><Link to="/solutions#sap" className="hover:text-[#0a2540] transition-colors">SAP S/4HANA Migration</Link></li>
              <li><Link to="/solutions#sap" className="hover:text-[#0a2540] transition-colors">SAP SuccessFactors RDS</Link></li>
              <li><Link to="/solutions#brim" className="hover:text-[#0a2540] transition-colors">SAP BRIM High-Volume</Link></li>
              <li><Link to="/solutions#sap" className="hover:text-[#0a2540] transition-colors">SAP BTP Extension Suite</Link></li>
              <li><Link to="/solutions#oracle" className="hover:text-[#0a2540] transition-colors">Oracle ERP Cloud & EBS</Link></li>
              <li><Link to="/solutions#ai" className="hover:text-[#0a2540] transition-colors">Autonomous AI Ops</Link></li>
            </ul>
          </div>

          {/* Industries (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
              Industries
            </div>
            <ul className="space-y-2">
              <li><Link to="/industries" className="hover:text-[#0a2540] transition-colors">EV & Automotive</Link></li>
              <li><Link to="/industries" className="hover:text-[#0a2540] transition-colors">Pharmaceuticals GxP</Link></li>
              <li><Link to="/industries" className="hover:text-[#0a2540] transition-colors">Banking & Insurance</Link></li>
              <li><Link to="/industries" className="hover:text-[#0a2540] transition-colors">Chemical & Process</Link></li>
              <li><Link to="/industries" className="hover:text-[#0a2540] transition-colors">Steel & Discrete Mfg</Link></li>
              <li><Link to="/industries" className="hover:text-[#0a2540] transition-colors">Retail & CPG Commerce</Link></li>
            </ul>
          </div>

          {/* Global Network (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
              Global Nodes
            </div>
            <ul className="space-y-2">
              <li><Link to="/offices" className="hover:text-[#0a2540] transition-colors">Hyderabad (HQ)</Link></li>
              <li><Link to="/offices" className="hover:text-[#0a2540] transition-colors">Dubai, UAE (DIFC)</Link></li>
              <li><Link to="/offices" className="hover:text-[#0a2540] transition-colors">Phoenix / Scottsdale, USA</Link></li>
              <li><Link to="/offices" className="hover:text-[#0a2540] transition-colors">Bengaluru & Chennai</Link></li>
              <li><Link to="/offices" className="hover:text-[#0a2540] transition-colors">Mumbai & Indore</Link></li>
              <li><Link to="/offices" className="hover:text-[#0a2540] transition-colors">Vijayawada Academy</Link></li>
            </ul>
          </div>

          {/* Governance & Careers (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
              Trust & Careers
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/policies" className="hover:text-[#0a2540] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00d924]" />
                  HR Policies & POSH
                </Link>
              </li>
              <li><Link to="/careers" className="hover:text-[#0a2540] transition-colors">Senior Lateral Roles</Link></li>
              <li><Link to="/careers" className="hover:text-[#0a2540] transition-colors">Junior Academy Residency</Link></li>
              <li><Link to="/blog" className="hover:text-[#0a2540] transition-colors">Architecture Insights</Link></li>
              <li>
                <Link to="/contact" className="text-[#ea4800] hover:underline font-bold inline-flex items-center gap-1">
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Giant "CLYPTUS" Typography in Bottom Right White Space */}
        <div 
          aria-hidden="true" 
          className="flex justify-end pt-6 sm:pt-8 pb-1 pointer-events-none select-none overflow-hidden"
        >
          <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11.5rem] tracking-tighter leading-none text-slate-200/90 select-none uppercase">
            CLYPTUS
          </span>
        </div>

        {/* Desktop Bottom Bar */}
        <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} Clyptus Software Solutions Private Limited. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/policies" className="hover:text-[#0a2540] transition-colors">
              Data Privacy
            </Link>
            <Link to="/policies" className="hover:text-[#0a2540] transition-colors">
              Code of Conduct
            </Link>
            <Link to="/policies" className="hover:text-[#0a2540] transition-colors">
              POSH Compliance
            </Link>
            <a href="https://clyptus.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a2540] transition-colors">
              clyptus.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;