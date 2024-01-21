import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Product } from "./product.entity";
import { CreateProductRequest } from "./request/create-product.request";
import { ApiBaseResponse } from "src/shared/decorators/api-base-response.decorator";
import { ProductService } from "./product.service";
import { BaseResponse } from "src/shared/kernel/dto/base.response";

@Controller("/products")
@ApiTags("Product")
export class ProductController {

  constructor(private readonly productService: ProductService) { }

  @Get("/")
  @ApiBaseResponse({
    format: [Product]
  })
  async getProducts(): Promise<BaseResponse<Product[]>> {
    return BaseResponse.success([]);
  }

  @Post("/")
  @HttpCode(HttpStatus.OK)
  @ApiBaseResponse({
    format: Product
  })
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
  async createProduct(@Body() createProductRequestDTO: CreateProductRequest): Promise<BaseResponse<Product>> {
    const result = await this.productService.createProduct(createProductRequestDTO);

    return BaseResponse.success(result);
  }
}
