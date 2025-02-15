import { Module } from '@nestjs/common';
import { FiguraImagenService } from './figura-imagen.service';
import { FiguraImagenController } from './figura-imagen.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  controllers: [FiguraImagenController],
  providers: [FiguraImagenService],
  imports: [SupabaseModule]
})
export class FiguraImagenModule {}
