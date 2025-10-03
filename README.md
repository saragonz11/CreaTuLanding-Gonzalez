# 🛒 Mi Tienda - E-commerce Landing Page

## 📋 Descripción del Proyecto

Este proyecto es la **Entrega 1** del diplomado de desarrollo React, donde se crean los primeros componentes base para construir un e-commerce. Se desarrolla una landing page con barra de navegación, widget de carrito y contenedor de productos.

## 🎯 Objetivos Alcanzados

- ✅ Comprender los conceptos básicos de React y su estructura de componentes
- ✅ Crear las bases para la homepage del ecommerce
- ✅ Implementar componentes reutilizables con props
- ✅ Organizar correctamente la estructura de componentes

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── BarraNavegacion.jsx      # Barra de navegación principal
│   ├── WidgetCarrito.jsx        # Widget del carrito de compras
│   └── ContenedorListaProductos.jsx  # Contenedor para catálogo
├── App.jsx                      # Componente principal
├── App.css                      # Estilos de la aplicación
└── main.jsx                     # Punto de entrada
```

## 🧩 Componentes Desarrollados

### 1. **BarraNavegacion** (`BarraNavegacion.jsx`)

- Logo de la tienda
- Enlaces de navegación (Inicio, Productos, Nosotros, Contacto)
- Integración del widget de carrito

### 2. **WidgetCarrito** (`WidgetCarrito.jsx`)

- Icono de carrito de compras
- Contador de productos (actualmente en 0)
- Diseño atractivo con hover effects

### 3. **ContenedorListaProductos** (`ContenedorListaProductos.jsx`)

- Recibe props para personalización
- Muestra mensaje de bienvenida personalizable
- Placeholder para el catálogo futuro

## 🎨 Características de Diseño

- **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla
- **Colores Profesionales**: Paleta de colores moderna y atractiva
- **Efectos de Hover**: Interacciones suaves en botones y enlaces
- **Tipografía Clara**: Jerarquía visual bien definida

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**

   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd entrega1
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - La aplicación estará disponible en `http://localhost:5173` o `http://localhost:5174`

## 📦 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter de código

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca principal para la interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos personalizados
- **ESLint** - Linter para mantener calidad de código

## 📝 Conceptos de React Implementados

### Props

```jsx
// Uso de props en ContenedorListaProductos
<ContenedorListaProductos mensajeBienvenida="¡Bienvenidos a Mi Tienda!" />
```

### Componentes Funcionales

```jsx
const BarraNavegacion = () => {
  return (
    <nav className="barra-navegacion">{/* Contenido del componente */}</nav>
  );
};
```

### Importación y Exportación

```jsx
import BarraNavegacion from "./components/BarraNavegacion";
import WidgetCarrito from "./components/WidgetCarrito";
```

## 🎯 Criterios de Evaluación Cumplidos

- ✅ **Archivos de componentes**: NavBar, CartWidget, ItemListContainer creados
- ✅ **Organización correcta**: NavBar e ItemListContainer en App, CartWidget en NavBar
- ✅ **Uso de props**: ItemListContainer recibe string con mensaje
- ✅ **Estructura de carpetas**: Componentes organizados en carpeta `components/`
- ✅ **Funcionalidad**: Todos los componentes renderizan correctamente

## 🔮 Próximos Pasos

- Implementar funcionalidad del carrito de compras
- Crear catálogo de productos dinámico
- Añadir sistema de filtros y búsqueda
- Implementar carrito de compras funcional
- Añadir sistema de autenticación

## 👨‍💻 Autor

**Sara Goanzalez Londono**

- Estudiante del Diplomado de Desarrollo React
- Entrega 1: Crea tu Landing

## 📄 Licencia

Este proyecto es parte de un curso académico y está destinado únicamente para fines educativos.

---

_Desarrollado con ❤️ usando React y Vite_
