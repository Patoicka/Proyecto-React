import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  myList: [],
  activeTab: 'Todos',
  searchQuery: '',
  isLoading: false,
  currentPage: 1,
  totalPages: 1,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
      state.currentPage = 1; // Resetear página al cambiar tab
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; // Resetear página al buscar
    },
    addToMyList: (state, action) => {
      const movie = action.payload;
      if (!state.myList.some(m => m.id === movie.id)) {
        state.myList.push(movie);
      }
    },
    setMoviesLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload > 500 ? 500 : action.payload; // TMDB limit
    },
  },
});

export const { setActiveTab, setSearchQuery, addToMyList, setMoviesLoading, setMovies, setCurrentPage, setTotalPages } = movieSlice.actions;
export default movieSlice.reducer;
