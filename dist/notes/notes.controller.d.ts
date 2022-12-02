import { CreateNOtesDto } from 'src/dtos/createtask.dto';
import { Notes } from './notes.model';
import { NotesService } from './notes.service';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    getAllNotes(): Notes[];
    getTask(id: string): Notes;
    deleteNote(id: string): void;
    createNote(body: CreateNOtesDto): Notes;
    updateNote(id: string, title: string, description: string): Notes;
}
