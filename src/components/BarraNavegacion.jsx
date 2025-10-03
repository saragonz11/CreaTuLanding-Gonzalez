import React from "react";
import WidgetCarrito from "./WidgetCarrito";

const BarraNavegacion = () => {
  return (
    <nav className="barra-navegacion">
      <div className="marca-tienda">
        <h2>Mi Tienda</h2>
      </div>
      <div className="enlaces-navegacion">
        <a href="#inicio" className="enlace-nav">
          Inicio
        </a>
        <a href="#productos" className="enlace-nav">
          Productos
        </a>
        <a href="#nosotros" className="enlace-nav">
          Nosotros
        </a>
        <a href="#contacto" className="enlace-nav">
          Contacto
        </a>
      </div>
      <div className="carrito-navegacion">
        <WidgetCarrito />
      </div>
    </nav>
  );
};

export default BarraNavegacion;
