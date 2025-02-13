import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaisService {
  
    constructor(private prisma: PrismaService,) {}
  async create(createPaisDto: CreatePaisDto) {
    const pais = await this.prisma.pais.create({
      data: createPaisDto,
    })
    return pais;
  }

  async findAll() {
    return this.prisma.pais.findMany({
      select:{
        id:true,
        nombre:true
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.pais.findUnique(
      {
        select:{
          id:true,
          nombre:true
        },
        where: { id },
      }
    );
  }

 async update(id: number, updatePaisDto: UpdatePaisDto) {
    
        const paisFind = await this.findOne(id);
    
        if (!paisFind) {
          throw new NotFoundException(
            `La marca con la id ${id} no se ha encontrado`,
          );
        }
        
        //para actualizar 
        const pais = await this.prisma.pais.update({
          where: { id },
          data: updatePaisDto,
        }
      )
    
        return pais
    
  }

  async remove(id: number) {
    const paisFind = await this.findOne(id);
    if (!paisFind) {
      throw new NotFoundException(
        `El pais con la id ${id} no se ha encontrado`,
      );
    }

    await this.prisma.pais.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return `El pais con ID ${id} ${paisFind.nombre} se ha eliminado`;
  }
}
