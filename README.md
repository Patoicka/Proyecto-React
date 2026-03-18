# React Películas App 🎬

Una aplicación web de catálogo de películas moderna y responsiva construida con **React**, potenciada por la API de **The Movie Database (TMDB)**, estilizada con **Tailwind CSS** y manejando su estado global a través de **Redux Toolkit**.

## 🚀 Características Principales

- **Explorador de Películas**: Navegación a través de las películas Top del momento mediante la conexión directa con TMDB (Populares, Mejor valoradas, Estrenos).
- **Consumo Dinámico de API**: Implementación de Redux Thunks para manejar asíncronamente las peticiones, permitiendo escalabilidad y control de los estados de carga.
- **Paginación Integrada**: Sistema de navegación entre múltiples páginas aprovechando el límite de TMDB (hasta 500 páginas), con scroll automático superior.
- **Buscador Completo**: Búsqueda en tiempo real por palabras clave a través de miles de títulos.
- **"Mi Lista" (Guardado Local)**: Los usuarios pueden añadir sus películas favoritas a su catálogo personal temporal mediante un sistema simulado de guardado en el estado de Redux.
- **Autenticación (Simulada)**: Flujo de interfaz de usuario de inicio y cierre de sesión conectado globalmente mediante `authSlice` en Redux, protegiendo partes especiales de la app como la sección de favoritos.
- **Diseño Responsivo (Mobile First)**: Modales que previenen bloqueos de contenido, menús desplegables en versión móvil y rejillas escalables utilizando las herramientas utilitarias de TailwindCSS.

## 🛠️ Tecnologías y Herramientas

- **Framework Core:** [React 18] (via [Vite])
- **Gestión de Estado:** [Redux Toolkit] (`@reduxjs/toolkit`) + [React-Redux]
- **Estilos:** [Tailwind CSS] v3
- **Íconos:** [FontAwesome] (`@fortawesome/react-fontawesome`)
- **API Externa:** [TMDB API] (v3)

## 📁 Estructura del Proyecto

La arquitectura del proyecto está principalmente dividida en la separación clara entre la interfaz (Componentes) y la lógica de negocio (Redux / API):

```text
src/
├── assets/             # Imágenes y contenido multimedia estático.
├── components/         # Todos los Componentes visuales de React.
│   ├── Modals/         # Modales interactivos (Login, InfoMovie).
│   ├── Layout.jsx      # Componente estrucutural padre.
│   ├── MovieList.jsx   # Grid principal de renderizado.
│   ├── Pagination.jsx  # Paginador dinámico.
│   ├── Search.jsx      # Input superior de búsqueda.
│   └── Tabs.jsx        # Selector de endpoints / menús desplegables en móvil.
├── services/           # Interacción con agentes externos.
│   ├── apiConfig.js    # Claves secretas e inicialización con TMDB.
│   └── movieApi.js     # Endpoints de TMDB implementados (fetch callbacks).
├── store/              # Directorio Base de Redux Toolkit.
│   ├── slices/         # Slices: Estados puros síncronos.
│   │   ├── authSlice.js
│   │   └── movieSlice.js
│   ├── thunks/         # Thunks: Lógica de fetch asíncrono e inyección en Store.
│   │   └── movieThunks.js
│   └── store.js        # Configurador global de Redux.
└── main.jsx            # Entrada de inicialización de la app.
```

## ⚙️ Instalación y Configuración

Sigue estos pasos para arrancar el proyecto en tu entorno local:

1. **Clonar el repositorio y acceder a la carpeta:**
   ```bash
   git clone <URL_DEL_REPO>
   cd Peliculas
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las credenciales (si aplica en un archivo .env):**
   *Asegúrate de agregar tu Bearer Token de TMDB en `src/services/apiConfig.js` o en un fichero de variables de entorno acorde.*

4. **Correr el modo de desarrollo de Vite:**
   ```bash
   npm run dev
   ```

5. Accede en el navegador a la URL brindada (normalmente `http://localhost:5173/`).

## ✍️ Manejo de Estados con Redux (Flujo)

En versiones tempranas de esta aplicación se manejó con estado local (useState) pasando callbacks o "props" hacia abajo. Actualmente se refactorizó adoptando las buenas prácticas de React moderno usando **Redux Toolkit**:

En lugar de que `app.jsx` pase props al modal para abrir un inicio de sesión, simplemente cualquier botón usa `dispatch(setLoginOpen(true))` y el `LoginModal.jsx` escucha a través de `useSelector(state => state.auth)`. Esto limpió la base del código permitiendo tener componentes "tontos" visuales y separar toda la compleja orquestación en la capa superior del *Store*.

---
Desarrollado y mantenido refactorizando con amor y mejores prácticas para una experiencia de código superior. 🚀
