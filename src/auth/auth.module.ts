// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../user/user.module';
// import { LocalStrategy } from './local.strategy';
import { LocalStrategy } from './auth.local.strategy';
import { UsersService } from 'src/user/user.service';

@Module({
  imports: [UsersModule],
  providers: [AuthService, LocalStrategy,UsersService],
})
export class AuthModule {}
