export const clinica = {
  nome: "Essenza",
  sloganCurto: "Estética não invasiva",

  whatsapp: {
    numero: "5521987654321",
    mensagemPadrao:
      "Olá! Vim pelo site e gostaria de agendar uma avaliação.",
  },

  instagram: {
    usuario: "@essenza.estetica",
    url: "#",
  },

  localizacao: {
    regiao: "Região central",
    cidade: "São Paulo",
  },

  especialista: {
    nome: "Dra. Camila Antunes",
    formacao: "Biomedicina Estética",
    posGraduacao: "Harmonização Facial",
    anosExperiencia: 12,
  },
} as const;

export function getWhatsappLink(mensagem?: string): string {
  const texto = mensagem ?? clinica.whatsapp.mensagemPadrao;
  return `https://wa.me/${clinica.whatsapp.numero}?text=${encodeURIComponent(texto)}`;
}
