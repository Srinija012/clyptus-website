import React, { useEffect, useRef, useState, useMemo } from 'react';
import rawDots from '../data/globeLandDots';
import { MapPin, Building2, Globe2 } from 'lucide-react';

export interface BranchLocation {
  id: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
  coordsFormatted: string;
  locationType: string;
  address: string;
  flag: string;
}

export const CLYPTUS_BRANCHES: BranchLocation[] = [
  {
    id: 'phoenix',
    city: 'Phoenix / Scottsdale, USA',
    country: 'USA',
    lat: 33.6405,
    lon: -111.8906,
    coordsFormatted: '33.6405° N, 111.8906° W',
    locationType: 'North America Practice Hub',
    address: 'Corporate Centre, Phoenix Metro, Arizona, USA',
    flag: '🇺🇸'
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad, India',
    country: 'India',
    lat: 17.4435,
    lon: 78.4728,
    coordsFormatted: '17.4435° N, 78.4728° E',
    locationType: 'Global Headquarters & CoE',
    address: 'Level 4, Gumidelli Towers, Begumpet, Hyderabad 500016',
    flag: '🇮🇳'
  },
  {
    id: 'dubai',
    city: 'Dubai, UAE',
    country: 'UAE',
    lat: 25.0975,
    lon: 55.1565,
    coordsFormatted: '25.0975° N, 55.1565° E',
    locationType: 'Middle East Regional Hub',
    address: 'In5 Tech, Dubai Internet City / DIFC, Dubai, UAE',
    flag: '🇦🇪'
  },
  {
    id: 'bengaluru',
    city: 'Bengaluru, India',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    coordsFormatted: '12.9716° N, 77.5946° E',
    locationType: 'Cloud & AI Innovation Lab',
    address: 'Whitefield IT Park, Bengaluru, Karnataka',
    flag: '🇮🇳'
  },
  {
    id: 'chennai',
    city: 'Chennai, India',
    country: 'India',
    lat: 12.9698,
    lon: 80.2459,
    coordsFormatted: '12.9698° N, 80.2459° E',
    locationType: 'SAP S/4HANA Delivery Center',
    address: 'OMR Cyber Corridor, Thoraipakkam, Chennai',
    flag: '🇮🇳'
  },
  {
    id: 'mumbai',
    city: 'Mumbai, India',
    country: 'India',
    lat: 19.0657,
    lon: 72.8687,
    coordsFormatted: '19.0657° N, 72.8687° E',
    locationType: 'BFSI & Central Finance Hub',
    address: 'Bandra Kurla Complex (BKC), Mumbai',
    flag: '🇮🇳'
  },
  {
    id: 'vijayawada',
    city: 'Vijayawada, India',
    country: 'India',
    lat: 16.5062,
    lon: 80.648,
    coordsFormatted: '16.5062° N, 80.6480° E',
    locationType: 'Engineering Academy & Tech Park',
    address: 'IT Tech Park SEZ, Mangalagiri / Vijayawada',
    flag: '🇮🇳'
  },
  {
    id: 'indore',
    city: 'Indore, India',
    country: 'India',
    lat: 22.7196,
    lon: 75.8577,
    coordsFormatted: '22.7196° N, 75.8577° E',
    locationType: 'Supply Chain Operations Hub',
    address: 'Super Corridor IT Hub, Indore, Madhya Pradesh',
    flag: '🇮🇳'
  }
];

