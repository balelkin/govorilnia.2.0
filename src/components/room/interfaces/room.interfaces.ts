import { Document } from "mongoose";


 export interface IRoom extends Document  {
readonly title?: string;
readonly ownerId?: string;
readonly description?: string;
readonly usersId?: [string]; 
}