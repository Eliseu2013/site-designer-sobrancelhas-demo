import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONFIG_SITE, gerarLinkWhatsAppGeral } from '../config';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0c0c0c]/95 backdrop-blur-sm border-b border-white/10 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logotipo e Identidade Editorial */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-[2px] border border-[#c5a059]/60 flex items-center justify-center text-xs font-serif-luxury text-[#e8d5b5] tracking-widest group-hover:border-[#c5a059] transition-colors">
            {CONFIG_SITE.monograma}
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-sm tracking-[0.22em] text-[#f0f0f0] font-semibold">
              {CONFIG_SITE.nome.toUpperCase()}
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#c5a059] font-normal">
              {CONFIG_SITE.subtitulo}
            </span>
          </div>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-[#a3a3a3]">
          <a href="#servicos" className="hover:text-[#c5a059] transition-colors">
            Menu de Serviços
          </a>
          <a href="#sobre" className="hover:text-[#c5a059] transition-colors">
            Sobre
          </a>
          <a href="#localizacao" className="hover:text-[#c5a059] transition-colors">
            Localização
          </a>
        </nav>

        {/* Botão de Agendamento Ghost Minimalista */}
        <div className="hidden sm:block">
          <a
            href={gerarLinkWhatsAppGeral()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-luxury inline-block px-5 py-2.5 text-[11px] uppercase tracking-[0.2em]"
          >
            Agendar Horário
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#c5a059] hover:text-white"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101010] border-b border-white/10 px-6 py-6 space-y-4 text-xs uppercase tracking-[0.25em]">
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#d4d4d4] hover:text-[#c5a059]"
          >
            Menu de Serviços
          </a>
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#d4d4d4] hover:text-[#c5a059]"
          >
            Sobre
          </a>
          <a
            href="#localizacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#d4d4d4] hover:text-[#c5a059]"
          >
            Localização
          </a>
          <div className="pt-2">
            <a
              href={gerarLinkWhatsAppGeral()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-luxury block text-center py-2.5 text-[#c5a059]"
            >
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
