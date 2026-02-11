import Router from 'express'
import {EleringPrices, SyncEleringPrices} from '../http/controllers/elering.controller'

const router = Router()

router.get('/prices', EleringPrices)
router.post('/prices',SyncEleringPrices)

export default router;