import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const environment = process.env.NODE_ENV || 'development'

@Module({
  imports: [UserModule, RoomModule, MessageModule, 
  ConfigModule.forRoot({
    envFilePath: `.env.${environment}`,
    isGlobal: true,
  }),
  MongooseModule.forRoot(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
