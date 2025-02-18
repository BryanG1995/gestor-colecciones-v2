import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario } from './entities/usuario.entity';
import { findEntityOrFail } from 'src/common/helpers/find-entity.helper';

@Injectable()
export class UsuarioService {

  constructor(private prisma: PrismaService,) { }
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = await this.prisma.usuario.create({
      data: createUsuarioDto,
    })
    return usuario;
  }

  async findAll() {
    // return this.prisma.usuario.findMany();
    const usuario = this.prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        email: true,
      }
    });


    return usuario
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique(
      {
        select: {
          id: true,
          nombre: true,
          email: true,
        },
        where: { id },
      }
    );

    if (!usuario) {
      throw new NotFoundException(
        `Usuario con la id ${id} no se ha encontrado`,
      );
    }

    return usuario


  }

  async findByUser(email: string): Promise<Usuario | undefined> {
    
    return await this.prisma.usuario.findFirst(
      {
        select:{
          id: true,
          nombre: true,
          email: true,
          password: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
        },
        where: { email },
      }
    );

  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {

    await findEntityOrFail(this.prisma, 'usuario', id)

    //para actualizar 
    const usuario = await this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    }
    )

    return usuario
  }

  async remove(id: number) {
    const usuarioFind = await findEntityOrFail(this.prisma, 'usuario', id) as { email: string };

    await this.prisma.usuario.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return `El usuario con ID ${id} ${usuarioFind.email} se ha eliminado`;
  }
}
