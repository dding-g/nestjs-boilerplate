import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
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

    blockUser(id: string) {
        /* TODO: block user in DB */
        const userIdx = this.users.findIndex((user) => user.id === id);
        this.users.splice(1, userIdx);
        /* end block user */

        return true;
    }

    getUsers(): User[] {
        return this.users;
    }
}
