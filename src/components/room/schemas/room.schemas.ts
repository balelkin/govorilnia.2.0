import * as mongoose from 'mongoose';
import { Schema, Types } from "mongoose";
export const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        },
    ownerId: {
        ref: 'users',
        type: Types.ObjectId,
        default: null
    },
    description: {
        type: String,
        default: ""
    },
    usersId: {
     ref: 'users',
     type: [Types.ObjectId],
     default: null
     },
    
}, {
versionKey: false,
timestamps: true,
collection: 'rooms'
});

roomSchema.index({unique: true})