import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAddress1721481116209 implements MigrationInterface {
    name = 'AddAddress1721481116209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "blog" ("id" SERIAL NOT NULL, "content" character varying, CONSTRAINT "PK_85c6532ad065a448e9de7638571" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog"`);
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
