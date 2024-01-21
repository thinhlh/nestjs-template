import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID, Min } from "class-validator";

export class CreateProductRequest {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @Min(0)
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  categoryId: string;
}
