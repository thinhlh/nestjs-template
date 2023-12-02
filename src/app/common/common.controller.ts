import { Controller, Get } from "@nestjs/common";
import { BaseResponse } from "src/config/dto/base.response";

@Controller()
export class CommonController {
  @Get("/")
  async ping() {
    return BaseResponse.success("Hello");
  }
}
