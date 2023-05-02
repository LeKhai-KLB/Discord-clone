import BaseConnection from "./connections/BaseConnection";

type TConnectionMap = Record<string, BaseConnection<unknown>>;

export default class App {
  private readonly connectionMap: TConnectionMap;

  constructor() {
    this.connectionMap = {};
  }

  addConnection(name: string, instance: BaseConnection<unknown>): App {
    if (!this.connectionMap[name]) {
      this.connectionMap[name] = instance;
    }
    return this;
  }

  getConnection<TConnection>(name: string): TConnection {
    return this.connectionMap[name] as TConnection;
  }

  run() {
    for (const item of Object.values(this.connectionMap)) {
      item.connect();
    }
  }
}
