import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TeamShowcase, { type TeamMember } from './ui/team-showcase';

const CLYPTUS_LEADERS: TeamMember[] = [
  {
    id: '1',
    name: 'Vamsi Krishna',
    role: 'Founder & Managing Director',
    image: '/images/vamsi-krishna.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/arevamsikrishna/',
      twitter: '#',
    },
  },
  {
    id: '2',
    name: 'Venkat',
    role: 'Senior Practice Director (SAP Clean Core)',
    image: '/images/venkat.jpeg',
    social: {
      linkedin: '#',
    },
  },
  {
    id: '3',
    name: 'Sridhar Pinnapureddy',
    role: 'Strategic Advisory Board (Tier-4 Cloud)',
    image: '/images/sridhar-pinnapureddy.jpeg',
    social: {
      linkedin: '#',
    },
  },
  {
    id: '4',
    name: 'Mohammad',
    role: 'Head of SAP CoE (BRIM & Central Finance)',
    image: '/images/mohammad.jpeg',
    social: {
      linkedin: '#',
    },
  },
  {
    id: '5',
    name: 'Bala',
    role: 'Enterprise Integration Director (BTP & Event Mesh)',
    image: '/images/bala.jpeg',
    social: {
      linkedin: '#',
    },
  },
  {
    id: '6',
    name: 'Mahima Jaiswal',
    role: 'Practice Delivery Lead (Global Cloud Ops)',
    image: '/images/mahima.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/mahima-jaiswal-aa8a99279',
    },
  },
];

export const LeadershipSection: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 bg-white border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-14 gap-4">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[#2e3192]">
              <Award className="w-3.5 h-3.5" />
              Practice Leadership & Governance
            </div>

            <h2 className="text-2xl sm:text-4xl font-light tracking-[-0.03em] text-[#0a2540] leading-tight">
              Guided by veterans of{' '}
              <span className="font-extrabold text-[#0a2540]">
                enterprise transformation
              </span>
            </h2>

            <p className="text-xs sm:text-base text-[#334155]">
              Every client project is personally guided by certified Practice Directors with deep roots in global SAP, Oracle, and cloud infrastructure architectures.
            </p>
          </div>

          <Link
            to="/careers"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#2e3192] hover:text-[#ea4800] transition-colors self-start md:self-auto"
          >
            <span>Meet Our Delivery Teams</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Team Showcase Container with guaranteed boundary containment */}
        <div className="bg-[#f6f9fc]/90 rounded-2xl sm:rounded-3xl p-3 sm:p-8 md:p-12 border border-slate-200/80 stripe-card-shadow overflow-hidden w-full">
          <TeamShowcase members={CLYPTUS_LEADERS} />
        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;
