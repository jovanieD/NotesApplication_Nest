import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import { CreateNOtesDto } from 'src/dtos/createtask.dto';
import { Notes, NotesStatus } from './notes.model';
import { GetNotesFilterDto } from 'src/dtos/get-notes-filter.dto';

@Injectable()
export class NotesService {

        private notes : Notes[] = [
            {
                id : "123fwr11qe",
                title: "vanie",
                description : "vanie123",
                status: NotesStatus.OPEN
            },
            {
                id : "24sadf4tf4",
                title: "dasian",
                description : "dasian123",
                status: NotesStatus.OPEN
            }
        ];
    
        getAllNOtes(filterDto:GetNotesFilterDto) : Notes[] {
            const {status,search} = filterDto;
            let notes = this.notes;

            if (status){
                 notes= notes.filter(x => x.status === status);
            }
            if (search){
                notes= notes.filter(x => x.title.includes(search)|| x.description.includes(search));
            }
            return notes;
                
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
                description,
                status: NotesStatus.OPEN
            }

            this.notes.push(newNote)
            return newNote;

        }

        updateNote(id : string, title:string, status : NotesStatus ) : Notes{
            const note = this.getOneNote(id);
            note.title = title;
            note.status = status;
            return note;
        }

        deleteNote(id : string ): void {
            const result = this.getOneNote(id);
            this.notes = this.notes.filter(note => note.id !== result.id);
        }
}
