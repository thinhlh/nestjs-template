import { Injectable } from "@nestjs/common";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductRequest } from "./request/create-product.request";
import { UpdateProductRequest } from "./request/update-product.request";
import { Category } from "../category/category.entity";
import { AppException } from "src/shared/exceptions/app-exception";
import { ProductError } from "./product.error";
import { CategoryError } from "../category/error/category.error";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductById(id: string): Promise<Product> {
    return this.productRepository.findOneByOrFail({ id }).catch(e => {
      throw new AppException(ProductError.PRODUCT_NOT_FOUND);
    });
  }

  async createProduct(createProductRequest: CreateProductRequest): Promise<Product> {
    return this.productRepository.save(createProductRequest, {
      reload: true,
    });
  }

  async updateProduct(id: string, updateProductRequest: UpdateProductRequest): Promise<Product> {
    const product = await this.getProductById(id);

    if (product.category.id !== updateProductRequest.categoryId) {
      const category = await this.categoryRepository.findOneByOrFail({ id });

      if (category) {
        product.category = category;
      } else {
        throw new AppException(CategoryError.CATEGORY_NOT_FOUND);
      }
    }

    const productToUpdate = { ...product, ...updateProductRequest };

    return this.productRepository.save(productToUpdate);
  }

  async deleteProduct(id: string): Promise<boolean> {

    // TODO implements delete product
    return true;
  }

  // TODO implements restore deleted product
}
