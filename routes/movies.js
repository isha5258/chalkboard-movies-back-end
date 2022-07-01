import { Router } from "express";
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

/*--------Public Routes -----------*/

router.get('/:name', moviesCtrl.getMovie)


export {
  router
}