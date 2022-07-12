import { Router } from "express";
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

/*--------Public Routes -----------*/

router.get('/popular', moviesCtrl.popularMovies)

router.get('/genre', moviesCtrl.movieGenre)

router.get('/:name', moviesCtrl.searchMovies)

router.get('/:movie/recommendations', moviesCtrl.recommendedMovies)



export {
  router
}