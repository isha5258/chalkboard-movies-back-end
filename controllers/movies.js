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
  console.log(req.params.movieId)
  axios.get(`${baseURL}/3/movie/${req.params.movieId}/recommendations?api_key=${process.env.MOVIE_KEY}&language=en-US&page=1`)
  .then(response => {
    res.json(response.data)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function movieGenre(req, res) {
  axios.get(`${baseURL}/3/genre/movie/list?api_key=${process.env.MOVIE_KEY}&language=en-US&query=sonic&page=1&include_adult=false`)
  .then(response => {
    res.json(response.data)
  })
}

export {
  searchMovies,
  popularMovies,
  recommendedMovies,
  movieGenre,
}