import { TypeOrmModule } from "@nestjs/typeorm";
import { DB_URL, DB_NAME } from "~common/constants";

export const typeormDatasource = TypeOrmModule.forRoot({
  type: "mongodb",
  url: DB_URL,
  database: DB_NAME,
  autoLoadEntities: true,
});
