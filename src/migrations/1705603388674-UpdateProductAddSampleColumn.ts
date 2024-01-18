import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductAddSampleColumn1705603388674 implements MigrationInterface {
    name = "UpdateProductAddSampleColumn1705603388674";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE \"product\" ADD \"sample\" boolean NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE \"product\" DROP COLUMN \"sample\"");
    }

}
