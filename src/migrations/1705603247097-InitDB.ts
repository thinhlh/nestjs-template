import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDB1705603247097 implements MigrationInterface {
    name = "InitDB1705603247097";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE \"product\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"enabled\" boolean NOT NULL DEFAULT true, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, \"title\" character varying NOT NULL, \"price\" integer NOT NULL, \"categoryId\" uuid NOT NULL, CONSTRAINT \"PK_bebc9158e480b949565b4dc7a82\" PRIMARY KEY (\"id\"))");
        await queryRunner.query("CREATE INDEX \"IDX_f7bf944ad9f1034110e8c2133a\" ON \"product\" (\"title\") ");
        await queryRunner.query("CREATE TABLE \"category\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"enabled\" boolean NOT NULL DEFAULT true, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"deletedAt\" TIMESTAMP, \"title\" character varying NOT NULL, CONSTRAINT \"UQ_9f16dbbf263b0af0f03637fa7b5\" UNIQUE (\"title\"), CONSTRAINT \"PK_9c4e4a89e3674fc9f382d733f03\" PRIMARY KEY (\"id\"))");
        await queryRunner.query("CREATE INDEX \"IDX_9f16dbbf263b0af0f03637fa7b\" ON \"category\" (\"title\") ");
        await queryRunner.query("ALTER TABLE \"product\" ADD CONSTRAINT \"FK_ff0c0301a95e517153df97f6812\" FOREIGN KEY (\"categoryId\") REFERENCES \"category\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE \"product\" DROP CONSTRAINT \"FK_ff0c0301a95e517153df97f6812\"");
        await queryRunner.query("DROP INDEX \"public\".\"IDX_9f16dbbf263b0af0f03637fa7b\"");
        await queryRunner.query("DROP TABLE \"category\"");
        await queryRunner.query("DROP INDEX \"public\".\"IDX_f7bf944ad9f1034110e8c2133a\"");
        await queryRunner.query("DROP TABLE \"product\"");
    }

}
