import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create.message.dto';
import { IMessage } from './interfaces/message.interfaces';

@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private readonly MessageModel: Model<IMessage>){
    }

    async getAll(){
        return await this.MessageModel.find({}).lean().limit(10)
    };
    async getMessageById(id : string){
        return await this.MessageModel.findById(id)
    };
    async createMessage(CreateMessageDto: CreateMessageDto){
        const createMessage = new this.MessageModel(CreateMessageDto)
        return await createMessage.save()
    };
    async deleteMessageById(id: string){
        return await this.MessageModel.findByIdAndDelete(id)
    };
    async updateMessageById(UpdateMessageDto, id){
        return await this.MessageModel.findByIdAndUpdate(id, UpdateMessageDto)
    };
    async getAllMessageByUser (userId){
        return await this.MessageModel.find({ownerId: userId}).populate('User')
    }
    async getAllMessageByRoom (roomId){
        return await this.MessageModel.find({roomId: roomId}).populate('Room')
    };
    
}
