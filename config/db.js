import pg from "pg";
const {Pool} = pg;
import "dotenv/config";

const {DB_HOST, DB_PASSWORD, DB_DATABASE, DB_USERNAME} = process.env;

const config = {
    user: DB_USERNAME,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true
};

export const pool = new Pool(config);