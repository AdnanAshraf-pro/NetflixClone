const { APIKEY } = require("./configFile");
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOrignals: `discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `discover/tv?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `discover/tv?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `discover/tv?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `discover/tv?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentries: `discover/tv?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
