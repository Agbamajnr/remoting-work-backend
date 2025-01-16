import { IsEmail, IsArray, IsNotEmpty, IsNumber, IsString, IsUrl, IsOptional, IsObject, IsBoolean } from "class-validator"
import { TaskCategory } from "src/common/interfaces/task.lib";


export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    localId: string

    @IsArray()
    keywords: string[]


    @IsString()
    @IsNotEmpty()
    userId: string

    @IsString()
    @IsNotEmpty()
    taskName: string

    @IsBoolean()
    @IsNotEmpty()
    completed: boolean


    @IsString()
    @IsOptional()
    taskDescription: string


    @IsObject()
    @IsNotEmpty()
    category: TaskCategory

    @IsString()
    @IsNotEmpty()
    createdAt: string


    @IsString()
    @IsNotEmpty()
    deadline: Date
}

