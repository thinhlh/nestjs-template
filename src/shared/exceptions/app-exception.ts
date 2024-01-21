import { HttpException } from "@nestjs/common";
import { AppError } from "./app-error";

export class AppException extends HttpException {
    // You can declare more custom fields in the response

    constructor(error: AppError) {
        super(error.message, error.status);
    }
}
