import { Body, Delete, Param, Patch, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/crate.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UpdateRoomDto } from 'src/room/dto/update.room.dto';
import { RoomService } from 'src/room/room.service';


@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService, private readonly roomService: RoomService){

}
    @Get('/')
    getAll(){
        return this.userService.getAll()
    }
    @Get('/:id')
    findById(@Param('id') id: string ){
    return this.userService.findById(id)
    }      
    @Post('/')
    create(@Body() CreateUserDto: CreateUserDto){
    return this.userService.create(CreateUserDto)
    }
    @Delete('/:id')
    deleteUserById(@Param ('id') id: string){
        return this.userService.deleteUserById(id)
    }
    @Patch('/:id')
    updateUserById(@Body() UpdateUserDto: UpdateUserDto, @Param('id') id: string){
        return this.userService.updateUser(UpdateUserDto, id)
    };
    @Post('/join-to-room')
    joinToRoom(UpdateRoomDto: UpdateRoomDto, userId, roomId){
        const oldRoom = this.userService.joinToRoom( userId, roomId, UpdateRoomDto)
        if (oldRoom !== null){
            this.userService.leaveFromRoom(oldRoom, userId)
        }
        return this.roomService.joinUserToRoom(roomId, userId, UpdateRoomDto)
    }
   
}
