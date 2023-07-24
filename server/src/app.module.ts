import { Module } from "@nestjs/common";
import { UserModule } from "~features/user/user.module";
import { AuthModule } from "~features/auth/auth.module";
import { cacheDatasource } from "~datasources/cache.datasource";
import { typeormDatasource } from "~datasources/typeorm.datasource";

@Module({
  imports: [typeormDatasource, cacheDatasource, UserModule, AuthModule],
})
export class AppModule {}
