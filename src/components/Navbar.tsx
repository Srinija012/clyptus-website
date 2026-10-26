import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Layers, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  PhoneCall, 
  ChevronDown,
  Building2,
  Briefcase,
  BookOpen,
  Calculator
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo (Original Clyptus Logo) */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/clyptus-logo.png" 
              alt="Clyptus Official Logo" 
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Centralized Navigation (Stripe Style) */}
          <nav className="hidden lg:flex items-center gap-1">
            
            <Link 
              to="/" 
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-[#2e3192] bg-[#2e3192]/10' : 'text-[#0a2540] hover:text-[#2e3192]'
              }`}
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/solutions"
                className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  isActive('/solutions') ? 'text-[#2e3192] bg-[#2e3192]/10' : 'text-[#0a2540] hover:text-[#2e3192]'
                }`}
              >
                Solutions
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-1 w-80 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-[0_20px_40px_-15px_rgba(46,49,146,0.15)] animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link to="/solutions#sap" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="p-2 rounded-lg bg-[#2e3192]/10 text-[#2e3192]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0a2540]">SAP S/4HANA & BTP</div>
                      <div className="text-xs text-slate-500">Migration, Fiori, BRIM & AMS</div>
                    </div>
                  </Link>
                  <Link to="/solutions#oracle" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="p-2 rounded-lg bg-sky-50 text-[#0284c7]">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0a2540]">Oracle ERP Cloud</div>
                      <div className="text-xs text-slate-500">Financials, EBS & HCM integration</div>
                    </div>
                  </Link>
                  <Link to="/solutions#ai" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="p-2 rounded-lg bg-orange-50 text-[#ea4800]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0a2540]">AI Operations</div>
                      <div className="text-xs text-slate-500">Enterprise agents & hyper-automation</div>
                    </div>
                  </Link>
                  <a href="/#roi-calculator" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors border-t border-slate-100 mt-1 pt-2">
                    <div className="p-2 rounded-lg bg-[#2e3192]/10 text-[#2e3192]">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2e3192] flex items-center gap-1.5">
                        <span>ROI Estimator</span>
                        <span className="text-[9px] font-mono-code font-bold uppercase px-1.5 py-0.5 rounded bg-[#ea4800]/10 text-[#ea4800]">Interactive</span>
                      </div>
                      <div className="text-xs text-slate-500">Simulate TCO & cycle-time impact</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <Link 
              to="/architecture" 
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive('/architecture') ? 'text-[#2e3192] bg-[#2e3192]/10' : 'text-[#0a2540] hover:text-[#2e3192]'
              }`}
            >
              Architecture
            </Link>

            <Link 
              to="/industries" 
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive('/industries') ? 'text-[#2e3192] bg-[#2e3192]/10' : 'text-[#0a2540] hover:text-[#2e3192]'
              }`}
            >
              Industries
            </Link>

            <Link 
              to="/offices" 
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive('/offices') ? 'text-[#2e3192] bg-[#2e3192]/10' : 'text-[#0a2540] hover:text-[#2e3192]'
              }`}
            >
              Global Nodes
            </Link>

            <Link 
              to="/careers" 
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                isActive('/careers') ? 'text-[#2e3192] bg-[#2e3192]/10' : 'text-[#0a2540] hover:text-[#2e3192]'
              }`}
            >
              Careers
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[#ea4800]/10 text-[#ea4800] rounded-full">
                Hiring
              </span>
            </Link>

            <Link 
              to="/blog" 
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive('/blog') ? 'text-[#2e3192] bg-[#2e3192]/10' : 'text-[#0a2540] hover:text-[#2e3192]'
              }`}
            >
              Insights
            </Link>

            <Link 
              to="/policies" 
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1 ${
                isActive('/policies') ? 'text-[#2e3192] bg-[#2e3192]/10' : 'text-[#0a2540] hover:text-[#2e3192]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Policies
            </Link>
          </nav>

          {/* Right-Aligned Utility Actions (Stripe Style) */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="tel:+917799988139" 
              className="text-xs font-semibold text-slate-600 hover:text-[#0a2540] transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#ea4800]" />
              +91 7799988139
            </a>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#ea4800] hover:bg-[#d03f00] shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <span>Book Consultation</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0a2540] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5 text-[#ea4800]" /> : <Menu className="w-5 h-5 text-[#2e3192]" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer (Clean Brand Style) */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        <div className="relative bg-white w-full max-w-sm ml-auto h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4 pt-16">
            
            {/* Clean Mobile Brand Banner */}
            <div className="px-3.5 py-2 rounded-xl bg-[#2e3192]/5 border border-[#2e3192]/10 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#2e3192] uppercase tracking-wider">Enterprise Cloud & AI</span>
              <span className="text-[10px] font-bold text-[#ea4800] bg-[#ea4800]/10 px-2 py-0.5 rounded-full">Global Partner</span>
            </div>

            <nav className="space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive('/') ? 'bg-[#2e3192]/10 text-[#2e3192]' : 'text-[#0a2540] hover:bg-slate-50'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                to="/solutions"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive('/solutions') ? 'bg-[#2e3192]/10 text-[#2e3192]' : 'text-[#0a2540] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#2e3192]" />
                  <span>Enterprise Solutions</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                to="/architecture"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive('/architecture') ? 'bg-[#2e3192]/10 text-[#2e3192]' : 'text-[#0a2540] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-[#ea4800]" />
                  <span>Architecture & Stack</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                to="/industries"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive('/industries') ? 'bg-[#2e3192]/10 text-[#2e3192]' : 'text-[#0a2540] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#2e3192]" />
                  <span>17+ Industries</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                to="/offices"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive('/offices') ? 'bg-[#2e3192]/10 text-[#2e3192]' : 'text-[#0a2540] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#ea4800]" />
                  <span>Global Nodes</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                to="/careers"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive('/careers') ? 'bg-[#2e3192]/10 text-[#2e3192]' : 'text-[#0a2540] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-[#2e3192]" />
                  <span>Careers & Academy</span>
                </div>
                <span className="text-xs font-bold text-[#ea4800] bg-[#ea4800]/10 px-2 py-0.5 rounded-full">Hiring</span>
              </Link>

              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive('/blog') ? 'bg-[#2e3192]/10 text-[#2e3192]' : 'text-[#0a2540] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-[#2e3192]" />
                  <span>Publications & Blog</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                to="/policies"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive('/policies') ? 'bg-[#2e3192]/10 text-[#2e3192]' : 'text-[#0a2540] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>HR Policies & POSH</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 rounded-full text-center font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-colors shadow-md shadow-orange-500/20 block active:scale-95"
            >
              Book Solution Consultation
            </Link>
            <div className="text-center">
              <a href="tel:+917799988139" className="text-xs font-semibold text-[#0a2540] hover:text-[#2e3192] transition-colors">
                Direct Sales: +91 7799988139
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
