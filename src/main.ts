import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaValidationInterceptor } from './common/interceptor/prisma-validation.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Registrar el interceptor globalmente
    app.useGlobalInterceptors(new PrismaValidationInterceptor());
  await app.listen(3000);
}
bootstrap();
