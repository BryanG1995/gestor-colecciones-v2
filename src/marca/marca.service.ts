import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { findEntityOrFail } from 'src/common/helpers/find-entity.helper';

@Injectable()
export class MarcaService {

  constructor(private prisma: PrismaService,) { }


  async create(createMarcaDto: CreateMarcaDto,user : any) {

    const { idPais, nombre } = createMarcaDto;

    const marcaExistente = await this.prisma.marca.findFirst({
      where: { nombre: createMarcaDto?.nombre ?? null },
    });

    if (marcaExistente) {
      throw new ConflictException(`La marca ${createMarcaDto.nombre} ya existe`);
    }

    const marca = await this.prisma.marca.create({
      data: {
        nombre: nombre,
        idPais: idPais,
        idUsuario: user.id,
      },
    })

    return marca;


  }

  async findAll(user : any) {
    // return `This action returns all marca`;
    return this.prisma.marca.findMany({
      select: {
        id: true,
        nombre: true,
        pais: {
          select: {
            id: true,
            nombre: true,
          }
        },
        usuario: {
          select: {
            id: true,
            nombre: true,
            email: true,
          }
        }
        
      },
      where:{
        OR: [
          {idUsuario: user.id},
          {idUsuario: null}
        ]
      }

    });

  }

  async findOne(id: number,user : any) {
    return this.prisma.marca.findUnique(
      {
        select: {
          id: true,
          nombre: true,
          pais: {
            select: {
              id: true,
              nombre: true,
            }
          },
          usuario: {
            select: {
              id: true,
              nombre: true,
              email: true,
            }
          }
        },
        where: { 
          id ,
          OR: [
            {idUsuario: user.id},
            {idUsuario: null}
          ]
        },
      }
    );
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    // return `This action updates a #${id} marca`;

    await findEntityOrFail(this.prisma, 'marca', id)

    //para actualizar 
    const marca = await this.prisma.marca.update({
      where: { id },
      data: updateMarcaDto,
    }
    )

    return marca

  }

  async remove(id: number) {
    const marcaFind = await findEntityOrFail(this.prisma, 'marca', id) as { nombre: string };

    await this.prisma.marca.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return `La marca con ID ${id} ${marcaFind.nombre} se ha eliminado`;
  }

  

}
