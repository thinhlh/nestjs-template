import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Product } from "./product";
import { CreateProductRequestDTO } from "./create-product-request.dto";
import { ApiBaseResponse } from "src/app/decorators/api-base-response.decorator";

@Controller("/product")
@ApiTags("Product")
export class ProductController {

  @Get("/")
  @ApiBaseResponse(Product)
  async getProducts(): Promise<Product[]> {
    return [];
  }

  @Post("/")
  @HttpCode(HttpStatus.OK)
  @ApiBaseResponse(Product)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Product created"
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid format"
  })
  @ApiOperation({
    summary: "Create product"
  })
  async createProduct(@Body() createProductRequestDTO: CreateProductRequestDTO): Promise<Product> {
    return ({
      id: "2",
      ...createProductRequestDTO
    });
  }
}
