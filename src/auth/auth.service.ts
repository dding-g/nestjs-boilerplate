import { Injectable } from '@nestjs/common';
import { User, UserStatus } from '@users/users.model';

@Injectable()
export class AuthService {
    private readonly users: User[] = [
        {
            id: 'user_id_1',
            name: 'user_name_1',
            status: UserStatus.ACTIVE,
        },
    ];

    async getValidUser(id: string): Promise<User | null> {
        const user = this.users.find((u) => u.id === id) ?? null;

        return user;
    }

    async validateRequest(request: Request): Promise<boolean> {
        return true;
    }
}
