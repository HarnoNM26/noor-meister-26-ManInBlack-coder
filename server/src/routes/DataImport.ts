import Router from 'express'
import { ImportData } from '../http/controllers/import.controller'
const router = Router()


router.post('/import',ImportData)

export default router
