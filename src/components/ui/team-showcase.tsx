import { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';
import { cn } from '../../lib/utils';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Chadrack',
    role: 'director of photography',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    social: { twitter: '#', linkedin: '#', behance: '#' },
  },
  {
    id: '2',
    name: 'Mak VieSAinte',
    role: 'FOUNDER',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '3',
    name: 'Osiris Balonga',
    role: 'LEAD FRONT-END',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '4',
    name: 'Jacques',
    role: 'PRODUCT OWNER',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    social: { linkedin: '#' },
  },
  {
    id: '5',
    name: 'Riche Makso',
    role: 'CTO - PRODUCT DESIGNER',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '6',
    name: 'Jemima',
    role: 'MAKE-UP ARTISTE',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    social: { instagram: '#' },
  },
];

export interface TeamShowcaseProps {
  members?: TeamMember[];
  className?: string;
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS, className }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  // Toggle selection on touch or click
  const handleSelect = (id: string) => {
    setHoveredId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-center md:items-start justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-2 sm:py-6 px-1 sm:px-4 md:px-6 font-sans',
        className,
      )}
    >
      {/* ── Left: photo grid ── */}
      <div className="flex justify-center items-start gap-2 sm:gap-2.5 md:gap-3 flex-shrink-0 w-full sm:w-auto max-w-full overflow-hidden pb-1 md:pb-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[78px] min-[360px]:w-[84px] h-[86px] min-[360px]:h-[92px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 mt-[24px] min-[360px]:mt-[32px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[86px] min-[360px]:w-[94px] h-[94px] min-[360px]:h-[102px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 mt-[12px] min-[360px]:mt-[16px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[80px] min-[360px]:w-[88px] h-[88px] min-[360px]:h-[96px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list ── */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-2 sm:gap-3 md:gap-4 pt-2 md:pt-2 flex-1 w-full max-w-md md:max-w-none">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
  onSelect,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Select ${member.name}`}
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-all duration-300 bg-slate-200 border border-slate-300/60 touch-manipulation relative',
        className,
        isActive ? 'ring-2 ring-[#2e3192] ring-offset-2 scale-[1.03] shadow-md z-10' : '',
        isDimmed ? 'opacity-55' : 'opacity-100',
      )}
      onClick={() => onSelect(member.id)}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(member.id);
        }
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-[filter,transform] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.78)',
        }}
        onError={(e) => {
          // Fallback to stock unsplash portrait if local or remote fails
          const target = e.currentTarget;
          if (!target.src.includes('images.unsplash.com')) {
            target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
          }
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
  onSelect,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.social?.twitter ?? member.social?.linkedin ?? member.social?.instagram ?? member.social?.behance;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details for ${member.name}`}
      className={cn(
        'cursor-pointer transition-all duration-200 rounded-xl p-2 sm:p-2.5 -mx-1 sm:-mx-2 touch-manipulation',
        isActive ? 'bg-white shadow-sm border border-slate-200/80 ring-1 ring-slate-200/50' : 'hover:bg-white/50',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onClick={() => onSelect(member.id)}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(member.id);
        }
      }}
    >
      {/* Name + social */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
        <span
          className={cn(
            'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-[#ea4800] w-5' : 'bg-slate-300',
          )}
        />
        <span
          className={cn(
            'text-sm sm:text-base md:text-[17px] font-semibold leading-tight tracking-tight transition-colors duration-200',
            isActive ? 'text-[#0a2540] font-bold' : 'text-[#334155]',
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-auto sm:ml-1 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0 pointer-events-auto'
                : 'opacity-0 -translate-x-1 pointer-events-none hidden sm:flex',
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-slate-500 hover:text-[#0a2540] hover:bg-slate-100 transition-all duration-150 hover:scale-110 active:scale-95"
                title="X / Twitter"
              >
                <FaTwitter size={11} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-slate-500 hover:text-[#0a2540] hover:bg-slate-100 transition-all duration-150 hover:scale-110 active:scale-95"
                title="LinkedIn"
              >
                <FaLinkedinIn size={11} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-slate-500 hover:text-[#0a2540] hover:bg-slate-100 transition-all duration-150 hover:scale-110 active:scale-95"
                title="Instagram"
              >
                <FaInstagram size={11} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-slate-500 hover:text-[#0a2540] hover:bg-slate-100 transition-all duration-150 hover:scale-110 active:scale-95"
                title="Behance"
              >
                <FaBehance size={11} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1 pl-[24px] sm:pl-[27px] text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider sm:tracking-[0.16em] text-[#64748b] leading-tight">
        {member.role}
      </p>
    </div>
  );
}
