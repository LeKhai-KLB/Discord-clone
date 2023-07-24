import * as redisStore from "cache-manager-redis-store";
import { APP_HOST, APP_PORT } from "~common/constants";
import { CacheModule } from "@nestjs/cache-manager";
import type { RedisClientOptions } from "redis";

export const cacheDatasource = CacheModule.register<RedisClientOptions>({
  store: redisStore,
  host: APP_HOST,
  port: APP_PORT,
});
