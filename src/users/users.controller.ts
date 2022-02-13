import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/create')
    createUser(@Body('name') name: string) {
        this.usersService.createUser(name);
    }
    @Get()
    getUsers(): User[] {
        return this.usersService.getUsers();
    }
}
