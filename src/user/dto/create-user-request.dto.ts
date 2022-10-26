import { IsNotEmpty, IsString } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateUserRequest {
    @IsNotEmpty()
    @IsString()
    _id: string;
}