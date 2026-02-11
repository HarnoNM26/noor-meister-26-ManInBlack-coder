import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('energyReading')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('timestamp', 'timestamp', col => col.notNull())
    .addColumn('location', 'varchar', col => col.notNull())
    .addColumn('price_to_mwh', 'integer', col => col.notNull())
    .addColumn('source', 'varchar')
    .addColumn('created_at', 'timestamp', col => col.notNull())
    .execute
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('energyReading').execute()
}