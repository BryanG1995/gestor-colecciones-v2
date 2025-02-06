import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MarcaService {

  constructor(private prisma: PrismaService,) {}
  

  async create(createMarcaDto: CreateMarcaDto) {
    //#TODO: hacer create de marca 

    return 'marca'; // Retornamos la marca creada
  }

  async findAll() {
    // return `This action returns all marca`;
    return this.prisma.marca.findMany();
    
  }

  async findOne(id: number) {
    return this.prisma.marca.findUnique(
      {
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
