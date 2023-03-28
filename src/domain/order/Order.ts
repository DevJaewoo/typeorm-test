import { Delivery } from './../delivery/Delivery';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItem } from './OrderItem';
import { Member } from '../member/Member';
import { OrderStatus, TOrderStatus } from './OrderStatus';

@Entity({ name: 'orders' })
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Member, {})
    @JoinColumn({ name: 'member_id' })
    member: Member;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    orderItems: OrderItem[];

    @OneToOne(() => Delivery)
    @JoinColumn({ name: 'delivery_id' })
    delivery: Delivery;

    @Column()
    orderDate: Date;

    @Column({ type: 'enum', enum: OrderStatus })
    status: TOrderStatus;
}
