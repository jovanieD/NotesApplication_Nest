import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { title } from 'process';
import { CreateNotesDto} from 'src/dtos/createtnote.dto';
import { GetNotesFilterDto } from 'src/dtos/get-notes-filter.dto';

import { UpdateUserDto } from 'src/dtos/UpdateUserDto';
import { NotesStatusValidationPipe } from 'src/pipes/notes-status-validation.pipes';
import { Notes, NotesStatus } from './notes.model';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {

    constructor ( private notesService : NotesService){}

    @Get()
    getAllNotes() {
        return this.notesService.getAllNotes();
          
    }

    @Get('/:id')
    getOneNote( @Param('id', ParseIntPipe)  id :number){
        return this.notesService.getOneNote(id);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createNote(@Body() body: CreateNotesDto){
        return this.notesService.createNote(body);
    }

    @Delete(':id')
    deleteNote(@Param('id', ParseIntPipe) id: number): void {
        this.notesService.deleteNote(id);
    }

    @Patch('/:id')
    updateNote(@Param('id', ParseIntPipe) id: number, @Body('status', NotesStatusValidationPipe) status: NotesStatus){
        return this.notesService.updateNote (id, status);
    }

}