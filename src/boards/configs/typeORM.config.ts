import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from '../board.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'board-app',
  entities: [Board], // 사용할 entity의 클래스명을 넣어둔다.
  synchronize: true, // false로 해두는 게 안전하다.
};
