import axios from 'axios'

const baseURL = 'https://api.themoviedb.org'

function searchMovies(req, res) {
  axios.get(`${baseURL}/3/search/movie?api_key=${process.env.MOVIE_KEY}&language=en-US&query=${req.params.name}&page=1&include_adult=false`)
  .then(response => {
    res.json(response.data)
  })
}

function popularMovies (req, res){
  axios.get(`${baseURL}/3/movie/popular?api_key=${process.env.MOVIE_KEY}&language=en-US&page=1`)
  .then(response => {
    res.json(response.data)
  })
}

function recommendedMovies(req, res){
  console.log('sanity')
}

function movieGenre(req, res) {
  console.log('sanity for genre')
}

export {
  searchMovies,
  popularMovies,
  recommendedMovies,
  movieGenre,
}