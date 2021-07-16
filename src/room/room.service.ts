import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRoom } from './interfaces/room.interfaces';
import { CreateRoomDto } from './dto/create.room.dto';
import { UpdateRoomDto } from './dto/update.room.dto';
import { IUser } from 'src/user/interfaces/user.interface';

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
    async updateRoom(UpdateRoomDto: UpdateRoomDto, id: string){
        return await this.RoomModel.findByIdAndUpdate(id, UpdateRoomDto).lean()
    };
    async joinUserToRoom (UpdateRoomDto, roomId, userId ){
        return await this.RoomModel.findByIdAndUpdate(roomId, { $push: {usersId: userId}}, UpdateRoomDto);
    }
    async leaveUserFromRoom ( roomId, userId ){
        return await this.RoomModel.findByIdAndUpdate(roomId, { $pull: { usersId: userId } })
    }
    async getAllRoomsByUser(userId){
        return await this.RoomModel.find({ownerId: userId}).populate('User').limit(10)       
    }

   
}
