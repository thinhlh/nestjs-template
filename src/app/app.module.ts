import { ClassSerializerInterceptor, Module, ValidationPipe } from "@nestjs/common";
import { CommonModule } from "./common/common.module";
import { environmentSchema } from "src/config/environment/environment";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { CustomExceptionFilter } from "src/config/filters/exception.filter";
import { ProductModule } from "src/product/product.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./env/.${process.env.NODE_ENV}.env`,
      validationSchema: environmentSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService<Environment>) => ({
    //     host: configService.get("DATABASE_HOST"),
    //     username: configService.get("DATABASE_USER"),
    //     password: configService.get("DATABASE_PASSWORD"),
    //     database: configService.get("DATABASE_NAME"),
    //     port: configService.get("DATABASE_PORT"),
    //     type: "postgres",

    //     autoLoadEntities: true,
    //     synchronize: configService.get("NODE_ENV") === EnvironmentType.DEV,
    //   }),
    // }),
    CommonModule,
    ProductModule
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter
    },
    {
      provide: APP_PIPE,
      useFactory: () => {
        return new ValidationPipe({
          whitelist: true,
          forbidNonWhitelisted: true, // Throw error if unexpected property appears
          transform: true, // automatically transform request fields to desired type
        });
      }
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ]
})
export class AppModule { }
