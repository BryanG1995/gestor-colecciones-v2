import { Injectable } from '@nestjs/common';
import { CreateFiguraDto } from './dto/create-figura.dto';
import { UpdateFiguraDto } from './dto/update-figura.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { findEntityOrFail } from 'src/common/helpers/find-entity.helper';

@Injectable()
export class FiguraService {

  constructor(private prisma: PrismaService,) { }
  async create(createFiguraDto: CreateFiguraDto,user : any) {

    const { idModelo, idShow, nombre, precio, fechaCompra } = createFiguraDto;
    console.log(user.id)
    const figura = await this.prisma.figura.create({
      data: {
        nombre: nombre,
        idModelo: idModelo,
        fechaCompra: fechaCompra ?? null,
        idShow: idShow,
        precio: precio,
        idUsuario: user.id

      },
    })
    return figura;
    // console.log(user)
    // return user
  }

  async findAll() {
    //#TODO: find segun el usuario que está activo y no toda la data 
    return await this.prisma.figura.findMany({
      select: {
        id: true,
        nombre: true,
        fechaCompra: true,
        precio: true,
        modelo: {
          select: {
            id: true,
            nombre: true,
            marca: {
              select: {
                id: true,
                nombre: true
              }
            }
          }

        },
        show: {
          select: {
            id: true,
            nombre: true
          }
        },
        usuario: {
          select: {
            id: true,
            nombre: true,
            email: true
          }
        }
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.figura.findMany({
      select: {
        id: true,
        nombre: true,
        fechaCompra: true,
        precio: true,
        modelo: {
          select: {
            id: true,
            nombre: true,
            marca: {
              select: {
                id: true,
                nombre: true
              }
            }
          }

        },
        show: {
          select: {
            id: true,
            nombre: true
          }
        },
        usuario: {
          select: {
            id: true,
            nombre: true,
            email: true
          }
        }
      },
      where: { id },
    })
  }

  async update(id: number, updateFiguraDto: UpdateFiguraDto) {
    await findEntityOrFail(this.prisma, 'figura', id)

    //para actualizar 
    const figura = await this.prisma.figura.update({
      where: { id },
      data: updateFiguraDto,
    }
    )

    return figura
  }

  async remove(id: number) {
    const figuraFind = await findEntityOrFail(this.prisma, 'figura', id) as { nombre: string };

    await this.prisma.figura.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return `El modelo con ID ${id} ${figuraFind.nombre} se ha eliminado`;

  }
}
