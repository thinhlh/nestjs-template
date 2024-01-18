import { Injectable } from "@nestjs/common";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductRequest } from "./create-product.request";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {
  }

  async createProduct(createProductRequest: CreateProductRequest): Promise<Product> {
    return this.productRepository.save(createProductRequest, {
      reload: true,
    });
  }
}
