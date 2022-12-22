import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateNotesDto } from 'src/dtos/createtnote.dto';
import { GetNotesFilterDto } from 'src/dtos/get-notes-filter.dto';
import { NotesStatus } from './notes.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {

    constructor(
        @InjectRepository(Note) private noteRepository: Repository<Note>
    ) { }

    async getAllNotes(): Promise<Note[]> {
        try {
            const result = await this.noteRepository.find();
            return result;

        } catch (error) {
            //throw err
        }
    }

    async getOneNote(id: number): Promise<Note> {
        try {
            const note = await this.noteRepository.findOneBy({ id })
            if (!note) {
                throw new NotFoundException("Note not found!");
            }
            return note;

        } catch (error) {
            //throw err

        }
    }

    async createNote(createNote: CreateNotesDto): Promise<Note> {
        try {
            const newNote = this.noteRepository.create({
                ...createNote,
                status: NotesStatus.OPEN,
                createdDate: new Date()
            });
            const result = await this.noteRepository.save(newNote);
            return result;

        } catch (error) {
            //throw err

        }
    }

    async deleteNote(id: number): Promise<void> {
        try {
            const result = this.getOneNote(id);
            await this.noteRepository.delete({ id });
            
        } catch (error) {
            //throw err
        }
    }

    async updateNote(id: number, status: NotesStatus): Promise<{}> {
        try {
            const note = this.getOneNote(id);
            const result = await this.noteRepository.update({id}, {status});
            return {
                message: "Successfully Updated!"
            }

        } catch (error) {
            //throw err

        }
    }
}
