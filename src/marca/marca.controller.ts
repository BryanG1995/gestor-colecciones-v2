import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('marca')
export class MarcaController {
  constructor(private readonly marcaService: MarcaService) {}

  @Post()
  create(@Request() req ,@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcaService.create(createMarcaDto,req.user);
  }

  @Get()
  findAll(@Request() req) {
    return this.marcaService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Request() req ,@Param('id') id: string) {
    return this.marcaService.findOne(+id,req.user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarcaDto: UpdateMarcaDto) {
    return this.marcaService.update(+id, updateMarcaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcaService.remove(+id);
  }
}
