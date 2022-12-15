import { CreateNOtesDto } from 'src/dtos/createtask.dto';
import { Notes, NotesStatus } from './notes.model';
import { GetNotesFilterDto } from 'src/dtos/get-notes-filter.dto';
export declare class NotesService {
    private notes;
    getAllNOtes(filterDto: GetNotesFilterDto): Notes[];
    getOneNote(id: string): Notes;
    createNote(note: CreateNOtesDto): Notes;
    updateNote(id: string, title: string, status: NotesStatus): Notes;
    deleteNote(id: string): void;
}
