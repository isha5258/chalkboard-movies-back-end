import { Router } from "express";
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

/*--------Public Routes -----------*/

router.get('/popular', moviesCtrl.popularMovies)

router.get('/:name', moviesCtrl.searchMovies)



export {
  router
}