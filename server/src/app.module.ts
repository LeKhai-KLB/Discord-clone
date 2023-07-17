import { Module } from "@nestjs/common";
import { typeormDatasource } from "./datasources/typeorm.datasource";
import { UsersModule } from "./features/users/users.module";
import { AuthModule } from "./features/auth/auth.module";

@Module({
  imports: [typeormDatasource, UsersModule, AuthModule],
})
export class AppModule {}
