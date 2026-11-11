/* =========================================================
   ⚙️ CONFIGURAÇÕES DO SITE (Altere apenas os textos entre aspas)
   ========================================================= */

export const CONFIG_SITE = {
  nome: "Studio Olhar (Demo)",
  subtitulo: "Designer de Sobrancelhas",
  monograma: "SO",
  fraseImpacto: "REALCE SUA BELEZA, VALORIZE SEU OLHAR.",
  slogan: "SEU OLHAR, NOSSA ARTE.",
  whatsapp: "21900000000",
  whatsappFormatado: "(21) 90000-0000",
  endereco: "Rua Exemplo, 123",
  cidade: "Rio de Janeiro - RJ",
  instagram: "@studio.olhar.demo",
  instagramUrl: "https://instagram.com",
  linkGoogleMaps: "https://maps.google.com/?q=Rio+de+Janeiro",
  horarioAtendimento: "Terça a Sábado: 09h às 19h"
};

export interface ServicoItem {
  nome: string;
  preco: string;
  descricao?: string;
  tipo?: "HENNA" | "PINÇA" | "NAVALHA" | "NA CERA" | "OUTRO";
}

export const LISTA_SERVICOS: ServicoItem[] = [
  {
    nome: "Design com Henna",
    preco: "R$ 30,00",
    descricao: "Mapeamento facial e pigmentação nobre para preenchimento de falhas e realce marcante.",
    tipo: "HENNA"
  },
  {
    nome: "Design na Pinça",
    preco: "R$ 20,00",
    descricao: "Alinhamento e remoção precisa dos fios pela raiz com esterilização cirúrgica.",
    tipo: "PINÇA"
  },
  {
    nome: "Depilação com Navalha",
    preco: "R$ 20,00",
    descricao: "Delineamento ágil e indolor do contorno das sobrancelhas com lâmina descartável.",
    tipo: "NAVALHA"
  },
  {
    nome: "Design na Cera",
    preco: "R$ 45,00",
    descricao: "Design e modelagem completa das sobrancelhas com cera facial hipoalergênica, garantindo contorno impecável, pele lisa e efeito duradouro.",
    tipo: "NA CERA"
  }
];

/**
 * Funções utilitárias seguras para geração de links diretos do WhatsApp
 */
export function gerarLinkWhatsAppServico(servico: ServicoItem): string {
  const numeroLimpo = CONFIG_SITE.whatsapp.replace(/\D/g, '');
  const mensagem = `Olá ${CONFIG_SITE.nome}! Gostaria de agendar o serviço "${servico.nome}" (${servico.preco}). Quais os próximos horários disponíveis?`;
  return `https://wa.me/55${numeroLimpo}?text=${encodeURIComponent(mensagem)}`;
}

export function gerarLinkWhatsAppGeral(mensagemCustom?: string): string {
  const numeroLimpo = CONFIG_SITE.whatsapp.replace(/\D/g, '');
  const mensagem = mensagemCustom || `Olá ${CONFIG_SITE.nome}! Gostaria de agendar um horário para sobrancelhas.`;
  return `https://wa.me/55${numeroLimpo}?text=${encodeURIComponent(mensagem)}`;
}
