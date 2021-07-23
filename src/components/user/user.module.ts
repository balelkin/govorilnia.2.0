import { Module } from '@nestjs/common';
import { userSchema } from './schemas/user.schema';
import { roomSchema } from '../room/schemas/room.schemas';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomService } from '../room/room.service';
import { RoomController } from '../room/room.controller';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }]), MongooseModule.forFeature([{ name: 'Room', schema: roomSchema }])],
  providers: [UserService, RoomService],
  controllers: [UserController, RoomController]
})
export class UserModule {}
