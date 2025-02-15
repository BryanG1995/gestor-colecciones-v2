import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

@Injectable()
export class SupabaseService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );
  }

  //TODO: luego implementar el borrado de imagenes (o reemplazo)
  async uploadImage(file: any, folder: string) {
    try {
      const filePath = `${folder}/${Date.now()}-${file.originalname}`;

      // Subir el archivo al bucket
      const { data, error } = await this.supabase.storage
        .from('bucketImages') // Nombre del bucket
        .upload(filePath, file.buffer, {
          cacheControl: '3600',
          upsert: false,
          contentType: file.mimetype,
        });

      if (error) {
        throw error;
      }

      // Obtener la URL pública de la imagen subida
      const { data: publicUrlData, error: urlError } = this.supabase
        .storage
        .from('bucketImages')
        .getPublicUrl(filePath);

      if (urlError) {
        throw urlError;
      }

      // Retornar la URL de la imagen subida
      return { url: publicUrlData.publicUrl };
    } catch (error) {
      console.error('Error subiendo la imagen:', error);
      throw error;
    }
  }
}