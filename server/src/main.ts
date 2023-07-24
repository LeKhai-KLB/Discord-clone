import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import {
  APP_HOST,
  APP_PORT,
  APP_SECRET,
  ENV,
  RUNTIME_ENV,
} from "~common/constants";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import cookieParser from "cookie-parser";
import session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(
    session({
      secret: APP_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: RUNTIME_ENV === ENV.PROD,
      },
    })
  );

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
