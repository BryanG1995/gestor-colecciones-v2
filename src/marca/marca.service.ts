import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MarcaService {

  constructor(private prisma: PrismaService,) { }


  async create(createMarcaDto: CreateMarcaDto) {

    const { idPais, idUsuario, nombre } = createMarcaDto;

    const marcaExistente = await this.prisma.marca.findFirst({
      where: { nombre: createMarcaDto.nombre },
    });

    if (marcaExistente) {
      throw new ConflictException(`La marca ${createMarcaDto.nombre} ya existe`);
    }

    const marca = await this.prisma.marca.create({
      data: {
        nombre: nombre,
        idPais: idPais,
        idUsuario: idUsuario ?? null,
      },
    })

    return marca;


  }

  async findAll() {
    // return `This action returns all marca`;
    return this.prisma.marca.findMany({
      select:{
        id:true,
        nombre:true,
        pais:{
          select:{
            id:true,
            nombre:true,
          }
        },
        usuario:{
          select:{
            id:true,
            nombre:true,
            email:true,
          }
        }
      }


    });

  }

  async findOne(id: number) {
    return this.prisma.marca.findUnique(
      {
        select:{
          id:true,
          nombre:true,
          pais:{
            select:{
              id:true,
              nombre:true,
            }
          },
          usuario:{
            select:{
              id:true,
              nombre:true,
              email:true,
            }
          }
        },
        where: { id },
      }
    );
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    // return `This action updates a #${id} marca`;

    const marcaFind = await this.findOne(id);

    if (!marcaFind) {
      throw new NotFoundException(
        `La marca con la id ${id} no se ha encontrado`,
      );
    }

    //para actualizar 
    const marca = await this.prisma.marca.update({
      where: { id },
      data: updateMarcaDto,
    }
    )

    return marca

  }

  async remove(id: number) {
    const marcaFind = await this.findOne(id);
    if (!marcaFind) {
      throw new NotFoundException(
        `La marca con la id ${id} no se ha encontrado`,
      );
    }

    await this.prisma.marca.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return `La marca con ID ${id} se ha eliminado`;
  }

  

}