export const StripeGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Active highlighted branch node for badge display
  const [activeBranchIndex, setActiveBranchIndex] = useState<number>(0);
  const [badgeScreenPos, setBadgeScreenPos] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: true
  });

  // Cycle branch badge every 5 seconds when idle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBranchIndex((prev) => (prev + 1) % CLYPTUS_BRANCHES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Pre-convert raw lat/lon land dots to 3D unit sphere points (x, y, z)
  const landPoints = useMemo(() => {
    return (rawDots as [number, number][]).map(([lat, lon]) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return {
        lat,
        lon,
        x: -Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta)
      };
    });
  }, []);

  // Interactive mouse / touch drag states
  const rotYRef = useRef<number>(-0.8); // Initial rotation focused on Phoenix & Atlantic/Asia
  const rotXRef = useRef<number>(0.38); // Signature Stripe ~22 deg tilt
  const targetRotYRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocityRef = useRef<{ vx: number; vy: number }>({ vx: 0.0016, vy: 0 });

  // Function to smoothly rotate globe towards selected branch
  const focusBranch = (index: number) => {
    setActiveBranchIndex(index);
    const branch = CLYPTUS_BRANCHES[index];
    const targetY = -((branch.lon + 90) * (Math.PI / 180));
    targetRotYRef.current = targetY;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let radius = 280;

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight || 560;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      radius = Math.min(width, height) * 0.44;
    };

    resize();
    window.addEventListener('resize', resize);

    // Helper: convert lat/lon to 3D Cartesian coordinates on sphere of radius R
    const latLonTo3D = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return {
        x: -r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.sin(theta)
      };
    };

    // Helper: 3D Euler rotation and projection to 2D canvas
    const project = (x0: number, y0: number, z0: number, rotX: number, rotY: number) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x0 * cosY + z0 * sinY;
      const z1 = -x0 * sinY + z0 * cosY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y0 * cosX - z1 * sinX;
      const z2 = y0 * sinX + z1 * cosX;

      const cameraDist = radius * 3.5;
      const scale = cameraDist / (cameraDist - z2);
      const cx = width / 2;
      const cy = height / 2;

      return {
        x: cx + x1 * scale,
        y: cy - y2 * scale,
        z: z2,
        scale,
        normX: x1 / radius,
        normY: y2 / radius
      };
    };

    let frame = 0;

    const render = () => {
      frame++;

      // If user selected a specific branch, smoothly interpolate towards its target angle
      if (targetRotYRef.current !== null && !isDraggingRef.current) {
        let diff = (targetRotYRef.current - rotYRef.current) % (Math.PI * 2);
        if (diff < -Math.PI) diff += Math.PI * 2;
        if (diff > Math.PI) diff -= Math.PI * 2;

        if (Math.abs(diff) > 0.01) {
          rotYRef.current += diff * 0.08;
        } else {
          targetRotYRef.current = null;
        }
      } else if (!isDraggingRef.current) {
        rotYRef.current += velocityRef.current.vx;
        rotXRef.current += velocityRef.current.vy;
        velocityRef.current.vx = velocityRef.current.vx * 0.96 + 0.0016 * 0.04;
        velocityRef.current.vy *= 0.95;
      }

      rotXRef.current = Math.max(-0.6, Math.min(0.65, rotXRef.current));

      const rotX = rotXRef.current;
      const rotY = rotYRef.current;

      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric halo behind the globe (Stripe style)
      const cx = width / 2;
      const cy = height / 2;
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.15);
      glowGrad.addColorStop(0, 'rgba(238, 242, 255, 0.7)');
      glowGrad.addColorStop(0.65, 'rgba(245, 243, 255, 0.35)');
      glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.12, 0, Math.PI * 2);
      ctx.fill();

      // Separate points into back hemisphere and front hemisphere for true 3D layering
      const backDots: { px: number; py: number; r: number; alpha: number; color: string }[] = [];
      const frontDots: { px: number; py: number; r: number; alpha: number; color: string }[] = [];

      for (let i = 0; i < landPoints.length; i++) {
        const pt = landPoints[i];
        const proj = project(pt.x * radius, pt.y * radius, pt.z * radius, rotX, rotY);

        // Color interpolation based on Clyptus brand gradient:
        // Lower-left (Clyptus Blue #2e3192) to Upper-Right (Clyptus Orange #ea4800)
        const t = Math.max(0, Math.min(1, (proj.normX + proj.normY + 1.2) / 2.4));

        const rVal = Math.round(46 + (234 - 46) * t);
        const gVal = Math.round(49 + (72 - 49) * t);
        const bVal = Math.round(146 + (0 - 146) * t);

        const colorStr = `${rVal}, ${gVal}, ${bVal}`;

        if (proj.z <= 0) {
          const depthRatio = Math.max(0, 1 + proj.z / radius);
          const alpha = 0.16 * depthRatio;
          if (alpha > 0.02) {
            backDots.push({
              px: proj.x,
              py: proj.y,
              r: 1.1 * proj.scale,
              alpha,
              color: colorStr
            });
          }
        } else {
          const normalZ = proj.z / radius;
          const alpha = 0.35 + 0.65 * normalZ;
          const dotRadius = (1.2 + 0.8 * normalZ) * proj.scale;
          frontDots.push({
            px: proj.x,
            py: proj.y,
            r: dotRadius,
            alpha,
            color: colorStr
          });
        }
      }

      // Render back hemisphere dots
      for (let i = 0; i < backDots.length; i++) {
        const d = backDots[i];
        ctx.fillStyle = `rgba(${d.color}, ${d.alpha})`;
        ctx.beginPath();
        ctx.arc(d.px, d.py, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render front hemisphere dots
      for (let i = 0; i < frontDots.length; i++) {
        const d = frontDots[i];
        ctx.fillStyle = `rgba(${d.color}, ${d.alpha})`;
        ctx.beginPath();
        ctx.arc(d.px, d.py, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // (Note: Flight arc lines removed per user request: "dont need to show that lines in it")

      // Render exact branch location beacons & pulsing ripple rings
      CLYPTUS_BRANCHES.forEach((branch, idx) => {
        const p = latLonTo3D(branch.lat, branch.lon, radius);
        const proj = project(p.x, p.y, p.z, rotX, rotY);

        if (proj.z > -radius * 0.15) {
          const isSelected = idx === activeBranchIndex;
          const pulseT = ((frame * 0.02 + idx * 0.25) % 1);

          ctx.save();

          // 1. Concentric Ripple Rings on Globe Surface (Matches Stripe Screenshot 01)
          const ringRadius1 = (6 + pulseT * 22) * proj.scale;
          const ringAlpha1 = Math.max(0, (1 - pulseT) * 0.75);
          ctx.strokeStyle = isSelected ? `rgba(255, 112, 98, ${ringAlpha1})` : `rgba(99, 91, 255, ${ringAlpha1 * 0.5})`;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, ringRadius1, 0, Math.PI * 2);
          ctx.stroke();

          // Secondary trailing ripple
          const pulseT2 = (pulseT + 0.5) % 1;
          const ringRadius2 = (6 + pulseT2 * 20) * proj.scale;
          const ringAlpha2 = Math.max(0, (1 - pulseT2) * 0.45);
          ctx.strokeStyle = isSelected ? `rgba(234, 72, 0, ${ringAlpha2})` : `rgba(46, 49, 146, ${ringAlpha2 * 0.3})`;
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, ringRadius2, 0, Math.PI * 2);
          ctx.stroke();

          // 2. Node Core Glowing Dot
          ctx.fillStyle = isSelected ? '#ea4800' : '#ffffff';
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, (isSelected ? 4.5 : 3.2) * proj.scale, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = isSelected ? '#ea4800' : '#2e3192';
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // Branch label on globe surface
          if (isSelected || proj.z > radius * 0.25) {
            ctx.font = '600 10px monospace';
            ctx.fillStyle = isSelected ? '#0a2540' : 'rgba(71, 85, 105, 0.85)';
            ctx.textAlign = 'left';
            ctx.fillText(branch.city.split(',')[0], proj.x + 8 * proj.scale, proj.y + 3);
          }

          ctx.restore();

          if (isSelected) {
            setBadgeScreenPos({
              x: proj.x,
              y: proj.y,
              visible: proj.z > -radius * 0.05
            });
          }
        } else if (idx === activeBranchIndex) {
          setBadgeScreenPos((prev) => ({ ...prev, visible: false }));
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [landPoints, activeBranchIndex]);

  // Pointer drag events
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    targetRotYRef.current = null;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { vx: 0, vy: 0 };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    const speed = 0.0045;
    rotYRef.current += dx * speed;
    rotXRef.current -= dy * speed;

    velocityRef.current = {
      vx: dx * speed,
      vy: -dy * speed
    };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if capture lost
    }
  };

  const activeBranch = CLYPTUS_BRANCHES[activeBranchIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] sm:h-[580px] lg:h-[640px] select-none flex items-center justify-center overflow-hidden"
    >
      {/* 3D WebGL / High-DPI Canvas (Clean, no lines, pure dot globe with pulsing branch rings) */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />

      {/* Floating Branch Telemetry Badge - EXACT STRIPE "01" DESIGN SHOWING LOCATION TYPE & COORDINATES */}
      <div
        className={`absolute pointer-events-none transition-all duration-300 ease-out z-20 ${
          badgeScreenPos.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          transform: `translate(${badgeScreenPos.x - 30}px, ${badgeScreenPos.y - 88}px)`,
          left: 0,
          top: 0
        }}
      >
        <div className="relative group pointer-events-auto">
          {/* Subtle micro connector tail pointing to the exact node ring */}
          <div className="absolute left-7 -bottom-1.5 w-3 h-3 bg-white rotate-45 border-r border-b border-slate-200/90 shadow-sm" />

          {/* Badge pill - Clean Stripe aesthetic */}
          <div className="relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_12px_36px_rgba(10,37,64,0.12),0_2px_8px_rgba(10,37,64,0.06)] min-w-[240px] max-w-[340px]">
            {/* Left: Clyptus Gradient Icon */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2e3192] to-[#ea4800] p-[1.5px] shadow-sm flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#0a2540] rounded-[6px] flex items-center justify-center">
                <Building2 className="w-4 h-4 text-orange-400" />
              </div>
            </div>

            {/* Content: Location Type & Exact Coordinates */}
            <div className="flex flex-col min-w-0">
              {/* Prominent Location Type */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-extrabold text-[#0a2540] tracking-tight truncate">
                  {activeBranch.locationType}
                </span>
                <span className="text-xs shrink-0">{activeBranch.flag}</span>
              </div>

              {/* Exact Coordinates & City */}
              <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#2e3192] font-semibold mt-0.5 truncate">
                <MapPin className="w-3 h-3 text-[#ea4800] shrink-0" />
                <span className="font-bold text-[#0a2540]">{activeBranch.coordsFormatted}</span>
                <span className="text-slate-400 font-normal">•</span>
                <span className="text-[#475569] font-medium truncate">{activeBranch.city}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Floating Badge info bar showing active branch coordinates and location type */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm text-[10px] sm:text-xs font-mono-code max-w-full">
          <Globe2 className="w-3.5 h-3.5 text-[#2e3192] shrink-0" />
          <span className="font-extrabold text-[#0a2540] truncate">{activeBranch.locationType}:</span>
          <span className="text-[#2e3192] font-bold shrink-0">{activeBranch.coordsFormatted}</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-sm text-[11px] font-mono-code text-[#475569]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>8 Branch Locations Active</span>
        </div>
      </div>

      {/* Branch Selector Carousel & Drag Tip at bottom */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row items-center justify-between gap-2 pointer-events-none">
        {/* Branch Buttons */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-sm pointer-events-auto overflow-x-auto max-w-full">
          {CLYPTUS_BRANCHES.map((branch, i) => (
            <button
              key={branch.id}
              onClick={() => focusBranch(i)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono-code transition-all whitespace-nowrap ${
                i === activeBranchIndex
                  ? 'bg-[#0a2540] text-white font-bold shadow-sm'
                  : 'text-[#475569] hover:text-[#0a2540] hover:bg-slate-100 font-medium'
              }`}
            >
              {branch.city.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Drag Hint */}
        <div className="text-[11px] font-mono-code font-medium text-[#475569] bg-white/75 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-200/60 hidden lg:block pointer-events-auto">
          ↔ Drag to rotate globe
        </div>
      </div>
    </div>
  );
};

export default StripeGlobe;
