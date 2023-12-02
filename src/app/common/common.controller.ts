import { Body, Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiProperty, ApiTags, getSchemaPath } from "@nestjs/swagger";
import { BaseResponse } from "src/config/dto/base.response";
import { ApiBaseResponse } from "../decorators/api-base-response.decorator";

class Student {
  @ApiProperty({
    description: "ID"
  })
  id: string;

  @ApiProperty({
    description: "Name"
  })
  name: string;
}

@Controller()
export class CommonController {
  @Get("/")
  @ApiTags("Common")
  @ApiBaseResponse(Student)
  @ApiOperation({
    summary: "Ping",
  })
  async ping(@Body() student: Student): Promise<BaseResponse<string>> {
    return BaseResponse.success("Hello");
  }
}
