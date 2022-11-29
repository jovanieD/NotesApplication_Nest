import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [NotesModule],
  controllers: [NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {}
