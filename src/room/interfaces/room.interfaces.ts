import { Document, Schema } from "mongoose";


 export interface IRoom extends Document  {
readonly title: string;
readonly ownerId: Schema.Types.ObjectId;
readonly description: string;
readonly usersId: [Schema.Types.ObjectId]; }