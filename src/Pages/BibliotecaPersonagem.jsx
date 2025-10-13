import personagens from "../../public/database/personagem.json";
import { useState } from "react";
import CardPersonagem from "../components/CardPersonagem/CardPersonagem";
import CardPersonagemDetalhado from "../components/CardPersonagem/CardPersonagemDetalhado";
import "../style/Personagem/BibliotecaPersonagem.css";

function BibliotecaPersonagem() {
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
  const [filtro, setFiltro] = useState("todos");

  const personagensFiltrados =
    filtro === "todos"
      ? personagens
      : personagens.filter((p) => p.nome === filtro);

  return (
    <div className="biblioteca-container">
      <div className="filtro-container">
        <select
          className="filtro-select"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="todos">Todos</option>
          {personagens.map((p) => (
            <option key={p.id} value={p.nome}>
              {p.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="cards-grid">
        {personagensFiltrados.map((personagem) => (
          <div
            key={personagem.id}
            className="card-wrapper"
            onClick={() => setPersonagemSelecionado(personagem)}
          >
            <CardPersonagem personagem={personagem} />
          </div>
        ))}
      </div>

      {personagemSelecionado && (
        <CardPersonagemDetalhado
          personagem={personagemSelecionado}
          onClose={() => setPersonagemSelecionado(null)}
        />
      )}
    </div>
  );
}

export default BibliotecaPersonagem;