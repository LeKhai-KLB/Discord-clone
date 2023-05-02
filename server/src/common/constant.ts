import * as dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

export const APP_HOST = process.env.APP_HOST || "localhost";
export const APP_PORT = (process.env.APP_PORT as unknown as number) || 3000;
