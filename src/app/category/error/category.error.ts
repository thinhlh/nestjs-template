import { HttpStatus } from "@nestjs/common";
import { AppError } from "src/shared/exceptions/app-error";

export class CategoryError extends AppError {

    static readonly CATEGORY_NOT_FOUND = new CategoryError("Category not found", HttpStatus.NOT_FOUND);

    constructor(public message: string, public status: HttpStatus) {
        super(message, status);
    }
}
