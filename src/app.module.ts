import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './boards/configs/typeORMConfig';
import { BoardRepository } from './boards/board.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardRepository]),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
  ],
})
export class AppModule {}
