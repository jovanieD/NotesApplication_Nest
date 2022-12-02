import { CreateNOtesDto } from 'src/dtos/createtask.dto';
import { Notes } from './notes.model';
export declare class NotesService {
    private notes;
    getAllNOtes(): Notes[];
    getOneNote(id: string): Notes;
    createNote(note: CreateNOtesDto): Notes;
    updateNote(id: string, title: string, description: string): Notes;
    deleteNote(id: string): void;
}
