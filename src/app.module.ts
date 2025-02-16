import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite', // 指定使用 SQLite
      database: 'database.sqlite', // 資料庫檔案名稱
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 實體檔案的路徑
      synchronize: true, // 自動同步資料庫結構
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
