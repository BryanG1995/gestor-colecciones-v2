import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario } from './entities/usuario.entity';

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
    const usuario = this.prisma.usuario.findMany();
  
    
    return usuario
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique(
      {
        where: { id },
      }
    );

    if(!usuario){
      throw new NotFoundException(
        `Usuario con la id ${id} no se ha encontrado`, 
      );
    }

    return usuario
    

  }

  async findByUser(email: string): Promise<Usuario | undefined> {
    return this.prisma.usuario.findFirst(
      {
        where: { email },
      }
    );

  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    
        const usuarioFind = await this.findOne(id);
    
        if (!usuarioFind) {
          throw new NotFoundException(
            `Usuario con la id ${id} no se ha encontrado`,
          );
        }
    
        //para actualizar 
        const usuario = await this.prisma.usuario.update({
          where: { id },
          data: updateUsuarioDto,
        }
        )
    
        return usuario
  }

 async  remove(id: number) {
  const usuarioFind = await this.findOne(id);
  if (!usuarioFind) {
    throw new NotFoundException(
      `Usuario con la id ${id} no se ha encontrado`,
    );
  }

  await this.prisma.usuario.update({
    where: { id },
    data: { deletedAt: new Date() },
  });

  return `Usuario con ID ${id} se ha eliminado`;
  }
}
