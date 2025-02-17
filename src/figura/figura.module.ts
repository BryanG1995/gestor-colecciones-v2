import { Module } from '@nestjs/common';
import { FiguraService } from './figura.service';
import { FiguraController } from './figura.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  controllers: [FiguraController],
  providers: [FiguraService],
  imports: [UsuarioModule]
})
export class FiguraModule {}
