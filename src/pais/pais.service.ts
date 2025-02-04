import { Injectable } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';

@Injectable()
export class PaisService {
  create(createPaiDto: CreatePaisDto) {
    return 'This action adds a new pais';
  }

  findAll() {
    return `This action returns all pais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pais`;
  }

  update(id: number, updatePaiDto: UpdatePaisDto) {
    return `This action updates a #${id} pais`;
  }

  remove(id: number) {
    return `This action removes a #${id} pais`;
  }
}
