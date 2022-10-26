import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { User } from "./models/User";

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name)
        private readonly user: Model<User>
    ) { }

    async insertOne(data: Partial<User>): Promise<User> {
        const user = new this.user(data);
        return user.save();
    }

    async listAll(): Promise<User[]> {
        return this.user.find();
    }

    async getOne(data: Partial<User>): Promise<User> {
        const user = await this.user.findById(data);
        return user;
    }
}