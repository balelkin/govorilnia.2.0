import { Body, Delete, Param, Patch, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create.message.dto';
import { UpdateMessageDto } from './dto/update.message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor (private readonly messageService: MessageService){

    };
    @Get('/')
    getAll(){
        return this.messageService.getAll()
    };
    @Get('/:id')
    findById(@Param('id') id: string ){
    return this.messageService.getMessageById(id)
    };   
    @Post('/')
    create(@Body() CreateMessageDto: CreateMessageDto){
    return this.messageService.createMessage(CreateMessageDto)
    };
    @Delete('/:id')
    deleteMessageById(@Param ('id') id: string){
        return this.messageService.deleteMessageById(id)
    };
    @Patch('/:id')
    updateUserById(@Body() UpdateMessageDto: UpdateMessageDto, @Param('id') id: string){
        return this.messageService.updateMessageById(UpdateMessageDto, id)
    };
    @Get('/by-user/:userId')
    getAllMessageByUser(@Param('userId') userId: string ){
        return this.messageService.getAllMessageByUser(userId)
    };
    @Get('/by-room/:roomId')
    getAllMessageByRoom(@Param('roomId') roomId: string ){
        return this.messageService.getAllMessageByRoom(roomId)
    };
}
