import * as mongoose from 'mongoose';
import { Schema } from "mongoose";
export const messageSchema = new mongoose.Schema({
    
    ownerId: {
        ref: 'users',
        type: Schema.Types.ObjectId,
        required: true,
    },
    roomId: {
        ref: 'rooms',
        type: Schema.Types.ObjectId,
        default: null
    },
    text: {
        type: String,
        default: ""
    },
    
}, {
versionKey: false,
timestamps: true,
collection: 'messages'
});

messageSchema.index({unique: true})