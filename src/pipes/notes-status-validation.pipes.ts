import {ArgumentMetadata, BadRequestException, PipeTransform} from "@nestjs/common";
import { NotesStatus } from "src/notes/notes.model";

export class NotesStatusValidationPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata){  
        if (!this.isStatusValid(value)){
            throw new BadRequestException(`${value} is not a valid status`);
        }
        return value;

    }
    private isStatusValid(status: any){
        return Object.values(NotesStatus).includes(status.toUpperCase() as NotesStatus);
    }
}