
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
   return this.usersRepository.findOne({  where: { username }});
 }

  async createUser(username: string, password: string): Promise<User> {
   const user = this.usersRepository.create({ username, password });
   return this.usersRepository.save(user);
  }

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
}

