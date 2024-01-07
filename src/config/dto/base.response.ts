import { ApiProperty } from "@nestjs/swagger";

export class BaseResponse<T> {

  @ApiProperty({
    description: "Indicate the status of the response"
  })
  success: boolean;

  @ApiProperty({
    description: "Error message. Will be null if there is no error",
  })
  message?: string;

  @ApiProperty({
    description: "Results of the request",
  })
  data?: T;

  constructor(success: boolean, message?: string, data?: T) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  static success<T>(data?: T): BaseResponse<T> {
    return new BaseResponse(true, null, data);
  }

  static error<T>(message?: string): BaseResponse<T> {
    return new BaseResponse(false, message, null);
  }
}
