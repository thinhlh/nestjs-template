import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiBaseResponse } from "../../shared/decorators/api-base-response.decorator";
import { Category } from "./category.entity";
import { BaseResponse } from "src/shared/kernel/dto/base.response";
import { CategoryService } from "./category.service";
import { CreateCategoryRequest } from "./request/create-category.request";
import { UpdateCategoryRequest } from "./request/update-category.request";

@Controller("/categories")
@ApiTags("Category")
export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService
  ) {

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

  @Post("/:id")
  @ApiOperation({
    summary: "Get category by id"
  })
  @ApiBaseResponse({ format: Category })
  async getCategoryById(@Param("id", ParseUUIDPipe) id: string): Promise<BaseResponse<Category>> {
    const category = await this.categoryService.getCategoryById(id);

    return BaseResponse.success(category);
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

  @Patch("/:id")
  @ApiOperation({
    summary: "Update by category id"
  })
  @ApiBaseResponse({ format: Category })
  async updateCategory(@Param("id", ParseUUIDPipe) id: string, @Body() updateCategoryRequest: UpdateCategoryRequest): Promise<BaseResponse<Category>> {
    const category = await this.categoryService.updateCategory(id, updateCategoryRequest);

    return BaseResponse.success(category);
  }

  @Delete("/:id")
  @ApiOperation({
    summary: "Delete by category id"
  })
  @ApiBaseResponse({ format: Boolean })
  async deleteCategoryById(@Param("id", ParseUUIDPipe) id: string): Promise<BaseResponse<boolean>> {
    const result = await this.categoryService.deletedCategoryById(id);

    return BaseResponse.success(result);
  }
}
