import { Module } from '@nestjs/common';
import { userSchema } from './schemas/user.schema';
import { roomSchema } from 'src/room/schemas/room.schemas';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomService } from 'src/room/room.service';
import { RoomController } from 'src/room/room.controller';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }]), MongooseModule.forFeature([{ name: 'Room', schema: roomSchema }])],
  providers: [UserService, RoomService],
  controllers: [UserController, RoomController]
})
export class UserModule {}
