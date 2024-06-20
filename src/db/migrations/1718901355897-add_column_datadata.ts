import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnDatadata1718901355897 implements MigrationInterface {
    name = 'AddColumnDatadata1718901355897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "datadata" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "datadata"`);
    }

}
