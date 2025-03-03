import { Injectable } from '@nestjs/common';
import { CreateFiguraImagenDto } from './dto/create-figura-imagen.dto';
import { UpdateFiguraImagenDto } from './dto/update-figura-imagen.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { findEntityOrFail } from 'src/common/helpers/find-entity.helper';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class FiguraImagenService {
  constructor(private prisma: PrismaService,
    private readonly supabaseService: SupabaseService
  ) { }


  async create(createFiguraImagenDto: CreateFiguraImagenDto, file: any) {
    if (!file) throw new Error('No se proporcionó una imagen');
  
    // Subir imagen a Supabase
    const uploadResult = await this.supabaseService.uploadImage(file, `figuras/${createFiguraImagenDto.idFigura}`);

   

    const figuraImagen = await this.prisma.figuraImagen.create({
      data: {
        idFigura: BigInt(createFiguraImagenDto.idFigura),
        imagenUrl: uploadResult.url,
        descripcion: createFiguraImagenDto.descripcion,
      },
    });
    return figuraImagen;
  }

  async findAll() {
    return await this.prisma.figuraImagen.findMany({
      select: {
        id: true,
        imagenUrl: true,
        descripcion: true,
        figura: {
          select: {
            id: true,
            nombre: true,
          }
        }
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.figuraImagen.findMany({
      select: {
        id: true,
        imagenUrl: true,
        descripcion: true,
        figura: {
          select: {
            id: true,
            nombre: true,
          }
        }
      },
      where: { id },
    });
  }

  async findFigureImages(id: number) {
    return await this.prisma.figuraImagen.findMany({
      select: {

        imagenUrl: true,
        descripcion: true,

      },
      where: { idFigura:id },
    });
  }


  async update(id: number, updateFiguraImagenDto: UpdateFiguraImagenDto) {

    await findEntityOrFail(this.prisma, 'figuraImagen', id)
    //para actualizar 
    const figuraImagen = await this.prisma.figuraImagen.update({
      where: { id },
      data: updateFiguraImagenDto,
    }
    )

    return figuraImagen
  }

  async remove(id: number) {
    const figuraImagenFind = await findEntityOrFail(this.prisma, 'figuraImagen', id) as { nombre: string };

    await this.prisma.figuraImagen.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return `La imagen con ID ${id} ${figuraImagenFind.nombre} se ha eliminado`;



  }
}
