import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";
import { Lobby } from "src/lobby/models/Lobby";

@Schema({ versionKey: false })
export class User extends Document {
    @Prop()
    _id: string;
    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Lobby' })
    lobbies: Lobby[];
    @Prop()
    contract: string;
}

export const UserSchema = SchemaFactory.createForClass(User);