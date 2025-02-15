import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Module({
  providers: [SupabaseService],
  exports: [SupabaseService],  // Exportar para que otros módulos lo usen
})
export class SupabaseModule {}
