import React from "react";
import { Route } from "react-router-dom";
import Capitulo1 from "../Pages/capitulos/capitulo1";
// Importe outros capítulos aqui

const capitulosRoutes = [
  <Route path="capitulo1" element={<Capitulo1 />} key="capitulo1" />,
  // <Route path="capitulo2" element={<Capitulo2 />} key="capitulo2" />,
  // ...adicione outros capítulos aqui
];

export default capitulosRoutes;