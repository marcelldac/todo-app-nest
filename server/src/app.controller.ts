import { 
  Controller, 
  Body, 
  Get, 
  Post, 
  Put,
  Delete, 
} from '@nestjs/common';
import { Task as TaskModel } from '@prisma/client';

import { AppService } from './app.service';

@Controller('task')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('read')
  async readTask(){
    return this.appService.get();
  }

  @Post('create')
  async addTask(@Body() data: { text: string }): Promise<TaskModel | string>{
    return this.appService.create(data);
  }

  @Put('update')
  async updateTask(@Body() data: { id: string ,text: string} ): Promise<TaskModel | string>{
    return this.appService.update(data.id, data.text);
  }

  @Delete('delete')
  async deleteTask(@Body() data: {id: string}) : Promise<TaskModel | string>{
    return this.appService.delete(data.id);
  }

  @Get('hello')
  getHello(){
    return this.appService.getHello();
  }
}
