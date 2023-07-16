import { Module } from "@nestjs/common";
import { typeormDatasource } from "./datasources/typeorm.datasource";
import { UsersModule } from "./features/users/users.module";

@Module({
  imports: [typeormDatasource, UsersModule],
})
export class AppModule {}
