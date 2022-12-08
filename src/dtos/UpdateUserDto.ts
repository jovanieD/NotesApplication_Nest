import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateUserDto{ 
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    title: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(150)
    description: string;
}