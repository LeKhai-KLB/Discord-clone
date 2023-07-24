import * as dotenv from "dotenv";

dotenv.config();

export const APP_HOST = process.env.APP_HOST ?? "localhost";
export const APP_PORT = +process.env.APP_PORT ?? 4000;
export const APP_SECRET = process.env.APP_SECRET ?? "discord_clone";

export enum ENV {
  PROD = "prod",
  DEV = "dev",
}

export const RUNTIME_ENV = (process.env.RUNTIME_ENV ?? "dev") as ENV;

export const DB_URL = process.env.DB_URL ?? "mongodb://localhost:27017";
export const DB_NAME = process.env.DB_NAME ?? "Discord_clone";

export const REDIS_HOST = process.env.REDIS_HOST ?? "localhost";
export const REDIS_PORT = +process.env.REDIS_PORT ?? 6379;
