import { FaWhatsapp } from "react-icons/fa";
import { getWhatsappLink } from "@/config/clinica";
import { Magnetic } from "@/components/magnetic";
import { cn } from "@/lib/utils";

interface WhatsappButtonProps {
  label?: string;
  className?: string;
  size?: "default" | "large";
}

export function WhatsappButton({
  label = "Agende sua avaliação",
  className,
  size = "default",
}: WhatsappButtonProps) {
  return (
    <Magnetic className="inline-block">
      <a
        href={getWhatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2.5 rounded-full bg-petroleo font-medium text-white shadow-lg shadow-petroleo/25 transition-colors hover:bg-petroleo-deep",
          size === "default" && "px-6 py-3.5 text-sm",
          size === "large" && "px-8 py-4.5 text-base",
          className,
        )}
      >
        <FaWhatsapp className="h-5 w-5 text-dourado-soft" aria-hidden="true" />
        {label}
      </a>
    </Magnetic>
  );
}
