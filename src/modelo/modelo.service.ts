import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { findEntityOrFail } from 'src/common/helpers/find-entity.helper';

@Injectable()
export class ModeloService {

  constructor(private prisma: PrismaService,) { }

  async create(createModeloDto: CreateModeloDto) {

    const { idMarca, idUsuario, nombre } = createModeloDto;

    const modeloExiste = await this.prisma.marca.findFirst({
      where: { nombre: createModeloDto.nombre },
    });

    if (modeloExiste) {
      throw new ConflictException(`El modelo ${createModeloDto.nombre} ya existe`);
    }

    const marca = await this.prisma.modelo.create({
      data: {
        nombre: nombre,
        idMarca: idMarca,
        idUsuario: idUsuario ?? null,
      },
    })
    return marca;
  }

  async findAll() {
    return await this.prisma.modelo.findMany({
      select: {
        id: true,
        nombre: true,
        marca: {
          select: {
            id: true,
            nombre: true,
          },
        },
        usuario: {
          select: {
            id: true,
            nombre: true,
            email: true,
          }
        }
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.modelo.findUnique(
      {
        select: {
          id: true,
          nombre: true,
          marca: {
            select: {
              id: true,
              nombre: true,
            },
          },
          usuario: {
            select: {
              id: true,
              nombre: true,
              email: true,
            }
          }
        },
        where: { id },
      }
    );
  }

  async update(id: number, updateModeloDto: UpdateModeloDto) {
    await findEntityOrFail(this.prisma, 'modelo', id)

    //para actualizar 
    const modelo = await this.prisma.modelo.update({
      where: { id },
      data: updateModeloDto,
    }
    )

    return modelo
  }

  async remove(id: number) {

    const modeloFind = await findEntityOrFail(this.prisma, 'modelo', id) as { nombre: string };

    await this.prisma.modelo.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return `El modelo con ID ${id} ${modeloFind.nombre} se ha eliminado`;

  }
}
