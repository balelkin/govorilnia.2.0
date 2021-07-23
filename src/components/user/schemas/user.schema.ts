import * as mongoose from 'mongoose';
import { Schema } from "mongoose";
export const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roomId: {
        ref: 'rooms',
        type: Schema.Types.ObjectId,
        default: null
    }
    
}, {
versionKey: false,
timestamps: true,
collection: 'users'
});

userSchema.index({email: 1}, {unique: true})