import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//import {SelectedApp} from './entities/selectedApp.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //return this.appService.getHello();
    return '{"message":"Hello world"}';
  }
}
