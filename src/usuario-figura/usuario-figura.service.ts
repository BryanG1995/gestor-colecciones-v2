import { Injectable } from '@nestjs/common';
import { CreateUsuarioFiguraDto } from './dto/create-usuario-figura.dto';
import { UpdateUsuarioFiguraDto } from './dto/update-usuario-figura.dto';

@Injectable()
export class UsuarioFiguraService {
  create(createUsuarioFiguraDto: CreateUsuarioFiguraDto) {
    return 'This action adds a new usuarioFigura';
  }

  findAll() {
    return `This action returns all usuarioFigura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioFigura`;
  }

  update(id: number, updateUsuarioFiguraDto: UpdateUsuarioFiguraDto) {
    return `This action updates a #${id} usuarioFigura`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioFigura`;
  }
}
