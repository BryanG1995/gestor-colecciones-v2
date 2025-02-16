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
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BigIntInterceptor } from './common/interceptor/bigInt.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';


@Module({
  imports: [UsuarioModule, FiguraModule, FiguraImagenModule, MarcaModule, ModeloModule, PaisModule, ShowModule , PrismaModule,AuthModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: BigIntInterceptor,
    },
  ],
})
export class AppModule {}
