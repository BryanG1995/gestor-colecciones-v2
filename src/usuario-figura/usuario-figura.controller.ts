import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioFiguraService } from './usuario-figura.service';
import { CreateUsuarioFiguraDto } from './dto/create-usuario-figura.dto';
import { UpdateUsuarioFiguraDto } from './dto/update-usuario-figura.dto';

@Controller('usuario-figura')
export class UsuarioFiguraController {
  constructor(private readonly usuarioFiguraService: UsuarioFiguraService) {}

  @Post()
  create(@Body() createUsuarioFiguraDto: CreateUsuarioFiguraDto) {
    return this.usuarioFiguraService.create(createUsuarioFiguraDto);
  }

  @Get()
  findAll() {
    return this.usuarioFiguraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioFiguraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioFiguraDto: UpdateUsuarioFiguraDto) {
    return this.usuarioFiguraService.update(+id, updateUsuarioFiguraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioFiguraService.remove(+id);
  }
}
