import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/create')
    createUser(@Body() createUserDto: CreateUserDto): User {
        console.log({ createUserDto });
        return this.usersService.createUser(createUserDto);
    }

    @Patch('/block/:id')
    blockUser(@Param('id') id: string): boolean {
        return this.usersService.blockUser(id);
    }

    @Get()
    getUsers(): User[] {
        return this.usersService.getUsers();
    }
}
