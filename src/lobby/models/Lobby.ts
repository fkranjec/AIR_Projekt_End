import { Prop, Schema } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { User } from "src/user/models/User";

@Schema({ versionKey: false })
export class Lobby extends Document {
    @Prop()
    _id: Types.ObjectId

    @Prop()
    contract: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    playerOne: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    playerTwo: User;

    @Prop()
    game: string
}