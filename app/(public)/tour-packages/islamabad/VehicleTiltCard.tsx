'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface VehicleTiltCardProps {
  src: string;
  alt: string;
  label?: string;
  sublabel?: string;
  priority?: boolean;
  className?: string;
  bgColor?: 'white' | 'black';
}

export default function VehicleTiltCard({
  src,
  alt,
  label,
  sublabel,
  priority = false,
  className = '',
  bgColor = 'white',
}: VehicleTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max tilt in degrees
    const maxTilt = 10;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: 'transform 0.08s ease-out',
    });

    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }

  function handleMouseLeave() {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s ease-out',
    });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', ...style }}
      className={`group relative rounded-3xl overflow-hidden shadow-xl will-change-transform ${
        bgColor === 'black' ? 'bg-black' : 'bg-white'
      } ${className}`}
    >
      {/* Moving light glow following cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(252,211,77,0.35), transparent 55%)`,
        }}
      />

      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Bottom gradient for text legibility */}
        {(label || sublabel) && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 pt-10">
            {label && <div className="text-white font-bold text-lg leading-tight">{label}</div>}
            {sublabel && <div className="text-white/80 text-xs">{sublabel}</div>}
          </div>
        )}
      </div>

      {/* Depth shadow beneath card */}
      <div
        className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl opacity-0 md:group-hover:opacity-60 blur-xl transition-opacity duration-300"
        style={{ background: 'radial-gradient(closest-side, rgba(4,120,87,0.35), transparent)' }}
      />
    </div>
  );
}