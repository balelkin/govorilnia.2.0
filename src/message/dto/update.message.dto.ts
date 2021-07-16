import { Schema } from "mongoose";

export class UpdateMessageDto  {
    readonly ownerId: Schema.Types.ObjectId;
    readonly roomId: Schema.Types.ObjectId;
    readonly text: string;
     }