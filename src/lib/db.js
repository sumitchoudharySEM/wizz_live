import mysql from "mysq12/promise";

let connection;

export const createConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: progess.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });
  }
};
