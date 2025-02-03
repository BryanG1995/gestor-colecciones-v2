import { Module } from '@nestjs/common';
import { FiguraImagenService } from './figura-imagen.service';
import { FiguraImagenController } from './figura-imagen.controller';

@Module({
  controllers: [FiguraImagenController],
  providers: [FiguraImagenService],
})
export class FiguraImagenModule {}
