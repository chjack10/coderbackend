import { Sequelize } from 'sequelize';

export const sqliteDB = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/ecommerce.sqlite',
  logging: false,
  define: {
    freezeTableName: true,
  },
});

export const mariaDB = new Sequelize({
  dialect: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  logging: false,
  define: {
    freezeTableName: true,
  },
});
