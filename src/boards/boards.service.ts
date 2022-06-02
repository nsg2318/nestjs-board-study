import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board-dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAll(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const board: Board = {
      id: uuid(),
      title: createBoardDto.title,
      description: createBoardDto.description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`조회 불가`);
    }
    return found;
  }

  // filter 메소드를 사용하여 보드의 id와 다른 애들만 true 로 남김.
  deleteBoard(id: string): void {
    const board1 = this.boards.find((board) => board.id === id);
    if (!board1) {
      throw new NotFoundException(`삭제 불가`);
    }

    this.boards = this.boards.filter((board) => board.id != id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const boardById = this.getBoardById(id);
    boardById.status = status;
    return boardById;
  }
}
