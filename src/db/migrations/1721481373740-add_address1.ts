import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAddress11721481373740 implements MigrationInterface {
    name = 'AddAddress11721481373740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "address1" character varying  NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "address1"`);
    }

}
