import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { APP_HOST, APP_PORT } from "./common/constants";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const documentConfig = new DocumentBuilder()
    .setTitle("Discord clone")
    .setDescription("The Discord clone project document")
    .setVersion("1.0.0")
    .addTag("users")
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup("document", app, document);

  await app.listen(APP_PORT, APP_HOST);
}
bootstrap();
