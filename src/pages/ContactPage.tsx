import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'SAP S/4HANA & Clean Core',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#fafbfc]">
      
      {/* 1. Stripe Ambient Mesh Header */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-200/80 stripe-mesh-light">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#ea4800]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs font-bold uppercase tracking-[0.08em] text-[#2e3192]">
            <PhoneCall className="w-3.5 h-3.5 text-[#ea4800]" />
            Direct Enterprise Engagement
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-light tracking-[-0.03em] text-[#0a2540] leading-[1.12]">
                Schedule an architecture{' '}
                <span className="font-extrabold text-[#0a2540] block sm:inline">
                  discovery session
                </span>
              </h1>
              <p className="text-base sm:text-xl text-[#425466] max-w-3xl leading-relaxed">
                Connect directly with certified Clyptus Practice Directors in India, the UAE, or North America. 
                We respond within 4 business hours with an initial architectural scoping proposal.
              </p>
            </div>

            {/* Response SLA Badge */}
            <div className="lg:col-span-4">
              <div className="stripe-bezel-outer bg-white/70 backdrop-blur-md">
                <div className="stripe-bezel-inner p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0a2540] uppercase tracking-wider">Scoping SLA</span>
                    <span className="text-[11px] font-mono-code font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Guaranteed
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-medium">Response Window</div>
                      <div className="text-xl font-bold font-mono-code text-[#ea4800] mt-0.5">&lt; 4 Hours</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-medium">Mutual NDA</div>
                      <div className="text-xl font-bold font-mono-code text-emerald-600 mt-0.5">Pre-Signed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Regional Lines (Double-Bezel Bento Cards) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2e3192]">
                Immediate Assistance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540]">
                Direct dial regional lines
              </h2>
              <p className="text-sm text-[#425466] leading-relaxed">
                For urgent RFP requirements, project consultations, or P1 operational support escalations.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* India HQ */}
              <div className="stripe-bezel-outer p-1.5 bg-gradient-to-b from-white to-slate-50 shadow-sm hover:shadow-lg transition-all">
                <div className="stripe-bezel-inner p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇮🇳</span>
                      <h4 className="text-base font-bold text-[#0a2540]">India Headquarters & Delivery</h4>
                    </div>
                    <span className="text-[11px] font-mono-code px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                      IST (UTC+5:30)
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>Level 4, Gumidelli Towers, Begumpet, Hyderabad, Telangana 500016</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-xs font-mono-code">
                    <a href="tel:+917799988139" className="text-[#ea4800] font-bold hover:underline flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5" />
                      +91 7799988139 (Direct / WhatsApp)
                    </a>
                    <a href="mailto:Sales@clyptus.com" className="text-slate-600 hover:text-[#2e3192] flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5" />
                      Sales@clyptus.com
                    </a>
                  </div>
                </div>
              </div>

              {/* UAE Hub */}
              <div className="stripe-bezel-outer p-1.5 bg-gradient-to-b from-white to-slate-50 shadow-sm hover:shadow-lg transition-all">
                <div className="stripe-bezel-inner p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇦🇪</span>
                      <h4 className="text-base font-bold text-[#0a2540]">Dubai Middle East Hub</h4>
                    </div>
                    <span className="text-[11px] font-mono-code px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                      GST (UTC+4:00)
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>In5 Tech, Dubai Internet City / DIFC, Dubai, UAE</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-xs font-mono-code">
                    <a href="tel:+971523503297" className="text-[#ea4800] font-bold hover:underline flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5" />
                      +971 52 350 3297 (MENA Practice)
                    </a>
                    <a href="mailto:hr.uae@clyptus.com" className="text-slate-600 hover:text-[#2e3192] flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5" />
                      hr.uae@clyptus.com
                    </a>
                  </div>
                </div>
              </div>

              {/* USA Hub */}
              <div className="stripe-bezel-outer p-1.5 bg-gradient-to-b from-white to-slate-50 shadow-sm hover:shadow-lg transition-all">
                <div className="stripe-bezel-inner p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇺🇸</span>
                      <h4 className="text-base font-bold text-[#0a2540]">North America Advisory</h4>
                    </div>
                    <span className="text-[11px] font-mono-code px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-semibold">
                      MST (UTC-7:00)
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>North Scottsdale Corporate Centre, Phoenix Metro, Arizona, USA</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-xs font-mono-code">
                    <a href="tel:+14804276373" className="text-[#ea4800] font-bold hover:underline flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5" />
                      +1 (480) 427-6373 (US Toll-Free)
                    </a>
                    <a href="mailto:hr.usa@clyptus.com" className="text-slate-600 hover:text-[#2e3192] flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5" />
                      hr.usa@clyptus.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* SLA Guarantee Note */}
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <span className="font-bold text-[#0a2540]">Confidentiality Guarantee:</span> All architecture blueprints, system landscapes, and RFP discussions are protected by mutual non-disclosure agreements (NDAs) prior to discovery calls.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form (Stripe Glassmorphic Card) */}
          <div className="lg:col-span-7">
            <div className="stripe-bezel-outer p-2 sm:p-3 bg-gradient-to-b from-white to-slate-50 shadow-xl">
              <div className="stripe-bezel-inner p-7 sm:p-10 bg-white space-y-6">
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono-code font-bold uppercase tracking-wider text-[#ea4800]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Interactive Architecture Booking
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540]">
                    Tell us about your project
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Fill in your details below and a Practice Director will prepare a customized briefing.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900">Consultation Request Received</h4>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold">{formData.name}</span>. We have routed your request to the Lead Architect for <span className="font-bold">{formData.serviceInterest}</span>. We will contact you at <span className="font-bold">{formData.email}</span> within 4 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors shadow-xs"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0a2540]">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Varma"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2e3192]/20 focus:border-[#2e3192] text-slate-800 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0a2540]">Corporate Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. ramesh@enterprise.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2e3192]/20 focus:border-[#2e3192] text-slate-800 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0a2540]">Phone / Mobile *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2e3192]/20 focus:border-[#2e3192] text-slate-800 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#0a2540]">Company / Enterprise *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Global Logistics Ltd"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2e3192]/20 focus:border-[#2e3192] text-slate-800 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0a2540]">Primary Area of Interest *</label>
                      <select
                        value={formData.serviceInterest}
                        onChange={e => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2e3192]/20 focus:border-[#2e3192] text-slate-800 transition-all"
                      >
                        <option>SAP S/4HANA & Clean Core</option>
                        <option>SAP BRIM & High-Throughput Billing</option>
                        <option>Oracle Cloud ERP Modernization</option>
                        <option>Autonomous AI & Telemetry Agents</option>
                        <option>24/7 Follow-the-Sun AMS Support</option>
                        <option>Junior Academy & Lateral Hiring</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0a2540]">Project Scope / Requirements</label>
                      <textarea
                        rows={4}
                        placeholder="Briefly describe your existing ERP version, target timeline, or operational challenges..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2e3192]/20 focus:border-[#2e3192] text-slate-800 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full text-sm font-bold text-white bg-[#ea4800] hover:bg-[#d03f00] transition-all shadow-lg shadow-orange-500/25 active:scale-98 flex items-center justify-center gap-2 group"
                    >
                      <span>Submit Architecture Request</span>
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    <div className="text-[11px] text-center text-slate-400">
                      By submitting, you agree to Clyptus Data Privacy & Confidentiality Terms.
                    </div>

                  </form>
                )}

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
