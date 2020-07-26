const API_KEY = "7baec300694021688ea18575b63d6d76";

export default {
     getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
     getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
     getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
     getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};
