import { Blog } from "src/blog/entities/blog.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    user: string

    @Column({ unique: true })
    data: string

    @Column()
    chiu: string

    @Column({ nullable: true })
    datadata: string;
   

    
}
