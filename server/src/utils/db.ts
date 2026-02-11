import { createPool } from 'mysql2';

import {Kysely, MysqlDialect} from 'kysely'
import { database } from '../types/databse'

const db = new Kysely<database>({
    dialect: new MysqlDialect({
        pool: async () => createPool({
            host: 'localhost',
            user: 'root',
            password: 'qwerty',
            database: 'noormeister',
        })
    })
})
export const databaseHealth = () => {
    if (db) {
       return true
    }
    
}


export default db;