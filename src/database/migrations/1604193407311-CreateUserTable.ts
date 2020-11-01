import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1604193407311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isGenerated: true,
                isPrimary: true,
                generationStrategy: 'increment',
              },
              {
                name: 'email',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'senha',
                type: 'varchar',
              }
          ]}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
