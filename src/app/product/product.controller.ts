import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Product } from "./product.entity";
import { CreateProductRequest } from "./create-product.request";
import { ApiBaseResponse } from "src/shared/decorators/api-base-response.decorator";
import { ProductService } from "./product.service";

@Controller("/products")
@ApiTags("Product")
export class ProductController {

  constructor(private readonly productService: ProductService) { }

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
  async createProduct(@Body() createProductRequestDTO: CreateProductRequest): Promise<Product> {
    return this.productService.createProduct(createProductRequestDTO);
  }
}
