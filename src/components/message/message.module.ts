import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { messageSchema } from './schemas/message.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Message', schema: messageSchema }])],
  providers: [MessageService],
  controllers: [MessageController]
})
export class MessageModule {}
