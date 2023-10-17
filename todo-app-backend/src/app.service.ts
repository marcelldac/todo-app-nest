import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class AppService {
  constructor( private prisma: PrismaService ){ };

  async create( userData: any ): Promise<Task | string>{
    try{
    const res = await this.prisma.task.create({
      data: userData,
    });
    return res;
    } catch ( error: unknown ) {
      return `Erro ao criar a tarefa: ${error}`;
    }
  }

  async get(){
    const res = await this.prisma.task.findMany();
    return res;
  }

  async update(id: string, text: string): Promise<Task | string>{
    const task = await this.prisma.task.findFirst({ where: { id } });
    if(task){
      const res = await this.prisma.task.update({
        where: { id },
        data: { text },
      });
      return res;
    } else {
      return "Task não encontrada.";
    }
  }

  async delete(id: string): Promise<Task | string>{
    const task = await this.prisma.task.findFirst({ where: { id } });
    if(task){
      const res = await this.prisma.task.delete({ where: { id } });
      return res;
    } else {
      return 'Task não encontrada.';
    }    
  }

  getHello(): string {
    return 'Ok!';
  }
}
