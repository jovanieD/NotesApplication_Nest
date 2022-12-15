import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class NotesStatusValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
