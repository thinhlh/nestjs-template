import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { BaseResponse } from "src/shared/kernel/dto/base.response";

@Controller()
@ApiTags("Common")
export class CommonController {
  @Get("/")
  @ApiOperation({
    summary: "Ping",
  })
  async ping(): Promise<BaseResponse<string>> {
    return BaseResponse.success("NestJS Template");
  }
}
