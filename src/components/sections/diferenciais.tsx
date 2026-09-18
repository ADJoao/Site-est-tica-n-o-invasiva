import { FiActivity, FiHeart, FiUsers } from "react-icons/fi";

const diferenciais = [
  {
    icon: FiActivity,
    titulo: "Equipamentos atualizados",
    descricao:
      "Aparelhos e insumos homologados pela Anvisa, revisados conforme as técnicas mais recentes da estética não invasiva.",
  },
  {
    icon: FiHeart,
    titulo: "Ambiente sem pressa",
    descricao:
      "Consultas com tempo reservado para escutar, explicar e esclarecer dúvidas antes de qualquer aplicação.",
  },
  {
    icon: FiUsers,
    titulo: "Plano individual",
    descricao:
      "Nenhum protocolo padrão. O plano de tratamento é montado a partir da anatomia e da rotina de cada paciente.",
  },
];

export function Diferenciais() {
  return (
    <section className="bg-petroleo px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-lg text-3xl font-medium sm:text-4xl">
          Por que tratar aqui
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {diferenciais.map(({ icon: Icon, titulo, descricao }) => (
            <div key={titulo}>
              <Icon className="h-7 w-7 text-dourado" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-medium">{titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
