import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Min } from "class-validator";
import { Column, Entity, Index, ManyToOne } from "typeorm";
import { Category } from "../category/category.entity";
import { BaseEntity } from "../../shared/kernel/domain/base-entity";

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

  @Column({
    nullable: false,
    default: false,
  })
  sample: boolean;
}
