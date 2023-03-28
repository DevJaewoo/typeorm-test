import { Column } from 'typeorm';

export class Address {
    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    zipcode: string;

    public constructor(city, street, zipcode) {
        this.city = city;
        this.street = street;
        this.zipcode = zipcode;
    }
}
