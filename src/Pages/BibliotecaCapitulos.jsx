import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import SidebarCapitulos from "../components/FiltroCapitulo/SideBarCapitulo";
import "../style/BibliotecaCapitulos/biblioteca.css";
function BibliotecaCapitulos() {
    const [capitulos, setCapitulos] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    // Está visualizando um capítulo específico?
    // true se for /7elemento/biblioteca/capitulo1, false se for /7elemento/biblioteca
    const estaNoCapitulo = location.pathname !== "/7elemento/biblioteca";

    useEffect(() => {
        // Carrega os capítulos da base de dados
        fetch(`${import.meta.env.BASE_URL}database/capitulos.json`)
            .then(response => response.json())
            .then(data => setCapitulos(data))
            .catch(error => console.error("Erro ao carregar capítulos:", error));
    }, []);

    // Navega para a lista de capítulos
    const handleVoltar = () => {
        navigate("/7elemento/biblioteca");
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar sempre na esquerda */}
            {!estaNoCapitulo && <SidebarCapitulos capitulos={capitulos} />}

            {/* Conteúdo */}
            <section className="flex-1 flex flex-col items-center justify-start py-8 px-4">
                {estaNoCapitulo && (
                    <button
                        className="btn-voltar"
                        onClick={handleVoltar}
                        aria-label="Voltar para a lista de capítulos"
                    >
                        <span className="ml-auto">&#8592;</span>
                        Voltar para a lista
                    </button>
                )}
                <div className="w-full">
                    <Outlet />
                </div>
            </section>
        </div>
    );
}

export default BibliotecaCapitulos;