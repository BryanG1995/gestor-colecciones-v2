import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()  // Hace que PrismaService esté disponible en toda la app sin necesidad de importarlo cada vez
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exportamos para que otros módulos puedan usarlo
})
export class PrismaModule {}
