import axios from 'axios'
import { response } from 'express'

const baseURL = 'https://api.themoviedb.org'

function searchMovie(req, res) {
  axios.get(`${baseURL}/3/search/movie?api_key=${process.env.MOVIE_KEY}&language=en-US&query=${req.params.name}&page=1&include_adult=false`)
  .then(response => {
    res.json(response.data)
  })
  console.log('sanity')
  console.log(req.params.name)
}

function popularMovies (req, res){
  console.log('sanity')
}

export {
  searchMovie,
}