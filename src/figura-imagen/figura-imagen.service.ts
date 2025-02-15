import { Injectable } from '@nestjs/common';
import { CreateFiguraImagenDto } from './dto/create-figura-imagen.dto';
import { UpdateFiguraImagenDto } from './dto/update-figura-imagen.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { findEntityOrFail } from 'src/common/helpers/find-entity.helper';

@Injectable()
export class FiguraImagenService {
  constructor(private prisma: PrismaService,) { }


  async create(createFiguraImagenDto: CreateFiguraImagenDto) {

    const figuraImagen = await this.prisma.figuraImagen.create({
      data: createFiguraImagenDto,
    })
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
