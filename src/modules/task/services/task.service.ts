import { Injectable } from '@nestjs/common';
import { ResponseService } from 'src/common/classes/response.common';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/database/models/task.model';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>,) { }
    async add(data: CreateTaskDto) {
        try {
            const createdTask = await this.taskModel.create(data)
            return new ResponseService().success({ statusCode: 201, message: 'Created successful', data: createdTask })
        } catch (error) {
            return new ResponseService().error({ error: error })
        }
    };
    async delete(id: string) {
        try {
            const deletedTask = await this.taskModel.findByIdAndDelete(id)
            return new ResponseService().success({ statusCode: 201, message: 'Deleted successful', data: deletedTask })
        } catch (error) {
            return new ResponseService().error({ error: error })
        }
    };
}
