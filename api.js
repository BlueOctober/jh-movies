import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "78224e71850d787c655a11bc5ad1eaf7",
        language: "en-US"
    }
});

//api.get("tv/popular");

export const movies = {
    getMovie: id =>
      api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
    getPopular: () => api.get("movie/popular"),
    getUpcoming: () => api.get("movie/upcoming"),
    getNowPlaying: () => api.get("movie/now_playing"),
    searchMovies: term =>
      api.get("search/movie", {
        params: {
          query: encodeURIComponent(term)
        }
      })
};

export const tv = {
  getShow: id =>
    api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
  getPopular: () => api.get("tv/popular"),
  getAiringThisWeek: () => api.get("tv/top_rated"),
  getAiringToday: () => api.get("tv/airing_today"),
  searchTv: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export default api;