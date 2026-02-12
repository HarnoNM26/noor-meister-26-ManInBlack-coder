import Router from 'express'
import { ImportData } from '../http/controllers/import.controller'
import { clearReadings } from '../http/controllers/readings.controller'
const router = Router()


router.post('/import',ImportData)
router.delete('/readings', clearReadings)

export default router
