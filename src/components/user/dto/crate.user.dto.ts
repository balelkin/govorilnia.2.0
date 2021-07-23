import { 
    IsEmail,
    IsString, 
    Length
 } from "class-validator";
 import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsString()
    @Length(2, 25)
    @ApiProperty()
    readonly name?: string;

    @IsEmail()
    @Length(2, 30)
    @ApiProperty()
    readonly email?: string;

    @IsString()
    @Length(6, 18)
    @ApiProperty()
    readonly password?: string;
} 