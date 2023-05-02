export default abstract class BaseConnection<TInstance> {
  static readonly CONNECTION_NAME: string;
  protected readonly instance: TInstance;

  constructor() {
    this.instance = this.initialInstance();
  }

  protected abstract initialInstance(): TInstance;

  getInstance(): TInstance {
    return this.instance;
  }

  abstract connect(): void;
}
