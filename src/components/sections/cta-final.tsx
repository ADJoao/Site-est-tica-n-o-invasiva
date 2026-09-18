import { WhatsappButton } from "@/components/whatsapp-button";
import { clinica } from "@/config/clinica";

export function CtaFinal() {
  return (
    <section className="bg-petroleo-deep px-6 py-24 text-center text-white">
      <h2 className="mx-auto max-w-lg text-3xl font-medium sm:text-4xl">
        Pronta para dar o próximo passo?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-white/70">
        Agende uma avaliação com a equipe {clinica.nome} e entenda quais
        procedimentos fazem sentido para o seu caso.
      </p>

      <div className="mt-8 flex justify-center">
        <WhatsappButton size="large" />
      </div>
    </section>
  );
}
