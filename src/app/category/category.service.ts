import { Injectable } from "@nestjs/common";
import { Category } from "./category.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCategoryRequest } from "./request/create-category.request";
import { AppException } from "src/shared/exceptions/app-exception";
import { CategoryError } from "./error/category.error";
import { UpdateCategoryRequest } from "./request/update-category.request";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>) {

  }

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async createCategory(createCategoryRequest: CreateCategoryRequest): Promise<Category> {
    return this.categoryRepository.save({
      ...createCategoryRequest
    });
  }

  async updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({ id });

    if (category) {
      return this.categoryRepository.save({
        id,
        ...updateCategoryRequest,
        ...category,
      });
    } else {
      throw new AppException(CategoryError.CATEGORY_NOT_FOUND);
    }
  }

  async getCategoryById(id: string): Promise<Category> {
    return this.categoryRepository.findOneBy({ id });
  }

  async deletedCategoryById(id: string): Promise<boolean> {

    const category = await this.categoryRepository.findOneBy({ id });

    if (category) {
      category.enabled = false;
      category.deletedAt = Date.now();

      return true;
    } else {
      throw new AppException(CategoryError.CATEGORY_NOT_FOUND);
    }
  }

  async restoreDeletedCategoryById(id: string): Promise<boolean> {

    const category = await this.categoryRepository.findOneBy({ id });

    if (category) {
      category.enabled = true;
      category.deletedAt = undefined;

      return true;
    } else {
      throw new AppException(CategoryError.CATEGORY_NOT_FOUND);
    }
  }
}
