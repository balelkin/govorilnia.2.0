import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { roomSchema } from './schemas/room.schemas';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';
import { userSchema } from 'src/user/schemas/user.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: roomSchema }]), MongooseModule.forFeature([{name: 'User', schema: userSchema}])],
  providers: [RoomService, UserService],
  controllers: [RoomController, UserController]
})
export class RoomModule {}
