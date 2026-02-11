import Router from 'express'
import {EleringPrices} from '../http/controllers/elering.controller'

const router = Router()

router.get('/prices', EleringPrices)

export default router;