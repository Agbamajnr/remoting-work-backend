import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'; // Rename mongoose Schema
import { TaskCategory } from 'src/common/interfaces/task.lib';

export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: true })
export class Task {
    @Prop({ required: true })
    userId: string

    @Prop({ required: false })
    localId: string

    @Prop({ required: true })
    taskName: string

    @Prop({ required: false })
    taskDescription: string

    @Prop({ required: true, type: MongooseSchema.Types.Map })
    category: TaskCategory

    @Prop({ required: true })
    keywords: string[]

    @Prop({ required: true })
    deadline: Date

    @Prop({ required: true })
    completed: boolean

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date
}

export const TaskSchema = SchemaFactory.createForClass(Task);