import { Body, Delete, Param, Patch, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create.message.dto';
import { UpdateMessageDto } from './dto/update.message.dto';
import { MessageService } from './message.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Message')
@Controller('message')
export class MessageController {
    constructor (private readonly messageService: MessageService){

    };
    @ApiBody({type: CreateMessageDto})
    @Get('/')
    getAll(){
        return this.messageService.getAll()
    };

    @ApiBody({type: CreateMessageDto})
    @Get('/:id')
    findById(@Param('id') id: string ){
    return this.messageService.getMessageById(id)
    };   

    @ApiBody({type: CreateMessageDto})
    @Post('/')
    create(@Body() CreateMessageDto: CreateMessageDto){
    return this.messageService.createMessage(CreateMessageDto)
    };

    @ApiBody({type: CreateMessageDto})
    @Delete('/:id')
    deleteMessageById(@Param ('id') id: string){
        return this.messageService.deleteMessageById(id)
    };

    @ApiBody({type: UpdateMessageDto})
    @Patch('/:id')
    updateUserById(@Body() UpdateMessageDto: UpdateMessageDto, @Param('id') id: string){
        return this.messageService.updateMessageById(UpdateMessageDto, id)
    };

    @ApiBody({type: CreateMessageDto})
    @Get('/by-user/:userId')
    getAllMessageByUser(@Param('userId') userId: string ){
        return this.messageService.getAllMessageByUser(userId)
    };

    @ApiBody({type: CreateMessageDto})
    @Get('/by-room/:roomId')
    getAllMessageByRoom(@Param('roomId') roomId: string ){
        return this.messageService.getAllMessageByRoom(roomId)
    };
}
