import { useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

const procedimentos = [
  {
    nome: "Toxina botulínica",
    descricao:
      "Reduz a contração muscular responsável pelas linhas de expressão em testa, glabela e região dos olhos. Efeito visível em até 15 dias, com duração média de 4 a 6 meses.",
  },
  {
    nome: "Preenchimento labial",
    descricao:
      "Ácido hialurônico aplicado para ajustar volume e contorno dos lábios, respeitando a proporção do rosto. Resultado imediato, com reabsorção gradual ao longo de 8 a 12 meses.",
  },
  {
    nome: "Skinbooster",
    descricao:
      "Microinjeções de ácido hialurônico de baixa densidade para hidratação profunda da pele. Melhora textura, viço e firmeza em ciclos de 3 sessões.",
  },
];

export function Procedimentos() {
  return (
    <section id="procedimentos" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-lg text-3xl font-medium text-petroleo sm:text-4xl">
          Procedimentos
        </h2>
        <p className="mt-3 max-w-lg text-slate-600">
          Técnicas não invasivas, com indicação definida em avaliação
          presencial.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {procedimentos.map((procedimento) => (
            <ProcedimentoCard key={procedimento.nome} {...procedimento} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcedimentoCard({
  nome,
  descricao,
}: {
  nome: string;
  descricao: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-2xl border border-petroleo/10 bg-white p-8"
    >
      <h3 className="text-xl font-medium text-petroleo">{nome}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {descricao}
      </p>

      {hovered ? (
        <BorderBeam
          size={90}
          duration={5}
          colorFrom="#e3cf94"
          colorTo="#c9a84c"
        />
      ) : null}
    </div>
  );
}
