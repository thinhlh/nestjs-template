import { Module } from "@nestjs/common";
import { environmentSchema } from "src/shared/environment/environment";
import { ConfigModule } from "@nestjs/config";
import { CommonModule } from "./common/common.module";
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { DatabaseModule } from "src/config/persistent/database.module";
import { appFilterProviders } from "src/config/filters/app-filter.providers";
import { appInterceptorProviders } from "src/config/interceptors/app-interceptor.providers";
import { appPipeProviders } from "src/config/pipes/app-pipe.providers";
import databaseConfig from "src/config/persistent/database.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./env/.${process.env.NODE_ENV}.env`,
      ignoreEnvFile: process.env.NODE_ENV !== "dev",
      validationSchema: environmentSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
      load: [databaseConfig]
    }),

    DatabaseModule,
    CommonModule,
    ProductModule,
    CategoryModule,
  ],
  providers: [
    ...appFilterProviders,
    ...appInterceptorProviders,
    ...appPipeProviders
  ]
})
export class AppModule { }
