import {Generated} from 'kysely'

interface energyReading {
    id: Generated<number> | number
    timestamp: Date
    location: string;
    price_eur_mwh: number | null
    source: ("UPLOAD"| "API")
    created_at: Date 
}

export interface database {
    EnergyReading: energyReading
}