import { CtaFinal } from "@/components/sections/cta-final";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Diferenciais } from "@/components/sections/diferenciais";
import { Hero } from "@/components/sections/hero";
import { Localizacao } from "@/components/sections/localizacao";
import { NossoEspaco } from "@/components/sections/nosso-espaco";
import { Procedimentos } from "@/components/sections/procedimentos";
import { Sobre } from "@/components/sections/sobre";
import { WhatsappFloatingButton } from "@/components/whatsapp-floating-button";

function App() {
  return (
    <>
      <main>
        <Hero />
        <Sobre />
        <Procedimentos />
        <NossoEspaco />
        <Diferenciais />
        <Depoimentos />
        <Localizacao />
        <CtaFinal />
      </main>
      <WhatsappFloatingButton />
    </>
  );
}

export default App;
