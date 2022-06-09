//! knex

//? sqlite
export const createChatTable = async (db: any): Promise<void> => {
  await db.schema.createTable('chat', (table: any) => {
    table.increments('id').primary();
    table.string('message');
    table.string('email');
    table.string('time');
    table.string('dateString');
  });
};

//? mariadb
export const createProductTable = async (db: any): Promise<void> => {
  await db.schema.createTable('product', (table: any) => {
    table.increments('id').primary();
    table.string('title');
    table.float('price');
    table.string('thumbnail');
  });
};
