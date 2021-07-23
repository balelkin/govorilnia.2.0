import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto  {
    @ApiProperty()
    @IsString()
    readonly ownerId?: string;

    @ApiProperty()
    @IsString()
    readonly roomId?: string;
    
    @ApiProperty()
    @IsString()
    readonly text?: string;
     }