import { Module } from "@nestjs/common";
import { CommonModule } from "./common/common.module";
import { Environment, environmentSchema } from "src/config/environment/environment";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

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
    CommonModule
  ],
})
export class AppModule { }
