import { DeliveryStatus, TDeliveryStatus } from './DeliveryStatus';
import { Order } from './../order/Order';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './Address';

@Entity({ name: 'delivery' })
export class Delivery {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Order)
    order: Order;

    @Column(() => Address, { prefix: false })
    address: Address;

    @Column({ type: 'enum', enum: DeliveryStatus })
    status: TDeliveryStatus;
}
