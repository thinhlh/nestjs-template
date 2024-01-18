import { Body, Controller, Get, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiBaseResponse } from "../../shared/decorators/api-base-response.decorator";
import { Category } from "./category.entity";
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
  @ApiBaseResponse({
    format: [Category],
    status: HttpStatus.OK
  })
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
  @ApiBaseResponse({
    format: Category
  })
  async createCategory(@Body() createCategoryRequest: CreateCategoryRequest): Promise<BaseResponse<Category>> {
    const category = await this.categoryService.createCategory(createCategoryRequest);

    return BaseResponse.success(category);
  }
}
