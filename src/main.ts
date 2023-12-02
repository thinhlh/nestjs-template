import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { ClassSerializerInterceptor, INestApplication, ValidationPipe, VersioningType } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { CustomExceptionFilter } from "./config/filters/exception.filter";


const createApp = () => NestFactory.create(AppModule);

async function runApp(app: INestApplication) {
  app.listen(3000);
}

async function configApp(app: INestApplication) {
  app.enableShutdownHooks();

  app.setGlobalPrefix("/api");
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: "1" });

  app.useGlobalFilters(new CustomExceptionFilter());
  app.useGlobalInterceptors(
    // new ResponseInterceptor(),
    new ClassSerializerInterceptor(new Reflector(), {}),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // automatically transform request fields to desired type
    }),
  );
}

async function documentingApp(app: INestApplication) {
  const option = new DocumentBuilder()
    .setTitle("Thinh Nest Template API")
    .setVersion("0.0.1")
    .setDescription("The API documentation of application.")
    .setContact("thinhlh", "www.thinhlh.com", "thinhlh0812@gmail.com")
    .setLicense(
      "MIT license",
      "https://github.com/thinhlh/nestjs-template/blob/main/LICENSE",
    )
    .build();

  const document = SwaggerModule.createDocument(app, option);

  SwaggerModule.setup("/docs", app, document);
}

async function bootstrap() {
  const app = await createApp();

  configApp(app);
  documentingApp(app);
  runApp(app);
}

bootstrap();
