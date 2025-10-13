import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Navbar from "./components/Navbar/Index";
import BibliotecaCapitulos from "./Pages/BibliotecaCapitulos";
import capitulosRoutes from "./routes/CapitulosRotas";
import BibliotecaPersonagem from "./Pages/BibliotecaPersonagem";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/7elemento" element={<Inicio />} />
        <Route path="/7elemento/biblioteca" element={<BibliotecaCapitulos />}>
          {/* Rotas dos capítulos importadas como array */}
          {capitulosRoutes}
        </Route>
        <Route path="/7elemento/personagem" element={<BibliotecaPersonagem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;