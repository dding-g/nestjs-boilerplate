import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User, UserStatus } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto): User {
        return this.usersService.createUser(createUserDto);
    }

    // @Param()은 전체 param 가져옴.
    @Patch('/block/:id')
    updateBlockUser(
        @Param('id') id: string,
        @Body('status') status: UserStatus,
    ): boolean {
        return this.usersService.updateBlockUser(id, status);
    }

    @Get()
    getUsers(): User[] {
        return this.usersService.getUsers();
    }
}
