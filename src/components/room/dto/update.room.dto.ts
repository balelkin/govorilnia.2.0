import { Schema, Types } from "mongoose";
import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from "class-validator";

export class UpdateRoomDto {
    @IsString()
    @Length(2, 30)
    @ApiProperty()
    readonly title?: string;
    
    @IsString()
    @Length(2, 30)
    @ApiProperty()
    readonly ownerId?: string;

    @IsString()
    @Length(2, 30)
    @ApiProperty()
    readonly description?: string;
    
    @ApiProperty()
    readonly usersId?: [string];
}