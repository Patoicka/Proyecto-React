# Películas

Aplicación web para explorar películas usando la API de [The Movie Database (TMDB)](https://www.themoviedb.org/). Muestra películas populares, permite buscar y ver detalles en un modal.

## ¿Qué hace el proyecto?

- **Listado de películas populares**: Muestra un grid con las películas más populares obtenidas de TMDB.
- **Tarjetas de película**: Cada película muestra póster, título, fecha de estreno, valoración y resumen.
- **Modal de detalles**: Al hacer clic en una película se abre un modal con más información.
- **Buscador**: Campo de búsqueda para encontrar películas (interfaz preparada).
- **Diseño responsive**: Layout adaptable con sidebar en pantallas grandes y grid de películas que se ajusta al tamaño de pantalla.

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| **React 19** | Librería UI y componentes |
| **Vite 7** | Build tool y servidor de desarrollo |
| **Tailwind CSS 4** | Estilos y diseño responsive |
| **Font Awesome** | Iconos (ej. cerrar modal) |
| **API TMDB** | Datos de películas (popular, búsqueda, detalles) |

## Requisitos previos

- Node.js (recomendado v18+)
- Cuenta en [TMDB](https://www.themoviedb.org/) para obtener una API Key

## Instalación

1. Clonar el repositorio (o descargar el proyecto).
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno (ver sección siguiente).
4. Arrancar el proyecto:

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

## Variables de entorno

El proyecto usa variables de entorno de Vite (prefijo `VITE_`).

1. Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

2. Edita `.env` y sustituye los valores por tus credenciales de TMDB:

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `VITE_API_KEY` | Sí | API Key de TMDB. Obtenerla en [TMDB Settings → API](https://www.themoviedb.org/settings/api). |
| `VITE_ACCESS_TOKEN` | No | Token de acceso (Bearer). Opcional; si no lo usas, las peticiones se harán solo con `api_key`. |

**Importante**: El archivo `.env` no se sube a Git (está en `.gitignore`). No compartas tu API Key en el repositorio.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con Vite |
| `npm run build` | Build de producción |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Ejecutar ESLint |

## Estructura del proyecto (resumen)

```
src/
├── components/       # Componentes React (Layout, Search, MovieList, MovieCard, Modals)
├── services/         # Lógica de API (apiConfig, movieApi)
├── App.jsx
└── main.jsx
```

## Licencia

Proyecto de uso educativo / personal.
