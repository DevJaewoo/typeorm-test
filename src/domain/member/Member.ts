import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../order/Order';
import { Address } from '../delivery/Address';

@Entity({ name: 'member' })
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column(() => Address, { prefix: false })
    address: Address;

    @OneToMany(() => Order, (order) => order.member)
    orders: Order[];
}
