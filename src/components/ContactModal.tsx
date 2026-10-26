import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    serviceInterest: 'SAP S/4HANA Migration & BTP',
    region: 'India (Hyderabad HQ)',
    notes: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200/80 rounded-3xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#2e3192] text-white">
              <Sparkles className="w-5 h-5 text-[#ea4800]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0a2540] tracking-tight">
                Schedule Architecture Consultation
              </h2>
              <p className="text-xs text-slate-500">
                Direct advisory with Clyptus Senior Practice Directors
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#0a2540] transition-colors"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#00d924] flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a2540] tracking-tight">
                Consultation Request Received
              </h3>
              <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0a2540]">{formData.fullName}</strong>. A dedicated Clyptus Enterprise Architect from our <strong className="text-[#0a2540]">{formData.region}</strong> office will contact you within 4 business hours.
              </p>
              
              <div className="p-4 rounded-2xl bg-[#f6f9fc] border border-slate-200/80 max-w-sm mx-auto text-xs text-slate-600 space-y-2">
                <div>For immediate enterprise support:</div>
                <div className="font-mono-code font-bold text-[#0a2540] text-sm">
                  <a href="tel:+917799988139" className="text-[#ea4800] hover:underline">
                    +91 7799988139
                  </a>
                </div>
                <div>Sales@clyptus.com</div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-[#0a2540] transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code font-semibold text-[#0a2540]">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a2540] placeholder-slate-400 focus:outline-none focus:border-[#2e3192]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code font-semibold text-[#0a2540]">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@enterprise.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a2540] placeholder-slate-400 focus:outline-none focus:border-[#2e3192]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code font-semibold text-[#0a2540]">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 / +971 / +1..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a2540] placeholder-slate-400 focus:outline-none focus:border-[#2e3192]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code font-semibold text-[#0a2540]">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enterprise Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a2540] placeholder-slate-400 focus:outline-none focus:border-[#2e3192]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code font-semibold text-[#0a2540]">Primary Practice Area</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a2540] focus:outline-none focus:border-[#2e3192]"
                  >
                    <option value="SAP S/4HANA Migration & BTP">SAP S/4HANA Migration & BTP</option>
                    <option value="SAP BRIM High-Volume Billing">SAP BRIM High-Volume Billing</option>
                    <option value="Oracle ERP Cloud Modernization">Oracle ERP Cloud Modernization</option>
                    <option value="AI Operations & Hyper-Automation">AI Operations & Hyper-Automation</option>
                    <option value="24/7 Managed Cloud AMS">24/7 Managed Cloud AMS</option>
                    <option value="Global Talent Staffing Solutions">Global Talent Staffing Solutions</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code font-semibold text-[#0a2540]">Preferred Region</label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a2540] focus:outline-none focus:border-[#2e3192]"
                  >
                    <option value="India (Hyderabad HQ)">India (Hyderabad HQ)</option>
                    <option value="UAE (Dubai DIFC)">UAE (Dubai DIFC)</option>
                    <option value="USA (California)">USA (California)</option>
                    <option value="Other Regional Center">Other Regional Center</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono-code font-semibold text-[#0a2540]">Project Overview / Timeline</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current landscape (e.g. SAP ECC 6.0 upgrade timeline, Oracle Cloud migration goals, SLA requirements)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0a2540] placeholder-slate-400 focus:outline-none focus:border-[#2e3192]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] shadow-md shadow-orange-500/20 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Architecture Consultation Request</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400">
                Protected by enterprise NDA standards. We will never share your corporate data.
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
