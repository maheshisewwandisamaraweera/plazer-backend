
import { Injectable,HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { Response } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

const saltOrRound = 10;


@Injectable()
export class UsersService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(user:User,response:Response) {
    try {
      let result = await this.userRepository.findOne({where:{ username: user.username}});
      if (result == null) {
        const hashedPassword = await bcrypt.hash(user.password, saltOrRound);
        user.password = hashedPassword;
        result = await this.userRepository.save(user);
        console.log(result);
        return response.status(HttpStatus.ACCEPTED).send("User has been created");
      }

      else
      {
        const isMatch = await bcrypt.compare( user.password, result.password);
        if (isMatch) 
        {
          return response.status(HttpStatus.ACCEPTED).send("Login successfull");
        }
        else
        {
          return response.status(HttpStatus.UNAUTHORIZED).send("Username and password mismatches");
        }
      }
    }

    catch (error)
    {
      console.log(error);
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
    }

  }
}

  //async findOne(username: string): Promise<User | undefined> {
   //return this.usersRepository.findOne({  where: { username }});
 //}

  //async createUser(username: string, password: string): Promise<User> {
   //const user = this.usersRepository.create({ username, password });
   //return this.usersRepository.save(user);
  //}

  //async create(createUserDto: CreateUserDto): Promise<User> {
    //const user= this.userRepository.create(createUserDto);
    //return await this. userRepository.save(user);
  //}

  //create(createUserDto:CreateUserDto){
    //return 'This action adds a new user';
  //}

  //findAll(){
    //return 'This action returns all user';
  //}

  //findOne(id:number){
    //return 'This action returns a #${id} user';
  //}

 // update(id:number,updateUserDto:UpdateUserDto){
   // return 'This action updates a #${id} user';
  //}

  //remove(id:number){
   // return 'This action removes a #${id} user';
 // }
//


