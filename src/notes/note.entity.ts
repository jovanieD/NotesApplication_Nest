import{BaseEntity,Entity,PrimaryGeneratedColumn,Column} from "typeorm";
import { NotesStatus } from "./notes.model";



@Entity()
export class Note extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: NotesStatus;

    @Column()
    createdDate: Date;
}