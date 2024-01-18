import { Body, Controller, Get, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiBaseResponse } from "../../shared/decorators/api-base-response.decorator";
import { Category } from "./category";
import { BaseResponse } from "src/shared/kernel/dto/base.response";
import { CategoryService } from "./category.service";
import { CreateCategoryRequest } from "./create-category.request";

@Controller("/categories")
@ApiTags("Category")
export class CategoryController {

  constructor(private readonly categoryService: CategoryService) {

  }

  @Get("/")
  @ApiOperation({
    summary: "Get categories"
  })
  @ApiResponse({
    status: HttpStatus.OK
  })
  @ApiBaseResponse([Category])
  async getCategories(): Promise<BaseResponse<Category[]>> {
    const categories = await this.categoryService.getCategories();
    return BaseResponse.success(categories);
  }

  @Post("/")
  @ApiOperation({
    summary: "Create category"
  })
  @ApiResponse({
    status: HttpStatus.OK
  })
  async createCategory(@Body() createCategoryRequest: CreateCategoryRequest): Promise<BaseResponse<Category>> {
    const category = await this.categoryService.createCategory(createCategoryRequest);

    return BaseResponse.success(category);
  }
}
