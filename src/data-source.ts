import { Category } from './domain/category/Category';
import { Item } from './domain/item/Item';
import { OrderItem } from './domain/order/OrderItem';
import { Address } from './domain/delivery/Address';
import { Delivery } from './domain/delivery/Delivery';
import { Order } from './domain/order/Order';
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
    entities: [Member, Order, Delivery, Address, OrderItem, Item, Category],
    migrations: [],
    subscribers: [],
});
