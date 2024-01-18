import { Provider } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { CustomExceptionFilter } from "./exception.filter";

export const appFilterProviders :Provider[] = [
    {
        provide: APP_FILTER,
        useClass: CustomExceptionFilter
    }
];
