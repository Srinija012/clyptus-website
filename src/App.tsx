import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ContactModal } from './components/ContactModal';
import { HRPoliciesModal } from './components/HRPoliciesModal';

import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { OfficesPage } from './pages/OfficesPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { ContactPage } from './pages/ContactPage';

import { PhoneCall, Calendar } from 'lucide-react';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <div className="min-h-screen bg-white text-[#0a2540] flex flex-col font-sans selection:bg-[#ea4800] selection:text-white relative">
        
        {/* Top Floating Glass Navigation */}
        <Navbar />

        {/* Main Routed Content Area */}
        <main className="flex-1 w-full overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/solutions" element={<SolutionsPage onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/architecture" element={<ArchitecturePage onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/industries" element={<IndustriesPage onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/offices" element={<OfficesPage onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/careers" element={<CareersPage onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/blog" element={<BlogPage onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/policies" element={<PoliciesPage onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenContact={() => setIsContactOpen(true)} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Ergonomic Sticky Bottom Bar (Thumb-Zone Priority) */}
        <aside aria-label="Quick Actions" className="sm:hidden fixed bottom-3 left-3 right-3 z-30 p-2 rounded-2xl bg-[#0a2540]/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-between gap-2">
          <a
            href="tel:+917799988139"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 border border-white/10 text-xs font-semibold text-white active:scale-95 transition-transform"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#ea4800]" />
            <span>Call Sales</span>
          </a>

          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#ea4800] hover:bg-[#d03f00] text-xs font-bold text-white shadow-md active:scale-95 transition-transform"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Consultation</span>
          </Link>
        </aside>

        {/* Interactive Architecture Consultation Modal */}
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />

        {/* HR Governance & Policies Modal */}
        <HRPoliciesModal 
          isOpen={isPoliciesOpen} 
          onClose={() => setIsPoliciesOpen(false)} 
        />

      </div>
    </BrowserRouter>
  );
};

export default App;