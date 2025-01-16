import { Body, Controller, Post, Res } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { CreateTaskDto } from '../dtos/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post('create')
  async create(@Res() res, @Body() data: CreateTaskDto) {
    console.log('here')
    const run_service = await this.taskService.add(data)
    return res.status(run_service.statusCode).send(run_service);
  }
}
