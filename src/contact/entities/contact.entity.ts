import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column()
    address1: string;
}
