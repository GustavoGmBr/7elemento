// components/CardPersonagem.jsx
import '../../style/Personagem/CardPersonagem.css';

function CardPersonagem({ personagem }) {
  // Cores dos elementos naturais
  const elementsColors = {
    Fogo: "cor-fogo",
    Água: "cor-agua",
    Terra: "cor-terra",
    Vento: "cor-ar",
    Luz: "cor-luz",
    Sombra: "cor-trevas",
    Vazio: "cor-vazio",
    Demoniaca: "cor-demoniaca"
  };

  // Renderização das tags dos elementos
  function renderTags(arr) {
    return (
      arr &&
      arr.map((el, i) => (
        <span
          key={el + i}
          className={`tag-elemento ${elementsColors[el] || "cor-secundaria"}`}
        >
          {el}
        </span>
      ))
    );
  }

  // Renderização dos equipamentos (agora em tabela)
  function EquipamentosView({ equipamentos }) {
    if (!equipamentos || !equipamentos.length) {
      return <span className="equipamentos-vazio">Sem equipamentos</span>;
    }
    return (
      <div className="tabela-container">
        <table className="tabela-equipamentos">
          <thead>
            <tr>
              <th>Equipamento</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {equipamentos.map((eq, idx) => (
              <tr key={eq.nome + idx}>
                <td>{eq.nome}</td>
                <td>{eq.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (!personagem) return null;

  return (
    <div className="card-personagem">
      {/* Header */}
      <div className="card-header">
        <img
          src={personagem.imagem}
          alt={personagem.nome}
          className="card-avatar"
        />
        <div>
          <h2 className="card-nome">{personagem.nome}</h2>
          <p className="card-titulo">{personagem.titulo}</p>
        </div>
      </div>
      {/* Elementos */}
      <div className="card-elementos">
        <div className="elemento-bloco">
          <span className="secao-titulo">Elementos Naturais:</span>
          <div className="elementos-tags">
            {renderTags(personagem.elementosNaturais)}
          </div>
        </div>
        <div className="  -bloco">
          <span className="secao-titulo">Elementos Primordiais:</span>
          <div className="elementos-tags">
            {renderTags(personagem.elementosPrimordiais)}
          </div>
        </div>
      </div>
      {/* Tabela de capítulos */}
      <div className="card-capitulos">
        <span className="secao-titulo">Informações por Capítulo:</span>
        <div className="tabela-container">
          <table className="tabela-capitulos">
            <thead>
              <tr className='text-center'>
                <th>Capítulo</th>
                <th>Rank</th>
                <th>Nível</th>
                <th>Situação</th>
                <th>Última Aparição</th>
              </tr>
            </thead>
            <tbody>
              {personagem.capitulos.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.capitulo}</td>
                  <td>{c.rank}</td>
                  <td>{c.nivel}</td>
                  <td>{c.situacao}</td>
                  <td>{c.ultimaAparicao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Equipamentos */}
      <div className="card-equipamentos">
        <span className="secao-titulo">Equipamentos:</span>
        <EquipamentosView equipamentos={personagem.equipamentos} />
      </div>
    </div>
  );
}

export default CardPersonagem;