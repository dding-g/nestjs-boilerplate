import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [UsersModule, AuthModule],
    controllers: [UsersController],
    providers: [UsersService],
})
export class AppModule {}
