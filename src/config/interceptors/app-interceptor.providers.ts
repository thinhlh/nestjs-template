import { ClassSerializerInterceptor, Provider } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";

export const appInterceptorProviders: Provider[] = [
    {
        provide: APP_INTERCEPTOR,
        useClass: ClassSerializerInterceptor
    }
];
