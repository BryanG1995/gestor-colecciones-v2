import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { findEntityOrFail } from 'src/common/helpers/find-entity.helper';

@Injectable()
export class ShowService {

  constructor(private prisma: PrismaService,) { }
  async create(createShowDto: CreateShowDto) {
    const show = await this.prisma.show.create({
      data: createShowDto,
    })
    return show;
  }

  async findAll() {
    return await this.prisma.show.findMany({
      select: {
        id: true,
        nombre: true
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.show.findUnique(
      {
        select: {
          id: true,
          nombre: true
        },
        where: { id },
      }
    );
  }

  async update(id: number, updateShowDto: UpdateShowDto) {

    await findEntityOrFail(this.prisma, 'show', id)

    //para actualizar 
    const show = await this.prisma.show.update({
      where: { id },
      data: updateShowDto,
    }
    )

    return show
  }

  async remove(id: number) {
    const showFind = await findEntityOrFail(this.prisma, 'show', id) as { nombre: string };

    await this.prisma.show.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return `El show con ID ${id} ${showFind.nombre} se ha eliminado`;


  }




}
