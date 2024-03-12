// src/users/user.controller.ts
import { Controller, Post, Body,Get,Query,Res } from '@nestjs/common';
import { UsersService } from './user.service';
import {Response} from 'express';
import {User} from './user.entity';

@Controller('users')
export class UserController {
  constructor(private usersService: UsersService) {}

  @Post('userReg')
  createUser(@Body() user: User, @Res() response:Response)
  {
    return this.usersService.createUser( user ,response);

  }

  @Get('userLogin')
  loginUser(@Query() userName: User , @Body() password:User, @Res() response: Response)
  {
    return this.usersService.loginUser(userName,password,response);
  }
}
  //@Get()
  //getUsers()
  //{
    //return this.usersService.getUsers();
 // }

 //@Get()
 //findAll(): Promise<any[]> {
   //return this.usersService.findAll();
 //}

  //@Post('register')
  //async register(@Body() body: { username: string, password: string }): Promise<any> {
   // const { username, password } = body;
    //const user = await this.usersService.createUser(username, password); 
    //return { id: user.id, username: user.username };
  //}

 // @Post()
  //create(@Body() createUserDto) : Promise<any> {
   // return this.usersService.create(createUserDto);
 // }
//}

