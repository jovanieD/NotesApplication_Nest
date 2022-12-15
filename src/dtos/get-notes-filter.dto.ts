import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { NotesStatus } from "src/notes/notes.model";

export class GetNotesFilterDto{
    @IsOptional()
    @IsIn(Object.values(NotesStatus))
    status: NotesStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}