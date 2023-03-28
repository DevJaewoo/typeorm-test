import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/Category';
@Entity({ name: 'item' })
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    stockQuantity: number;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];
}
