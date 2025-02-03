import { Module } from '@nestjs/common';
import { UsuarioFiguraService } from './usuario-figura.service';
import { UsuarioFiguraController } from './usuario-figura.controller';

@Module({
  controllers: [UsuarioFiguraController],
  providers: [UsuarioFiguraService],
})
export class UsuarioFiguraModule {}
