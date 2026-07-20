import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const itemsTable = pgTable("items", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
});
