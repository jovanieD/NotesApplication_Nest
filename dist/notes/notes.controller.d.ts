import { CreateNotesDto } from 'src/dtos/createtnote.dto';
import { NotesStatus } from './notes.model';
import { NotesService } from './notes.service';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    getAllNotes(): Promise<import("./note.entity").Note[]>;
    getOneNote(id: number): Promise<import("./note.entity").Note>;
    createNote(body: CreateNotesDto): Promise<import("./note.entity").Note>;
    deleteNote(id: number): void;
    updateNote(id: number, status: NotesStatus): Promise<{}>;
}
