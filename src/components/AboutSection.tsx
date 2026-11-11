import React from 'react';
import { motion } from 'motion/react';
import { CONFIG_SITE } from '../config';

export const AboutSection: React.FC = () => {
  const compromissos = [
    {
      titulo: "Visagismo e Anatomia",
      texto: "Estudo minucioso das proporções do seu rosto para definir o desenho ideal sem perder a naturalidade."
    },
    {
      titulo: "Biossegurança Hospitalar",
      texto: "Materiais 100% esterilizados, descartáveis e de uso individual para sua total proteção e tranquilidade."
    },
    {
      titulo: "Insumos Nobres",
      texto: "Pigmentos e hennas de alta fixação, dermatologicamente testados e com acabamento elegante."
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-24 border-b border-white/10 bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="space-y-12">
          
          {/* Título da Seção */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-3"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="w-6 h-[1px] bg-[#c5a059]/40"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059]">
                Cuidado & Arte
              </span>
              <span className="w-6 h-[1px] bg-[#c5a059]/40"></span>
            </div>
            
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#f5f5f5] tracking-[0.12em]">
              Sobre o Atendimento
            </h2>
          </motion.div>

          {/* Grid de 3 Compromissos em Layout Editorial Horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {compromissos.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2 border-l border-white/10 pl-5"
              >
                <h3 className="font-serif-luxury text-sm font-medium text-[#e8d5b5] tracking-wider">
                  {item.titulo}
                </h3>
                <p className="text-xs text-[#8c8c8c] font-light leading-relaxed">
                  {item.texto}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Frase Final */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-center pt-4"
          >
            <p className="font-serif-luxury text-xs tracking-[0.25em] text-[#a3a3a3] uppercase">
              {CONFIG_SITE.slogan}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
