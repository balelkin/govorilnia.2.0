import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoomService } from '../room/room.service';
import { CreateRoomDto } from '..//room/dto/create.room.dto';
import { UpdateRoomDto } from '..//room/dto/update.room.dto';
import { UserService } from '../user/user.service';
import { JoinToRoomDto } from './dto/joinToRoom.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { type } from 'os';

@ApiTags('Room')
@Controller('room')
export class RoomController {
    constructor (private readonly roomService: RoomService, private readonly userService: UserService){

    }
        @ApiBody({type: CreateRoomDto})
        @Get('/')
        getAll(){
            return this.roomService.getAll()
        }

        @ApiBody({type: CreateRoomDto})
        @Get('/:id')
        findById(@Param('id') id: string ){
        return this.roomService.findById(id)
        } 
       
        @ApiBody({type: CreateRoomDto})
        @Post('/')
         createRoom(@Body() createRoomDto: CreateRoomDto){
         return this.roomService.createRoom(createRoomDto)
        }

        @ApiBody({type: CreateRoomDto})
        @Delete('/:id')
        deleteRoomById(@Param ('id') id: string){
            return this.roomService.deleteRoomById(id)
        }

        @ApiBody({type: UpdateRoomDto})
        @Patch('/:id')
        updateRoomById(@Body() updateRoomDto: UpdateRoomDto, @Param('id') id: string){
            console.log('hello');
            
          return this.roomService.updateRoom(updateRoomDto, id)
        };
        @ApiBody({type: JoinToRoomDto})
        @Patch('/join-to-room/test')
        joinToRoom(@Body() joinToRoomDto: JoinToRoomDto, @Param('userId') userId){
            console.log(joinToRoomDto);
            return this.roomService.joinUserToRoom(joinToRoomDto.roomId, userId)
        }
        @ApiBody({type: CreateRoomDto})
        @Get('/by-user/:userId')
        getAllRoomsByUser(@Param('userId') userId){
            return this.roomService.getAllRoomsByUser(userId)
        }
        
    
}


