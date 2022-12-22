import { CreateNotesDto } from 'src/dtos/createtnote.dto';
import { NotesStatus } from './notes.model';
import { Note } from './note.entity';
import { Repository } from 'typeorm';
export declare class NotesService {
    private noteRepository;
    constructor(noteRepository: Repository<Note>);
    getAllNotes(): Promise<Note[]>;
    getOneNote(id: number): Promise<Note>;
    createNote(createNote: CreateNotesDto): Promise<Note>;
    deleteNote(id: number): Promise<void>;
    updateNote(id: number, status: NotesStatus): Promise<{}>;
}
