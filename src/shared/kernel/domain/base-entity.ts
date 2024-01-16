import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty()
  @Column("boolean", {
    default: true
  })
  enabled: boolean;

  @ApiProperty({
    description: "Entity creation date"
  })
  @CreateDateColumn({})
  createdAt: number;

  @UpdateDateColumn()
  @ApiProperty({
    description:"Entity last updated date"
  })
  updatedAt: number;

  @DeleteDateColumn()
  @ApiProperty({
    description:"Entity delete date"
  })
  deletedAt: number;
}
