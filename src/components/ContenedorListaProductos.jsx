import React from "react";

const ContenedorListaProductos = ({ mensajeBienvenida }) => {
  return (
    <div className="contenedor-lista-productos">
      <h1 className="mensaje-bienvenida">{mensajeBienvenida}</h1>
      <div className="placeholder-productos">
        <p>Aquí se mostrará el catálogo de productos próximamente...</p>
      </div>
    </div>
  );
};

export default ContenedorListaProductos;
