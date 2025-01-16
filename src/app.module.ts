
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TaskModule, DatabaseModule],
})
export class AppModule { }
