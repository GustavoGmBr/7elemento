// SidebarSubcapitulos.js
import { Link, useParams } from "react-router-dom";
import "../../style/BibliotecaCapitulos/SidebarCapitulos.css";

const SidebarSubCapitulos = ({ capitulo }) => {
  const { capituloId } = useParams(); // Supondo que a rota seja /biblioteca/:capituloId

  if (!capitulo) return null;

  return (
    <aside className="sidebar-capitulo">
      <h2 className="text-lg font-bold mb-4">{capitulo.titulo}</h2>
      <ul>
        {capitulo.subcapitulos.map((sub) => (
          <li key={sub.id}>
            <Link
              className="block py-2 hover:text-blue-600"
              to={`/7elemento/biblioteca/${capitulo.id}/${sub.id}`}
            >
              {sub.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarSubCapitulos;