# 🎮 SteamLite

Plataforma web de videojuegos inspirada en Steam, desarrollada como una Aplicación de Página Única (**SPA**) de alto rendimiento utilizando React, Vite y Tailwind CSS.

---

## 🚀 Tecnologías Utilizadas

* **Frontend & Build Tool:** [React 18](https://react.dev/), [Vite](https://vitejs.dev/)
* **Enrutamiento:** [React Router DOM](https://reactrouter.com/)
* **Estilos y Diseño:** [Tailwind CSS](https://tailwindcss.com/)
* **Iconografía:** [Lucide React](https://lucide.dev/)
* **Formularios y Validaciones:** Formik & Yup *(Fase actual)*

---

## 👥 Roles y Arquitectura del Proyecto

El desarrollo está estructurado mediante ramas de características (`feature branches`) para mantener un flujo de trabajo profesional en equipo:

* **Integrante 1 (`feature/catalogo-minijuegos`):**
  * Gestión de base de datos local de juegos (`games.json`).
  * Componente de filtros avanzados por categoría y título (`GameFilters.jsx`).
  * Desarrollo del mini-juego interactivo en HTML5 Canvas (`SnakeGame.jsx`).

* **Integrante 2 (`feature/ui-routing-views`):**
  * Configuración del enrutamiento global SPA con `react-router-dom` (`AppRoutes.jsx`).
  * Diseño de la barra de navegación y pie de página (`Navbar.jsx`, `Footer.jsx`).
  * Desarrollo de vistas principales (`Home`, `GameDetail`, `CartCheckout`, `Library`, `PlayGame`).
  * Arquitectura y configuración de estilos con Tailwind CSS (`src/index.css` y `src/styles/App.css`).

---

## 🛠️ Guía de Instalación y Ejecución Local

Sigue estos pasos para clonar y poner en marcha el proyecto en tu máquina local:

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/steam-lite.git](https://github.com/tu-usuario/steam-lite.git)
Instala las dependencias:
npm install
Inicia el servidor de desarrollo local:
npm run dev
