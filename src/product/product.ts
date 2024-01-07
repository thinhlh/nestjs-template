import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Min } from "class-validator";

export class Product {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @Min(0)
  price: number;
}
