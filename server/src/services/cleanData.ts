import { timeStamp } from "node:console";
import { stringify } from "node:querystring";


export type rawData = {
    id: number;
    timestamp: any;
    location: any;
    price_eur_mwh: any
    source: ("UPLOAD" | "API")
    created_at: Date
}

export type cleanData = {
    id:  number
    timestamp: Date
    location: string;
    price_eur_mwh: number | null
    source: ("UPLOAD"| "API")
    created_at: Date 
}


export const cleanData = () => {
    const unCleanData: rawData[] = []
    const cleanedData: cleanData[] = []
    

    unCleanData.forEach( (item) => {
        const cleanId = item.id
        const cleanTimestamp = item.timestamp
        const  cleanLocation = stringify(item.location)
        const cleanPriceToMwh = Number(item.price_eur_mwh)
        const cleanSource = "UPLOAD"


    })
    
    return cleanedData;
}