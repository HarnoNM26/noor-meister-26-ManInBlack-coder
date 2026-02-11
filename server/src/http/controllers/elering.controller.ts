import { getPrices } from "../../services/elering";
import {Request, response, Response} from 'express'
import elering from "../../models/elering";

export const EleringPrices = () => {
    const response = getPrices()
    return response
}

export const SyncEleringPrices = async (req: Request, res: Response) => {
    const data = req.body

    try {
        const response = await elering.syncEleringData(data)
    
    } catch (error) {
        res.status(500).json({message:'internal server error', error})
    }
    return response
}
