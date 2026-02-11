import {Generated, Kysely} from 'kysely'

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

export async function up(db: Kysely<any>): Promise<void> {

}

export async function down(db: Kysely<any>): Promise<void> {
    
}