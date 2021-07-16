import { Schema } from "mongoose";

export class UpdateUserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly roomId: Schema.Types.ObjectId; }