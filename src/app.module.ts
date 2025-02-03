import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { FiguraModule } from './figura/figura.module';
import { FiguraImagenModule } from './figura-imagen/figura-imagen.module';
import { MarcaModule } from './marca/marca.module';
import { ModeloModule } from './modelo/modelo.module';
import { PaisModule } from './pais/pais.module';
import { ShowModule } from './show/show.module';
import { UsuarioFiguraModule } from './usuario-figura/usuario-figura.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsuarioModule, FiguraModule, FiguraImagenModule, MarcaModule, ModeloModule, PaisModule, ShowModule, UsuarioFiguraModule, PrismaModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
