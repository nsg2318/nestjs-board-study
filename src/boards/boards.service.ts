import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const title = createBoardDto.title;
    const description = createBoardDto.description;
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    return this.boardRepository.save(board);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`찾을 수 없음`);
    }
    return found;
  }

  async deleteBoard(id: number): Promise<void> {
    await this.boardRepository.delete(id);
  }

  async updateStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id); //getBoardById도 async-await 이기 때문에
    board.status = status;
    return await this.boardRepository.save(board);
  }
}
