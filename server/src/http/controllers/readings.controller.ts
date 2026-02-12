import { Response, Request } from "express";
import readings from "../../models/readings";

export const clearReadings = async (res: Response, req: Request ) => {

    if (req.body.source === 'UPLOAD') {
     const response = await readings.deleteReadings();

        try {
            if ([response].length === 0) {
                res.status(404).json({message: 'No upload records found'})
            }
            return res.status(200).json({message:' Deleted uploaded Records'});
        
        } catch (error) {
            res.status(500).json({message: 'INTERNAL SERVER ERROR '})
    }
    }
    return;
}