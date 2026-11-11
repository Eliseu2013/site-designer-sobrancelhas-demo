import React from 'react';
import { motion } from 'motion/react';
import { CONFIG_SITE, gerarLinkWhatsAppGeral } from '../config';

export const Hero: React.FC = () => {
  const pilares = ["HENNA", "PINÇA", "NAVALHA", "NA CERA"];

  return (
    <section className="py-20 md:py-28 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Tagline / Frase Superior */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-[#c5a059]/40"></span>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#c5a059] font-normal">
              {CONFIG_SITE.fraseImpacto}
            </p>
            <span className="w-8 h-[1px] bg-[#c5a059]/40"></span>
          </motion.div>

          {/* Título Principal em Cinzel de Alta Costura */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#f5f5f5] leading-[1.25] tracking-[0.1em]"
          >
            Harmonia e precisão para valorizar a sua expressão natural
          </motion.h1>

          {/* Subtítulo Discreto */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm text-[#a3a3a3] max-w-xl mx-auto leading-relaxed font-light"
          >
            Atendimento exclusivo no Rio de Janeiro com técnicas refinadas de visagismo, esterilização rigorosa e materiais de alto padrão.
          </motion.p>

          {/* Faixa Editorial dos 4 Procedimentos do Flyer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="py-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[2px] p-px">
              {pilares.map((pilar, index) => (
                <div
                  key={index}
                  className="bg-[#0c0c0c] py-3.5 px-2 text-center"
                >
                  <span className="font-serif-luxury text-[11px] sm:text-xs tracking-[0.25em] text-[#e8d5b5]">
                    {pilar}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Slogan com moldura sutil em 1px */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block p-4 sm:p-5 border border-[#c5a059]/40 rounded-[2px] bg-[#121212]"
          >
            <p className="font-serif-luxury text-xs sm:text-sm tracking-[0.3em] text-[#e8d5b5] uppercase">
              {CONFIG_SITE.slogan}
            </p>
          </motion.div>

          {/* Ações Minimalistas */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a
              href={gerarLinkWhatsAppGeral()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-luxury w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-[#c5a059] border-[#c5a059]"
            >
              Agendar no WhatsApp
            </a>
            
            <a
              href="#servicos"
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors border border-transparent"
            >
              Ver Menu de Serviços ↓
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
