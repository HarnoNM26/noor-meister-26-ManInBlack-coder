import { getPrices } from "../../services/elering";
import {Request, Response} from 'express'
import Elering from "../../models/elering";

export const EleringPrices = async (res: Response) => {
    const response = await getPrices()
    try {
        if(!response) {
            res.status(404).json({message: 'not found 404'})
        }
            
        return res.json({response})
    }    catch ( error) {
        res.status(500).json({message: 'internal server 500', error})
    }


}

export const SyncEleringPrices = async (req: Request, res: Response) => {
    const data = req.body
    const response = await Elering.syncEleringData(data)

    try {
    
    } catch (error) {
        res.status(500).json({message:'internal server error', error})
    }
    return response
}
