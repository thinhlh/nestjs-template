import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductAddSampleColumn1705604780068 implements MigrationInterface {
    name = "UpdateProductAddSampleColumn1705604780068";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE \"product\" ADD \"sample\" boolean NOT NULL DEFAULT true");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE \"product\" DROP COLUMN \"sample\"");
    }

}
