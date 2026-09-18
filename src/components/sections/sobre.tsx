import { NumberTicker } from "@/components/ui/number-ticker";
import { clinica } from "@/config/clinica";

export function Sobre() {
  return (
    <section id="sobre" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-3xl font-medium text-petroleo sm:text-4xl">
            {clinica.especialista.nome}
          </h2>
          <p className="mt-2 text-sm font-medium tracking-wide text-dourado uppercase">
            {clinica.especialista.formacao} · {clinica.especialista.posGraduacao}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            Atendimento individual, sem protocolos genéricos. Cada plano de
            tratamento é definido a partir da anatomia, da rotina e do
            objetivo real de quem está sendo atendido.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Todos os procedimentos usam produtos regularizados pela Anvisa e
            seguem protocolos de biossegurança revisados periodicamente. Antes
            de qualquer aplicação, o processo é explicado em detalhes, com
            espaço para dúvidas.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl border border-petroleo/10 bg-cream px-10 py-8 text-center">
          <span className="flex items-baseline gap-1 font-heading text-6xl font-medium text-petroleo">
            <NumberTicker
              value={clinica.especialista.anosExperiencia}
              className="font-heading text-petroleo"
            />
            <span className="text-3xl text-dourado">anos</span>
          </span>
          <span className="mt-2 text-sm text-slate-500">de experiência clínica</span>
        </div>
      </div>
    </section>
  );
}
