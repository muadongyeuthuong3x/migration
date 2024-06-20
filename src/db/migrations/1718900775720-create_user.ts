import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1718900775720 implements MigrationInterface {
    name = 'CreateUser1718900775720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "user" character varying NOT NULL, "data" character varying NOT NULL, "chiu" character varying NOT NULL, CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a" UNIQUE ("user"), CONSTRAINT "UQ_a2e00974ce6b414604255f91842" UNIQUE ("data"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
