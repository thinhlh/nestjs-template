import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/app/product/product";
import { BaseEntity } from "src/shared/base-entity";
import { Column, Entity, Index, OneToMany } from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @ApiProperty()
  @Column({
    unique: true,
  })
  @Index()
  title: string;

  @OneToMany(() => Product, (product) => product.category, {
    nullable: false
  })
  products: Product[];
}
