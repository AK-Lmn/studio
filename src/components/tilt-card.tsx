'use client';

import React, { type ReactNode, type HTMLAttributes } from 'react';

export interface TiltCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = '',
  style,
  onMouseEnter,
  onMouseLeave,
  ...props
}: TiltCardProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative bg-surface/90 border border-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(255,46,154,0.12)] ${className}`.trim()}
      style={{ ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
