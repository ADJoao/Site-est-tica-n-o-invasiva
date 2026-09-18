import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { clinica, getWhatsappLink } from "@/config/clinica";

export function Localizacao() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-medium text-petroleo sm:text-4xl">
          Localização
        </h2>
        <p className="mt-4 text-slate-600">
          Estamos na {clinica.localizacao.regiao} de {clinica.localizacao.cidade},
          a poucos minutos de estações de metrô e principais avenidas. O
          endereço completo é enviado após a confirmação do agendamento.
        </p>

        <div className="mt-8 flex items-center justify-center gap-5">
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-petroleo/15 text-petroleo transition-colors hover:border-dourado hover:text-dourado"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>
          <a
            href={clinica.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-petroleo/15 text-petroleo transition-colors hover:border-dourado hover:text-dourado"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
