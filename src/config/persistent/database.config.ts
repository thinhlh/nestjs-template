import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigConstants } from "../config.constants";


export default registerAs(ConfigConstants.DATABASE, (): TypeOrmModuleOptions => {
    return {
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: +process.env.DATABASE_PORT,
        type: "postgres",

        dropSchema: false,
        autoLoadEntities: true,
        entities: ["src/**/*.entity.ts"],
        // synchronize: process.env.NODE_ENV === EnvironmentType.DEV,
        synchronize: false,

        logging: ["query", "error"],

        migrationsTableName: "migrations",
        migrations: ["src/migrations/*{.ts,.js}"],
    };
});
