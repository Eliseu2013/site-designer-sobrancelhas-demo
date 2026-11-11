import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONFIG_SITE, gerarLinkWhatsAppGeral } from '../config';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento direto" className="fixed bottom-6 right-6 z-40">
      <a
        href={gerarLinkWhatsAppGeral()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-[2px] bg-[#141414] border border-[#c5a059]/50 text-[#e8d5b5] hover:border-[#c5a059] hover:text-white transition-all text-xs tracking-wider uppercase font-light"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400" />
        <span className="hidden sm:inline text-[10px] tracking-[0.18em]">WhatsApp</span>
      </a>
    </aside>
  );
};
