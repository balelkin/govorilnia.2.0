import { Schema } from "mongoose";
export class UpdateRoomDto {
    readonly title: string;
    readonly ownerId: Schema.Types.ObjectId;
    readonly description: string;
    readonly usersId: [Schema.Types.ObjectId]; 
}