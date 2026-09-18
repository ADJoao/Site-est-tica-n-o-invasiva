import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const galeria = [
  { src: "/images/recepcao.jpg", legenda: "Recepção" },
  { src: "/images/tecnologia.jpg", legenda: "Tecnologia" },
];

export function NossoEspaco() {
  return (
    <section id="espaco" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 pt-24">
        <h2 className="text-3xl font-medium text-petroleo sm:text-4xl">
          Nosso espaço
        </h2>
        <p className="mt-3 max-w-lg text-slate-600">
          Um ambiente planejado para reduzir a tensão antes de cada
          procedimento.
        </p>
      </div>

      <ContainerScroll titleComponent={<span />}>
        <img
          src="/images/sala-procedimentos.jpg"
          alt="Sala de procedimentos"
          className="mx-auto h-full w-full object-cover"
        />
      </ContainerScroll>

      <div className="mx-auto grid max-w-5xl gap-6 px-6 pb-24 sm:grid-cols-2">
        {galeria.map((item) => (
          <figure key={item.src} className="overflow-hidden rounded-2xl">
            <img
              src={item.src}
              alt={item.legenda}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-slate-500">
              {item.legenda}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
