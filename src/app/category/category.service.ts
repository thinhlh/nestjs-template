import { Injectable } from "@nestjs/common";
import { Category } from "./category.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCategoryRequest } from "./create-category.request";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>) {

  }

  async getCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async createCategory(createCategory: CreateCategoryRequest): Promise<Category> {
    return this.categoryRepository.save({
      ...createCategory
    });
  }
}
