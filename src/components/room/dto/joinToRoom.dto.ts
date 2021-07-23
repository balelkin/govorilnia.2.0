import { 
  IsString,
  Length, 
 } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class JoinToRoomDto {
    @IsString()
    @Length(2, 30)
    @ApiProperty()
   readonly roomId?: string;
   @ApiProperty()
   readonly usersId?: [string]; 
}