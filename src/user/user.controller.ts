import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { GetUserRequest } from './dto/get-user-request.dto';
import { User } from './models/User';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) {

    }

    @Post()
    async createUser(
        @Body() createUserRequest: CreateUserRequest
    ): Promise<User> {
        return this.usersService.createUser(createUserRequest);
    }

    @Post(':id')
    async getUser(
        @Body() getUserRequest: GetUserRequest
    ): Promise<User> {
        return this.usersService.getUser(getUserRequest);
    }
}
