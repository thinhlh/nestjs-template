import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Environment } from "src/config/environment/environment";

@Injectable()
export class ProductService {
  constructor(private readonly configService: ConfigService<Environment>) {
  }
}
