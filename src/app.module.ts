import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './db/database/postgress';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    ContactModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }