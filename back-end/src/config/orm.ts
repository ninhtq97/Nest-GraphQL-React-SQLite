import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/rocketseat.db',
  logging: true,
  entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
  cli: {
    entitiesDir: 'src/db/models',
    migrationsDir: 'src/db/migrations',
  },
};

module.exports = options;
