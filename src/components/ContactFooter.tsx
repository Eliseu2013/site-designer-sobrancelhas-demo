import React from 'react';
import { motion } from 'motion/react';
import { CONFIG_SITE, gerarLinkWhatsAppGeral } from '../config';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contato" className="py-20 md:py-24 bg-[#090909] text-[#a3a3a3] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16"
      >
        
        {/* Bloco Central com Monograma SO e Frase */}
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-[2px] border border-[#c5a059]/60 flex items-center justify-center font-serif-luxury text-sm font-semibold text-[#e8d5b5] tracking-widest">
            {CONFIG_SITE.monograma}
          </div>

          <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#f5f5f5] tracking-[0.2em]">
            {CONFIG_SITE.nome.toUpperCase()}
          </h3>
          
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059]">
            {CONFIG_SITE.subtitulo}
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-[#737373] pt-1">
            {CONFIG_SITE.fraseImpacto}
          </p>
        </div>

        {/* Informações de Localização, Contato e Horários em 3 Colunas Minimalistas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6 border-t border-white/10 text-xs font-light">
          
          {/* Endereço */}
          <div className="space-y-2">
            <h4 className="font-serif-luxury text-xs text-[#e8d5b5] tracking-widest uppercase font-medium">
              Localização
            </h4>
            <p className="text-[#8c8c8c] leading-relaxed">
              {CONFIG_SITE.endereco}<br />
              {CONFIG_SITE.cidade}
            </p>
            {CONFIG_SITE.linkGoogleMaps && (
              <a
                href={CONFIG_SITE.linkGoogleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] text-[#c5a059] hover:underline pt-1"
              >
                Abrir no Google Maps →
              </a>
            )}
          </div>

          {/* Atendimento e WhatsApp */}
          <div className="space-y-2">
            <h4 className="font-serif-luxury text-xs text-[#e8d5b5] tracking-widest uppercase font-medium">
              Agendamentos
            </h4>
            <p className="text-[#8c8c8c] leading-relaxed">
              Atendimento exclusivo com hora marcada.
            </p>
            <div className="pt-1 space-y-1">
              <a
                href={gerarLinkWhatsAppGeral()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#e5e5e5] hover:text-[#c5a059] transition-colors"
              >
                WhatsApp: {CONFIG_SITE.whatsappFormatado}
              </a>
              <a
                href={CONFIG_SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#8c8c8c] hover:text-[#c5a059] transition-colors"
              >
                Instagram: {CONFIG_SITE.instagram}
              </a>
            </div>
          </div>

          {/* Horários */}
          <div className="space-y-2">
            <h4 className="font-serif-luxury text-xs text-[#e8d5b5] tracking-widest uppercase font-medium">
              Horários
            </h4>
            <p className="text-[#8c8c8c] leading-relaxed">
              {CONFIG_SITE.horarioAtendimento}
            </p>
            <p className="text-[11px] text-[#525252] pt-1">
              Consulte disponibilidades para datas especiais.
            </p>
          </div>

        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#525252]">
          <p>© {new Date().getFullYear()} {CONFIG_SITE.nome}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#servicos" className="hover:text-[#a3a3a3] transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-[#a3a3a3] transition-colors">Sobre</a>
            <a href="#localizacao" className="hover:text-[#a3a3a3] transition-colors">Localização</a>
            <a href="#contato" className="hover:text-[#a3a3a3] transition-colors">Contato</a>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};
