import { Body, Controller, Delete, Param, Post, Res } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { CreateTaskDto } from '../dtos/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  async create(@Res() res, @Body() data: CreateTaskDto) {
    const run_service = await this.taskService.add(data)
    return res.status(run_service.statusCode).send(run_service);
  }

  @Delete(':id')
  async delete(@Res() res, @Param('id') id: string) {
    const run_service = await this.taskService.delete(id)
    return res.status(run_service.statusCode).send(run_service);
  }
}
