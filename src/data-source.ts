import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Member } from './domain/member/Member';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
    synchronize: true,
    logging: true,
    entities: [Member],
    migrations: [],
    subscribers: [],
});
