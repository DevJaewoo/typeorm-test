import {
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { Item } from '../item/Item';

@Entity({ name: 'category' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Item)
    items: Item[];

    @OneToMany(() => Category, (item) => item.child)
    parent: Category;

    @ManyToOne(() => Category)
    child: Item[];
}
