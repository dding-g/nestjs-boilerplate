import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from './users.service';

@Module({
    imports: [PassportModule],
    providers: [UsersService],
})
export class UsersModule {}
