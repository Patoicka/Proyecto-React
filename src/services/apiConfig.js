const API_KEY = import.meta.env.VITE_API_KEY;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
    };
    if (ACCESS_TOKEN) {
        headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
    }
    return headers;
};

const buildApiUrl = (endpoint, params = {}) => {
    const url = new URL(`${BASE_URL}${endpoint}`);
    if (API_KEY && !ACCESS_TOKEN) {
        url.searchParams.append('api_key', API_KEY);
    }
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });
    return url.toString();
}

export { getHeaders, buildApiUrl, BASE_URL, IMAGE_BASE_URL, API_KEY };