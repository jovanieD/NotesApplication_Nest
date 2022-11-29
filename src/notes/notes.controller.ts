import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { title } from 'process';
import { CreateNOtesDto } from 'src/dtos/createtask.dto';

import { UpdateUserDto } from 'src/dtos/UpdateUserDto';
import { Notes } from './notes.model';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {

    constructor ( private notesService : NotesService){}

    @Get()
    getAllNotes(): Notes[] {
        return this.notesService.getAllNOtes();
          
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
    createNote(@Body() body: CreateNOtesDto): Notes{
        return this.notesService.createNote(body);
    }

    @Patch(':id')
    updateNote(@Param('id') id: string, @Body('title') title: string, @Body('description') description: string): Notes{
        return this.notesService.updateNote (id,title, description);
    }

}