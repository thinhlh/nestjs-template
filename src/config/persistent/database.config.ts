import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigConstants } from "../config.constants";
import { EnvironmentType } from "src/shared/environment/environment";


export default registerAs(ConfigConstants.DATABASE, (): TypeOrmModuleOptions => {
    return {
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: +process.env.DATABASE_PORT,
        type: "postgres",

        logging: ["query", "error"],

        dropSchema: false,
        autoLoadEntities: true,
        entities: ["dist/src/**/*.entity.ts"],
        synchronize: process.env.NODE_ENV === EnvironmentType.DEV,
        migrationsTableName: "migrations",
        migrations: ["dist/migrations/*{.ts,.js}"],
    };
});
