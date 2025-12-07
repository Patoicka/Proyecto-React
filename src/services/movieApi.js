import { buildApiUrl, getHeaders, IMAGE_BASE_URL } from "./apiConfig";

const fetchFromApi = async (endpoint, params = {}) => {
  try {
    const url = buildApiUrl(endpoint, params);
    const options = {
      method: "GET",
      headers: getHeaders(),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error en la petición API:", error);
    throw error;
  }
};

export const searchMovies = async (query, page = 1) => {
  if (!query.trim()) return { results: [], total_results: 0 };
  const data = await fetchFromApi("/search/movie", {
    query: query,
    language: "es-ES",
    page: page,
  });
  return data;
};

export const getPopularMovies = async (page = 1) => {
  const data = await fetchFromApi("/movie/popular", {
    language: "es-ES",
    page: page,
  });
  return data;
};

export const getMovieDetails = async (movieId) => {
  const data = await fetchFromApi(`/movie/${movieId}`, {
    language: "es-ES",
  });
  return data;
};

export const getImageUrl = (posterPath, size = "w500") => {
  if (!posterPath) return "https://via.placeholder.com/500x750?text=Sin+imagen";
  return `${IMAGE_BASE_URL.replace("w500", size)}${posterPath}`;
};
