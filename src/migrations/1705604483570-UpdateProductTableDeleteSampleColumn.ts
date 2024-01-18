import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductTableDeleteSampleColumn1705604483570 implements MigrationInterface {
    name = "UpdateProductTableDeleteSampleColumn1705604483570";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE \"product\" DROP COLUMN \"sample\"");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE \"product\" ADD \"sample\" boolean NOT NULL");
    }

}
