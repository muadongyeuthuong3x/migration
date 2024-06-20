import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

type CustomTypeOrmModuleOptions = TypeOrmModuleOptions & {
    cli?: {
      migrationsDir: string;
    };
};

export const configDataConnect: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'testmigrate',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: false,
};


const dataSource = new DataSource(configDataConnect)
export default dataSource;