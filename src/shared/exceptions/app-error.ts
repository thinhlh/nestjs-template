import { HttpStatus } from "@nestjs/common";

export class AppError extends Error {
    // Custom more fields in the error (stacks, causes, internal code,...)
    constructor(public message: string, public status: HttpStatus) {
        super(message);
    }
}
