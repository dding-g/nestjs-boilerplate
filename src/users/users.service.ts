import { v4 as uuidv4 } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserStatus } from './users.model';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    createUser(createUserDto: CreateUserDto): User {
        const { name } = createUserDto;

        const user = {
            id: uuidv4(),
            name,
            status: UserStatus.ACTIVE,
        };

        /* TODO: create user in DB */
        this.users.push(user);

        return user;
    }

    updateBlockUser(id: string, status: UserStatus) {
        /* TODO: block user in DB */
        const userIdx = this.users.findIndex((user) => user.id === id);
        const isUser = userIdx > -1;

        if (isUser) {
            this.users[userIdx].status = status;
        }
        /* end block user */

        return isUser;
    }

    getUsers(): User[] {
        const activeUsers = this.users.filter(
            (user) => user.status === UserStatus.ACTIVE,
        );

        if (activeUsers.length === 0) {
            throw new NotFoundException();
        }

        return activeUsers;
    }
}
