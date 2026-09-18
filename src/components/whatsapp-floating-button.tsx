import { FaWhatsapp } from "react-icons/fa";
import { getWhatsappLink } from "@/config/clinica";
import { Magnetic } from "@/components/magnetic";

export function WhatsappFloatingButton() {
  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <Magnetic className="inline-block" strength={0.25}>
        <a
          href={getWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agende sua avaliação pelo WhatsApp"
          className="flex items-center gap-2.5 rounded-full bg-petroleo px-5 py-3.5 text-sm font-medium text-white shadow-xl shadow-petroleo/30 transition-colors hover:bg-petroleo-deep"
        >
          <FaWhatsapp className="h-5 w-5 text-dourado-soft" aria-hidden="true" />
          <span className="hidden sm:inline">Agende sua avaliação</span>
        </a>
      </Magnetic>
    </div>
  );
}
