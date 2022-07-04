import { Router } from "express";
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

/*--------Public Routes -----------*/

router.get('/:name', moviesCtrl.searchMovie)

router.get('/popular', moviesCtrl.popularMovie')


export {
  router
}