import { Provider, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";

export const appPipeProviders: Provider[] = [
    {
        provide: APP_PIPE,
        useFactory: () => {
            return new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true, // Throw error if unexpected property appears
                transform: true, // automatically transform request fields to desired type
            });
        }
    }
];
