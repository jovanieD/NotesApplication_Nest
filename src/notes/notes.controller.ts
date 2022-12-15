import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { title } from 'process';
import { CreateNOtesDto } from 'src/dtos/createtask.dto';
import { GetNotesFilterDto } from 'src/dtos/get-notes-filter.dto';

import { UpdateUserDto } from 'src/dtos/UpdateUserDto';
import { NotesStatusValidationPipe } from 'src/pipes/notes-status-validation.pipes';
import { Notes, NotesStatus } from './notes.model';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {

    constructor ( private notesService : NotesService){}

    @Get()
    getAllNotes(@Query(ValidationPipe) filterDto:GetNotesFilterDto): Notes[] {
        return this.notesService.getAllNOtes(filterDto);
          
    }

    @Get('/:id')
    getTask( @Param('id')  id : string ) {
        return this.notesService.getOneNote(id);
    }

    @Delete(':id')
    deleteNote(@Param('id') id: string): void {
        this.notesService.deleteNote(id);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createNote(@Body() body: CreateNOtesDto): Notes{
        return this.notesService.createNote(body);
    }

    @Patch(':id')
    updateNote(@Param('id') id: string, @Body('title')title:string, @Body('status', NotesStatusValidationPipe) status: NotesStatus): Notes{
        return this.notesService.updateNote (id,title,status);
    }

}