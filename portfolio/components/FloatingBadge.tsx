import React from 'react';

type BadgeColor = 'terracotta' | 'sage' ;

type FloatingBadgeProps = {
  text: string;
  className?: string; // used to set top/bottom/left/right absolute positions
  color?: BadgeColor;
  delay?: string;
  icon?: string; // optional icon symbol like ✦
};

const colorConfig = {
  terracotta: {
    bg: 'var(--color-terracotta)',
    shadow: 'rgba(193,68,14,0.4)',
  },
  sage: {
    bg: 'var(--color-sage)',
    shadow: 'rgba(122,158,126,0.4)',
  },
};

export default function FloatingBadge({ 
  text, 
  className = "", 
  color = 'terracotta', 
  delay = '0s',
  icon = '✦'
}: FloatingBadgeProps) {
  const style = colorConfig[color];
  return (
    <div
      className={`px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[9px] md:text-[11px] font-black shadow-lg animate-float whitespace-nowrap ${className}`}
      style={{
        background: style.bg,
        color: 'white',
        animationDelay: delay,
        boxShadow: `0 8px 24px ${style.shadow}`,
      }}
    >
      {text} {icon}
    </div>
  );
}
