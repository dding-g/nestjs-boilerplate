import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './users.model';

@Injectable()
export class UsersService {
    private users: User[] = [];

    createUser(name: string) {
        const user = {
            id: uuidv4(),
            name,
            status: UserStatus.ACTIVE,
        };
    }

    getUsers(): User[] {
        return this.users;
    }
}
