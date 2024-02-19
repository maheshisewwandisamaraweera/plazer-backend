// src/users/user.controller.ts
import { Controller, Post, Body,Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers()
  {
    return this.usersService.getUsers();
  }

  @Post('register')
  async register(@Body() body: { username: string, password: string }): Promise<any> {
    const { username, password } = body;
    const user = await this.usersService.createUser(username, password); 
    return { id: user.id, username: user.username };
  }
}

