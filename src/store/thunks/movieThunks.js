import { setMovies, setMoviesLoading, setTotalPages } from '../slices/movieSlice';
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getDiscoverMovies, searchMovies } from '../../services/movieApi';

export const fetchMoviesThunk = () => async (dispatch, getState) => {
  const { movies: movieState } = getState();
  const { activeTab, searchQuery, myList, currentPage } = movieState;

  if (activeTab === "Mi lista") {
    // Para Mi lista solo necesitamos renderizar, no hacemos API call
    dispatch(setMoviesLoading(false));
    return;
  }

  dispatch(setMoviesLoading(true));
  
  try {
    let data;
    
    if (searchQuery && searchQuery.trim() !== "") {
      data = await searchMovies(searchQuery, currentPage);
    } else {
      switch (activeTab) {
        case "Populares":
          data = await getPopularMovies(currentPage);
          break;
        case "Mejor valoradas":
          data = await getTopRatedMovies(currentPage);
          break;
        case "Estrenos":
          data = await getNowPlayingMovies(currentPage);
          break;
        case "Todos":
        default:
          data = await getDiscoverMovies(currentPage);
          break;
      }
    }
    
    dispatch(setMovies(data.results || []));
    if (data.total_pages) {
      dispatch(setTotalPages(data.total_pages));
    }
  } catch (error) {
    console.error("Error fetching movies via thunk:", error);
    dispatch(setMovies([]));
  } finally {
    dispatch(setMoviesLoading(false));
  }
};
