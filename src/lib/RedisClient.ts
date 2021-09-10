import { createClient, RedisClient as Client } from 'redis';
import { promisify } from 'util';

interface Options {
  host: string;
  port: number;
}

class RedisClient {
  private readonly _client: Client;

  constructor(options: Options) {
    this._client = createClient({
      host: options.host,
      port: options.port
    });
  }

  public async get<T extends string>(key: string): Promise<T | null> {
    const clientGet = promisify(this._client.get).bind(this._client);

    return await clientGet(key) as T;
  }

  public async set<T extends string | number | boolean>(key: string, value: T): Promise<void> {
    const clientSet = promisify(this._client.set).bind(this._client);

    await clientSet(key, typeof value === 'string' ? value : value.toString());
  }
}

export {
  RedisClient
};
