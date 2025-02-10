import { CallHandler, ExecutionContext, Injectable, NestInterceptor, BadRequestException } from '@nestjs/common';
import { Observable, catchError } from 'rxjs';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof Prisma.PrismaClientValidationError) {
          throw new BadRequestException('Error de validación en los datos enviados.');
        }
        throw error;
      }),
    );
  }
}

export default PrismaValidationInterceptor; // Asegúrate de exportarlo
