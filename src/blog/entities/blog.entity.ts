
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('blog')
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    content: string
    
}
