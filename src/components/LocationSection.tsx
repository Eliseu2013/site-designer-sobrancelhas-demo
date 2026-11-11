import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { CONFIG_SITE, gerarLinkWhatsAppGeral } from '../config';

export const LocationSection: React.FC = () => {
  const wazeLink = `https://waze.com/ul?q=${encodeURIComponent(`${CONFIG_SITE.endereco}, ${CONFIG_SITE.cidade}`)}`;

  return (
    <section id="localizacao" className="py-20 md:py-28 border-b border-white/10 bg-[#0e0e0e] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-14 space-y-3"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-6 h-[1px] bg-[#c5a059]/40"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059]">
              Espaço & Atendimento
            </span>
            <span className="w-6 h-[1px] bg-[#c5a059]/40"></span>
          </div>

          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#f5f5f5] tracking-[0.15em]">
            Localização do Espaço
          </h2>

          <p className="text-xs text-[#8c8c8c] font-light leading-relaxed">
            Ambiente reservado, climatizado e planejado para oferecer uma experiência acolhedora e exclusiva com hora marcada.
          </p>
        </motion.div>

        {/* Quadro Central de Destaque da Localização */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="border border-[#c5a059]/35 bg-[#121212] rounded-[2px] p-6 sm:p-10 space-y-8"
        >
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            
            {/* Endereço em Destaque */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#c5a059]">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Endereço Principal</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#f5f5f5] tracking-wide">
                {CONFIG_SITE.endereco}
              </h3>
              <p className="text-sm text-[#a3a3a3] font-light tracking-wide">
                {CONFIG_SITE.cidade}
              </p>
            </div>

            {/* Ações de Rota Rápidas */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <a
                href={CONFIG_SITE.linkGoogleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-luxury inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.18em] border-[#c5a059] text-[#c5a059] whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>

              <a
                href={wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#d4d4d4] border border-white/15 hover:border-[#c5a059] hover:text-[#c5a059] transition-all rounded-[2px] whitespace-nowrap"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Waze</span>
              </a>
            </div>

          </div>

          {/* 3 Pilares do Espaço */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#8c8c8c] font-light">
            
            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <div className="flex items-center gap-1.5 text-[#e8d5b5] font-serif-luxury tracking-wider text-[11px] uppercase">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Hora Marcada</span>
              </div>
              <p className="leading-relaxed">
                Atendimento estritamente pontual e sem espera em ambiente privativo.
              </p>
            </div>

            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <div className="flex items-center gap-1.5 text-[#e8d5b5] font-serif-luxury tracking-wider text-[11px] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Ambiente Seguro</span>
              </div>
              <p className="leading-relaxed">
                Climatizado, silencioso e com padrão de higiene rigoroso.
              </p>
            </div>

            <div className="space-y-1.5 border-l border-white/10 pl-4">
              <div className="flex items-center gap-1.5 text-[#e8d5b5] font-serif-luxury tracking-wider text-[11px] uppercase">
                <Navigation className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Acesso Prático</span>
              </div>
              <p className="leading-relaxed">
                Fácil localização com opções de estacionamento no entorno.
              </p>
            </div>

          </div>

          {/* Chamada para Dúvidas de Trajeto */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
            <span>Precisa de pontos de referência ou ajuda com o trajeto?</span>
            <a
              href={gerarLinkWhatsAppGeral(`Olá ${CONFIG_SITE.nome}! Gostaria de tirar uma dúvida sobre como chegar na ${CONFIG_SITE.endereco}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#c5a059] hover:underline uppercase tracking-[0.15em] text-[11px]"
            >
              <span>Solicitar Orientação no WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
