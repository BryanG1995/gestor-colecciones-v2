import { Injectable } from '@nestjs/common';
import { CreateFiguraImagenDto } from './dto/create-figura-imagen.dto';
import { UpdateFiguraImagenDto } from './dto/update-figura-imagen.dto';

@Injectable()
export class FiguraImagenService {
  create(createFiguraImagenDto: CreateFiguraImagenDto) {
    return 'This action adds a new figuraImagen';
  }

  findAll() {
    return `This action returns all figuraImagen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} figuraImagen`;
  }

  update(id: number, updateFiguraImagenDto: UpdateFiguraImagenDto) {
    return `This action updates a #${id} figuraImagen`;
  }

  remove(id: number) {
    return `This action removes a #${id} figuraImagen`;
  }
}
