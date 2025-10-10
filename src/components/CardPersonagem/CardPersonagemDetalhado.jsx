function CardPersonagemDetalhado({ personagem, onClose }) {
  if (!personagem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button 
          className="absolute top-2 right-4 bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-sm"
          onClick={onClose}
        >
          Fechar
        </button>
        <div className="flex items-center gap-6 mb-4">
          <img src={personagem.imagem} alt={personagem.nome} className="w-24 h-24 rounded object-cover border" />
          <div>
            <h2 className="text-3xl font-bold">{personagem.nome}</h2>
            <span className="text-lg text-gray-500">{personagem.titulo}</span>
            <div className="flex gap-2 mt-2">
              {(personagem.elementosNaturais || []).map((el, i) => (
                <span key={el + i} className="px-2 py-1 rounded text-xs bg-blue-500 text-white">{el}</span>
              ))}
              {(personagem.elementosPrimordiais || []).map((el, i) => (
                <span key={el + i} className="px-2 py-1 rounded text-xs bg-purple-500 text-white">{el}</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold mt-4 mb-2">Biografia</h3>
          <p className="text-gray-700 text-sm">{personagem.biografia || "Sem biografia disponível."}</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold mb-2">Capítulos</h3>
          <table className="w-full text-xs border">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-1 px-2 text-left">Capítulo</th>
                <th className="py-1 px-2 text-left">Rank</th>
                <th className="py-1 px-2 text-left">Nível</th>
                <th className="py-1 px-2 text-left">Situação</th>
                <th className="py-1 px-2 text-left">Última Aparição</th>
              </tr>
            </thead>
            <tbody>
              {personagem.capitulos.map((c, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-1 px-2">{c.capitulo}</td>
                  <td className="py-1 px-2">{c.rank}</td>
                  <td className="py-1 px-2">{c.nivel}</td>
                  <td className="py-1 px-2">{c.situacao}</td>
                  <td className="py-1 px-2">{c.ultimaAparicao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="font-bold mb-2">Equipamentos</h3>
          <div className="flex flex-wrap gap-3">
            {(personagem.equipamentos || []).length === 0 && (
              <span className="text-xs italic text-gray-500">Sem equipamentos.</span>
            )}
            {(personagem.equipamentos || []).map((eq, i) => (
              <div key={eq.nome + i} className="flex items-center gap-2 px-3 py-1 border rounded">
                {eq.imagem &&
                  <img
                    src={eq.imagem}
                    alt={eq.nome}
                    className="w-8 h-8 object-cover rounded"
                  />}
                <span className="text-sm">{eq.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardPersonagemDetalhado;