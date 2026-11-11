import React from 'react';
import { motion } from 'motion/react';
import { CONFIG_SITE, LISTA_SERVICOS, gerarLinkWhatsAppServico, gerarLinkWhatsAppGeral } from '../config';

export const ServicesList: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 border-b border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-16 space-y-3"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-6 h-[1px] bg-[#c5a059]/40"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059]">
              Catálogo de Procedimentos
            </span>
            <span className="w-6 h-[1px] bg-[#c5a059]/40"></span>
          </div>
          
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#f5f5f5] tracking-[0.15em]">
            Menu de Serviços & Valores
          </h2>
          
          <p className="text-xs text-[#8c8c8c] font-light leading-relaxed">
            Selecione o procedimento desejado para abrir o WhatsApp diretamente com a mensagem de agendamento preenchida.
          </p>
        </motion.div>

        {/* Lista Editorial Estilo Menu 5 Estrelas (Sem Cards Fechados) */}
        <div className="space-y-10">
          {LISTA_SERVICOS.map((servico, index) => {
            const whatsappLink = gerarLinkWhatsAppServico(servico);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group pt-2 pb-6 border-b border-white/10 transition-colors"
              >
                {/* Linha Superior: Nome do Serviço + Linha Pontilhada + Preço */}
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif-luxury text-base sm:text-lg font-medium text-[#f0f0f0] group-hover:text-[#e8d5b5] transition-colors tracking-wide">
                    {servico.nome}
                  </h3>

                  {/* Linha pontilhada editorial ligando título ao preço */}
                  <span className="menu-leader hidden sm:block"></span>

                  <span className="font-serif-luxury text-base sm:text-lg font-semibold text-[#e8d5b5] whitespace-nowrap">
                    {servico.preco}
                  </span>
                </div>

                {/* Linha Inferior: Descrição Refinada + Link Minimalista de Solicitação */}
                <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {servico.descricao && (
                    <p className="text-xs text-[#8c8c8c] font-light max-w-lg leading-relaxed">
                      {servico.descricao}
                    </p>
                  )}

                  {/* Link / Botão Ghost de Agendamento */}
                  <div className="pt-1 sm:pt-0">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[11px] uppercase tracking-[0.18em] text-[#a3a3a3] border-b border-[#a3a3a3]/30 pb-0.5 hover:text-[#c5a059] hover:border-[#c5a059] transition-all"
                    >
                      Solicitar Horário →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nota Rodapé do Menu */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 p-6 border border-white/10 rounded-[2px] bg-[#101010] text-center space-y-2"
        >
          <p className="text-xs text-[#d4d4d4] font-light">
            Deseja uma avaliação prévia sobre qual procedimento melhor se adapta aos traços do seu rosto?
          </p>
          <a
            href={gerarLinkWhatsAppGeral("Olá! Gostaria de tirar uma dúvida sobre qual procedimento fica melhor no meu formato de rosto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs uppercase tracking-[0.2em] text-[#c5a059] hover:underline pt-1"
          >
            Falar Diretamente com o Studio no WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};
