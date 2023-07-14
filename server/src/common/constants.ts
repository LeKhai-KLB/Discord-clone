import * as dotenv from "dotenv";

dotenv.config();

export const APP_HOST = process.env.APP_HOST ?? "localhost";
export const APP_PORT = +process.env.APP_PORT ?? 4000;

export const DB_URL = process.env.DB_URL || "mongodb://localhost:27017";
export const DB_NAME = process.env.DB_NAME ?? "Discord_clone";
