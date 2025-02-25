import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('modelo')
export class ModeloController {
  constructor(private readonly modeloService: ModeloService) {}

  @Post()
  create(@Request() req ,@Body() createModeloDto: CreateModeloDto) {
    return this.modeloService.create(createModeloDto,req.user);
  }

  @Get()
  findAll(@Request() req ) {
    return this.modeloService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Request() req ,@Param('id') id: string) {
    return this.modeloService.findOne(+id,req.user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModeloDto: UpdateModeloDto) {
    return this.modeloService.update(+id, updateModeloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeloService.remove(+id);
  }
}
