import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/crate.user.dto';
import { IUser } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update.user.dto';
import { UpdateRoomDto } from '../room/dto/update.room.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly UserModel: Model<IUser>){
      
    }
    async getAll(){
        return await this.UserModel.find({}).lean()
    }
    async create(CreateUserDto: CreateUserDto) {
      const createUser = new this.UserModel(CreateUserDto);
       return await createUser.save()
    }
    async findById(id: string) {
         return await this.UserModel.findById(id).lean()   
    }
    async deleteUserById(id: string){
        return await this.UserModel.findByIdAndDelete(id).lean()
    }
    async updateUser(updateUserDto: UpdateUserDto, id: string){
        return await this.UserModel.findByIdAndUpdate(id, updateUserDto).lean()
    }
   
    async joinUserToRoom(roomId: string, userId: string, updateUserDto: UpdateUserDto){
        return this.UserModel.findByIdAndUpdate(userId, {roomId})
    }
   
    async leaveFromRoom (userId, UpdateRoomDto){
        return this.UserModel.findByIdAndUpdate(userId, {roomId: null}, UpdateRoomDto)
    };

    async getAllUsersFromRoom (roomId){
        return this.UserModel.find({roomId}).populate('Room').limit(10)
    };
   async deleteAllUsersFromRoom (roomId, UpdateUserDto){
       return this.UserModel.updateMany({roomId}, {usersId: null}, UpdateUserDto )
   }
   
   async findOne(username: string): Promise<any> {
    return this.UserModel.findOne({
      username,
    });
  }
   
};


