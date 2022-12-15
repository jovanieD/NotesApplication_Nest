import { CreateNOtesDto } from 'src/dtos/createtask.dto';
import { GetNotesFilterDto } from 'src/dtos/get-notes-filter.dto';
import { Notes, NotesStatus } from './notes.model';
import { NotesService } from './notes.service';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    getAllNotes(filterDto: GetNotesFilterDto): Notes[];
    getTask(id: string): Notes;
    deleteNote(id: string): void;
    createNote(body: CreateNOtesDto): Notes;
    updateNote(id: string, title: string, status: NotesStatus): Notes;
}
