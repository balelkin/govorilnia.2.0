import { Document, Schema} from "mongoose";

 export interface IUser extends Document {
readonly name: string;
readonly email: string;
readonly password: string;
readonly roomId: Schema.Types.ObjectId; }
