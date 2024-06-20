
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('blog')
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    content: string
    


    @Column({ nullable: true })
    user_id: User;
}
