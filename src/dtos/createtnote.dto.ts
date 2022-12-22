import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateNotesDto{ 
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    title: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(150)
    description: string;
}