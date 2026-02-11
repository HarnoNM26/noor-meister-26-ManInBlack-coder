import {database} from '../types/databse'
import db from '../utils/db'

interface cleanedData {
    id: number
    timestamp: Date
    location: string
}

class jsonImport {
    public async importData(clean :cleanedData) {
        const result = await db 
        .insertInto('EnergyReading')
        .values
    }
}

export default jsonImport;