import { BaseEntity } from "typeorm";
import { NotesStatus } from "./notes.model";
export declare class Note extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: NotesStatus;
    createdDate: Date;
}
