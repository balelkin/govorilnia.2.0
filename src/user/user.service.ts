import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/crate.user.dto';
import { IUser } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt'
import * as _ from 'lodash'
import { UpdateUserDto } from './dto/update.user.dto';
import { UpdateRoomDto } from 'src/room/dto/update.room.dto';

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
    async updateUser(UpdateUserDto: UpdateUserDto, id: string){
        return await this.UserModel.findByIdAndUpdate(id, UpdateUserDto).lean()
    }
    async joinToRoom (userId, roomId, UpdateUserDto){
        const user = await this.UserModel.findById(userId)
           await this.UserModel.findByIdAndUpdate(userId,  {roomId}, UpdateUserDto).exec()
        return user.roomId
    };
    async leaveFromRoom (userId, UpdateRoomDto){
        return this.UserModel.findByIdAndUpdate(userId, {roomId: null}, UpdateRoomDto)
    };

    async getAllUsersFromRoom (roomId){
        return this.UserModel.find({roomId}).populate('Room').limit(10)
    };
   async deleteAllUsersFromRoom (roomId, UpdateUserDto){
       return this.UserModel.updateMany({roomId}, {userId: null}, UpdateUserDto )
   }
   
    
   
};


