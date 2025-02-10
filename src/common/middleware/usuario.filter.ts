import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class QueryFailedExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = 400;

    if (exception.code === 'P2002') {
      // P2002 es el código de error en Prisma para violación de restricciones únicas (similar a 23505 en Postgres)
      response.status(status).json({
        statusCode: status,
        message: 'Ya existe',
        error: 'Bad Request',
      });
    } else {
      response.status(status).json({
        statusCode: status,
        message: exception.message,
        error: 'Bad Request',
      });
    }
  }
}
