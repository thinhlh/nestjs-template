import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @Column("boolean", {
    default: true
  })
  enabled: boolean;
}
