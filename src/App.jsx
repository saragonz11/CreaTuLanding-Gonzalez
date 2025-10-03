import React from "react";
import BarraNavegacion from "./components/BarraNavegacion";
import ContenedorListaProductos from "./components/ContenedorListaProductos";
import "./App.css";

function App() {
  return (
    <div className="aplicacion">
      <BarraNavegacion />
      <ContenedorListaProductos mensajeBienvenida="¡Bienvenidos a Mi Tienda!" />
    </div>
  );
}

export default App;
