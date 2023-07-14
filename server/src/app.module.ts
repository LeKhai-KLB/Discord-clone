import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { typeormDatasource } from "./datasources/typeorm.datasource";

@Module({
  imports: [typeormDatasource],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
