 import { Injectable, Param } from '@nestjs/common'
 import{ InjectModel } from '@nestjs/mongoose'
 import { Model, Types } from 'mongoose';
 import { IRoom } from '../room/interfaces/room.interfaces'
 import { CreateRoomDto } from '../room/dto/create.room.dto'
 import { UpdateRoomDto } from './dto/update.room.dto';
import { JoinToRoomDto } from './dto/joinToRoom.dto';
import { join } from 'lodash';

@Injectable()
export class RoomService {
    constructor(@InjectModel('Room') private readonly RoomModel: Model<IRoom>,)  {
    }
    async getAll(){
        return await this.RoomModel.find({}).lean().limit(10)
    }
    async createRoom(CreateRoomDto: CreateRoomDto){
       const createRoom = new this.RoomModel(CreateRoomDto);
       return await createRoom.save()
    }
    async findById(id: string) {
         return await this.RoomModel.findById(id).lean()   
    }
    async deleteRoomById(id: string){
        return await this.RoomModel.findByIdAndDelete(id).lean()
    }
    async updateRoom(updateRoomDto: UpdateRoomDto, roomId){
        return await this.RoomModel.findByIdAndUpdate(updateRoomDto, roomId).lean()
    };

    async joinUserToRoom (roomId: string, userId: string): Promise<IRoom> {
       return await this.RoomModel.findByIdAndUpdate( roomId, { $addToSet: { usersId: userId } } ).lean();
    }
    async leaveUserFromRoom (  roomId, userId ){
        return await this.RoomModel.findOneAndUpdate(roomId, { $pull: { usersId: userId } })
    }
    async getAllRoomsByUser(userId){
        return await this.RoomModel.find({ownerId: userId}).populate('User').limit(10)       
    }

   
}
