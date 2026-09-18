import { BlurFadeWords } from "@/components/blur-fade-words";
import { BlurFade } from "@/components/ui/blur-fade";
import { clinica } from "@/config/clinica";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden bg-petroleo px-6 py-28 text-center text-white">
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[26rem] w-[26rem] rounded-full bg-dourado/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-[22rem] w-[22rem] rounded-full bg-dourado/5 blur-3xl"
        aria-hidden="true"
      />

      <BlurFade inView delay={0} duration={0.6}>
        <p className="mb-5 text-sm tracking-[0.2em] text-dourado-soft uppercase">
          {clinica.nome}
        </p>
      </BlurFade>

      <h1 className="max-w-3xl text-4xl leading-tight font-medium text-balance sm:text-5xl md:text-6xl">
        <BlurFadeWords
          text="Resultados naturais que respeitam quem você é."
          delayStart={0.15}
          staggerDelay={0.07}
        />
      </h1>

      <div className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">
        <BlurFadeWords
          text="Estética não invasiva pensada para realçar sua expressão, sem apagar sua identidade."
          delayStart={0.7}
          staggerDelay={0.02}
        />
      </div>

      <BlurFade inView delay={1.1} duration={0.6} className="mt-10">
        <a
          href="#procedimentos"
          className="text-sm text-dourado-soft underline underline-offset-4 transition-colors hover:text-dourado"
        >
          Conheça os procedimentos
        </a>
      </BlurFade>
    </section>
  );
}
