import React from 'react';

// Ícone 1: Henna (Olho com sobrancelha desenhada em destaque)
export const HennaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Sobrancelha marcada arqueada */}
    <path d="M3 8.5C6 5.5 12 4.5 21 8.5" stroke="currentColor" strokeWidth="2.5" />
    {/* Olho com cílios */}
    <path d="M4 14C7.5 18 16.5 18 20 14" />
    <circle cx="12" cy="13.5" r="2.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" />
    {/* Cílios delicados */}
    <line x1="6" y1="16" x2="4.5" y2="18.5" />
    <line x1="12" y1="17.5" x2="12" y2="20.5" />
    <line x1="18" y1="16" x2="19.5" y2="18.5" />
  </svg>
);

// Ícone 2: Pinça (Duas hastes de pinça de precisão chanfrada)
export const PincaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Haste esquerda da pinça */}
    <path d="M8 21L14 3L16 4L11 21C10.5 22 8.5 22 8 21Z" />
    {/* Haste direita da pinça */}
    <path d="M9 14L17 7" strokeDasharray="1 1" />
  </svg>
);

// Ícone 3: Navalha / Navalhete clássico
export const NavalhaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Lâmina e suporte de navalha articulada */}
    <line x1="4" y1="20" x2="15" y2="9" strokeWidth="2.2" />
    <rect x="11" y="4" width="9" height="5" rx="1" transform="rotate(-45 11 4)" fill="currentColor" fillOpacity="0.2" />
    <circle cx="5" cy="19" r="1.5" fill="currentColor" />
  </svg>
);

// Ícone 4: Na Cera (Pote de cera quente com espátula)
export const CeraIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Pote/termo-cera */}
    <path d="M5 11C5 9.5 6 8 8 8H16C18 8 19 9.5 19 11L18 19C18 20.5 16.5 21.5 15 21.5H9C7.5 21.5 6 20.5 6 19L5 11Z" fill="currentColor" fillOpacity="0.15" />
    {/* Borda superior do pote */}
    <ellipse cx="12" cy="8" rx="7" ry="2.5" />
    {/* Espátula aplicadora mergulhada na cera com gota */}
    <line x1="16" y1="2" x2="11" y2="14" strokeWidth="2.2" />
    <circle cx="11" cy="14" r="1.5" fill="currentColor" />
  </svg>
);
