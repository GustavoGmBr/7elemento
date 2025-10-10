import "../style/inicio/inicio.css";
function Inicio() {
  return (
    <>
      <div className="boas-vindas">
        <h3 className="text-center texto-1">Bem-vindo ao 7° Elemento</h3>
        <h4 className="text-center texto-2">Entre a Luz e As Sombras</h4>
        <h5 className="text-center texto-3">Venha explorar e descobrir os mistérios por trás dessa história</h5>
      </div>
      <main>
        <section>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="card max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm0">
                <h5 className="card-titulo mb-2 text-2xl">
                  📚 Biblioteca de Capítulos
                </h5>
                <p className="card-texto mb-3 font-normal">
                  Comece a explorar nossa história. Acesse os capítulos disponíveis!
                </p>
                <a
                  href="/7elemento/biblioteca"
                  className="botao inline-flex items-center px-3 py-2 text-sm font-medium"
                >
                  Explorar
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>

              {/* Card 2 */}
              <div className="card max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm0">
                <h5 className="card-titulo mb-2 text-2xl">
                  🧙 Personagens
                </h5>
                <p className="card-texto mb-3 font-normal">
                  Conheça todos os personagens da historia e tudo sobre eles
                </p>
                <a
                  href="/7elemento/personagens" // Altere para o link correto
                  className="botao inline-flex items-center px-3 py-2"
                >
                  Ver Personagens
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>

              {/* Card 3 */}
              <div className="card max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm0">
                <h5 className="card-titulo mb-2 text-2xl">
                  🐉 Bestiário
                </h5>
                <p className="card-texto mb-3 font-normal">
                  Descubra seres e criaturas que estarão presentes na historia
                </p>
                <a
                  href="/7elemento/bestiario" // Altere para o link correto
                  className="botao inline-flex items-center px-3 py-2"
                >
                  Descobrir
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Inicio