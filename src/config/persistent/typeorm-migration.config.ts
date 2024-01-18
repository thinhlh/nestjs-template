// ORM migration config

import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./database.config";
import { DataSource, DataSourceOptions } from "typeorm";

ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `./env/.${process.env.NODE_ENV}.env`,
    ignoreEnvFile: process.env.NODE_ENV !== "dev",
    load: [databaseConfig]
});

const datasource = new DataSource(databaseConfig() as DataSourceOptions); // config is one that is defined in datasource.config.ts file

datasource.initialize();

export default datasource;
