import { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/BibliotecaCapitulos/SidebarCapitulos.css";

function SidebarCapitulos({ capitulos = [] }) {
  const [filtro, setFiltro] = useState("");

  const capitulosFiltrados = capitulos.filter(c =>
    c.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <aside className="sidebar-capitulos">
      <div className="sidebar-header">
        <input
          type="text"
          className="sidebar-search"
          placeholder="Filtrar capítulo..."
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
        />
      </div>
      <ul className="sidebar-list">
        {capitulosFiltrados.length > 0 ? (
          capitulosFiltrados.map((cap, idx) => (
            <li key={cap.id || idx}>
              <Link
                to={cap.rota}
                className="sidebar-link"
              >
                {cap.nome}
              </Link>
            </li>
          ))
        ) : (
          <li className="sidebar-empty">Nenhum capítulo encontrado.</li>
        )}
      </ul>
    </aside>
  );
}

export default SidebarCapitulos;