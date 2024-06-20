import { MigrationInterface, QueryRunner } from "typeorm";

export class AddForenkyTwoTable1718902064387 implements MigrationInterface {
    name = 'AddForenkyTwoTable1718902064387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" ADD "userIdId" integer`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_99828614226a80e9362f89e3e79" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_99828614226a80e9362f89e3e79"`);
        await queryRunner.query(`ALTER TABLE "blog" DROP COLUMN "userIdId"`);
    }

}
