import express from "express";
import BaseConnection from "./BaseConnection";
import cors from "cors";
import { IncomingMessage, Server, ServerResponse } from "http";

type THttpInstance = Server<typeof IncomingMessage, typeof ServerResponse>;

export default class HttpConnection extends BaseConnection<THttpInstance> {
  CONNECTION_NAME = "http";
  private readonly host: string;
  private readonly port: number;

  constructor(host: string = "localhost", port: number = 3000) {
    super();
    this.host = host;
    this.port = port;
  }

  initialInstance() {
    const app = express();
    app.use(cors());
    app.use(express.json());

    const server = new Server(app);
    return server;
  }

  connect() {
    try {
      this.instance.listen(this.port, this.host, () => {
        console.log("listening on port " + this.port);
      });
    } catch (err: unknown) {
      console.error("Error: Raise error on module HttpConnection");
      console.log("======================");
      console.trace(err);
      console.log("======================");
    }
  }
}
