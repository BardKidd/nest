import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 要使用這個需要安裝 class-transformer，並搭配 class-validator 使用
  // 這個是啟動全域驗證並自動轉換成 DTO 格式
  // 假如沒有使用這個 class-validator 就不會有驗證功能。
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
