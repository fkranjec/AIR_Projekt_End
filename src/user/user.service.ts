import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { GetUserRequest } from './dto/get-user-request.dto';
import { User } from './models/User';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UserRepository) {

    }
    async createUser(createUserRequest: CreateUserRequest): Promise<User> {
        return this.usersRepository.insertOne(parseId(createUserRequest));
    }

    async getUser(getUserRequest: GetUserRequest): Promise<User> {
        return this.usersRepository.getOne(getUserRequest)
    }

}

function parseId<T>(request: any): T {
    request._id = new Types.ObjectId(request._id);
    return request;
}