import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { ConfigConstants } from "../config.constants";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService:ConfigService)=> configService.get(ConfigConstants.DATABASE)
        }),
        
    ]
})
export class DatabaseModule {

}
