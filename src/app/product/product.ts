import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Min } from "class-validator";
import { Category } from "src/app/category/category";
import { BaseEntity } from "src/shared/kernel/domain/base-entity";
import { Column, Entity, Index, ManyToOne } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @ApiProperty()
  @IsNotEmpty()
  @Column()
  @Index()
  title: string;

  @ApiProperty()
  @Min(0)
  @Column()
  price: number;

  @ManyToOne(() => Category, (category) => category.products, {
    nullable: false
  })
  category: Category;
}
