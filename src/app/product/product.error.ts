import { HttpStatus } from "@nestjs/common";
import { AppError } from "src/shared/exceptions/app-error";

export class ProductError extends AppError {

    static readonly PRODUCT_NOT_FOUND = new ProductError("Product not found", HttpStatus.NOT_FOUND);

    constructor(public message: string, public status: HttpStatus) {
        super(message, status);
    }
}
