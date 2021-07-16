import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from '..//room/dto/create.room.dto';
import { UpdateRoomDto } from '..//room/dto/update.room.dto';
import { UserService } from '../user/user.service';
@Controller('room')
export class RoomController {
    constructor (private readonly roomService: RoomService, private readonly userService: UserService){

    }
        @Get('/')
        getAll(){
            return this.roomService.getAll()
        }
        @Get('/:id')
        findById(@Param('id') id: string ){
        return this.roomService.findById(id)
        } 
       
        @Post('/')
         createRoom(@Body() CreateRoomDto: CreateRoomDto, UpdateUserDto, roomId, userId ){
        let room =  this.roomService.createRoom(CreateRoomDto)
        const oldRoom =  this.userService.joinToRoom(userId, roomId, UpdateUserDto )
        if (oldRoom !== null){
            this.roomService.leaveUserFromRoom(oldRoom, CreateRoomDto.ownerId) 
        }
        room = this.roomService.joinUserToRoom(roomId, userId, UpdateRoomDto )
        return room;
        }

        @Delete('/:id')
        deleteRoomById(@Param ('id') id: string){
            return this.roomService.deleteRoomById(id)
        }
        @Patch('/:id')
        updateRoomById(@Body() UpdateRoomDto: UpdateRoomDto, @Param('id') id: string){
            return this.roomService.updateRoom(UpdateRoomDto, id)
        };
        @Get('/by-user/:userId')
        getAllRoomsByUser(@Param('userId') userId){
            return this.roomService.getAllRoomsByUser(userId)
        }
    
}


