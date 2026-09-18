import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const depoimentos = [
  {
    quote:
      "Fiz preenchimento labial esperando um resultado discreto e foi exatamente isso. Ninguém notou que eu tinha feito algo, só que eu estava diferente.",
    name: "Marina S.",
    title: "Paciente desde 2023",
  },
  {
    quote:
      "O atendimento explica cada etapa antes de aplicar qualquer coisa. Fiquei tranquila do início ao fim da consulta.",
    name: "Camila R.",
    title: "Paciente desde 2024",
  },
  {
    quote:
      "Já tinha feito botox em outro lugar e o resultado aqui foi bem mais natural. A expressão do rosto continuou a mesma.",
    name: "Juliana P.",
    title: "Paciente desde 2022",
  },
  {
    quote:
      "O skinbooster mudou a textura da minha pele em poucas sessões. Recomendo para quem quer um efeito mais sutil.",
    name: "Fernanda T.",
    title: "Paciente desde 2024",
  },
];

export function Depoimentos() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-medium text-petroleo sm:text-4xl">
          Quem já passou por aqui
        </h2>
      </div>

      <div className="mt-12">
        <InfiniteMovingCards items={depoimentos} speed="slow" />
      </div>
    </section>
  );
}
