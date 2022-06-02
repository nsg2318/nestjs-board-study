import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly statusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any, metadata: ArgumentMetadata): any {
    value = value.toUpperCase();
    const b = this.isStatusValid(value);
    if (!b) {
      throw new BadRequestException(`Valid가 False로 나왔음`);
    }
    return value;
  }

  private isStatusValid(status: any){
    const number = this.statusOptions.indexOf(status);
    return number != -1;
  }
}
