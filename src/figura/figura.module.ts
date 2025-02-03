import { Module } from '@nestjs/common';
import { FiguraService } from './figura.service';
import { FiguraController } from './figura.controller';

@Module({
  controllers: [FiguraController],
  providers: [FiguraService],
})
export class FiguraModule {}
