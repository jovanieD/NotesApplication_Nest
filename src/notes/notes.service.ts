import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import { CreateNOtesDto } from 'src/dtos/createtask.dto';
import { Notes } from './notes.model';

@Injectable()
export class NotesService {

        private notes : Notes[] = [
            {
                id : "123fwr11qe",
                title: "vanie",
                description : "vanie123"
            },
            {
                id : "24sadf4tf4",
                title: "dasian",
                description : "dasian123"
            }
        ];
    
        getAllNOtes() : Notes[] {
            return this.notes;
        }

        getOneNote ( id : string ): Notes {
            const note = this.notes.find(note => note.id == id );
    
            if (!this.notes){
                throw new NotFoundException();
            }
            return note;
        }

        createNote(note : CreateNOtesDto) : Notes{
            const { title , description} = note;

            const newNote : Notes = {
                id : uuidv4(),
                title,
                description
            }

            this.notes.push(newNote)
            return newNote;

        }

        updateNote(id : string,title : string,  description : string ) : Notes{
            const note = this.getOneNote(id);
            note.title = title;
            note.description = description;
            return note;
        }

        deleteNote(id : string ): void {
            const result = this.getOneNote(id);
            this.notes = this.notes.filter(note => note.id !== result.id);
        }
}
