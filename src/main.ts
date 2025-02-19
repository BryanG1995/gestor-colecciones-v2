import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaValidationInterceptor } from './common/interceptor/prisma-validation.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilita CORS
    // Registrar el interceptor globalmente
    // app.useGlobalInterceptors(new PrismaValidationInterceptor());

    app.useGlobalPipes(  
      new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true, 
    transform: true,
      }) 
    );
  await app.listen(3000);
}
bootstrap();
