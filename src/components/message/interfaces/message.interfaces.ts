import { Document, Schema } from "mongoose";


 export interface IMessage extends Document {
readonly ownerId: Schema.Types.ObjectId;
readonly roomId: Schema.Types.ObjectId;
readonly text: string;
 }