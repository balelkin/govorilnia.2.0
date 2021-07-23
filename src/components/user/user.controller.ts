import { Body, Delete, Param, Patch, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/crate.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UpdateRoomDto } from '../room/dto/update.room.dto';
import { RoomService } from '../room/room.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { type } from 'os';


@ApiTags('User')
@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService, private readonly roomService: RoomService){}
    @UsePipes(new ValidationPipe())
    @ApiBody({type: CreateUserDto})  
    @Get('/')
        getAll(){
        return this.userService.getAll()
         }
    
    @UsePipes(new ValidationPipe())
    @ApiBody({type: CreateUserDto}) 
    @Get('/:id')
    findById(@Param('id') id: string ){
    return this.userService.findById(id)
    } 

    @UsePipes(new ValidationPipe())
    @ApiBody({type: CreateUserDto})     
    @Post('/')
    create(@Body() CreateUserDto: CreateUserDto){
    return this.userService.create(CreateUserDto)
    }

    @UsePipes(new ValidationPipe())
    @ApiBody({type: CreateUserDto})  
    @Delete('/:id')
    deleteUserById(@Param ('id') id: string){
        return this.userService.deleteUserById(id)
    }

    @UsePipes(new ValidationPipe())
    @ApiBody({type: UpdateUserDto})  
    @Patch('/:id')
    updateUserById(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string){
        return this.userService.updateUser(updateUserDto, id)
    };

    @UsePipes(new ValidationPipe())
    @ApiBody({type: UpdateUserDto})  
    @Post('/join-to-room')
    joinUserToRoom(@Body() updateUserDto: UpdateUserDto, @Param() userId, roomId) {
    }
      
    
}
