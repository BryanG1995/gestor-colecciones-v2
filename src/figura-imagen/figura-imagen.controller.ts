import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FiguraImagenService } from './figura-imagen.service';
import { CreateFiguraImagenDto } from './dto/create-figura-imagen.dto';
import { UpdateFiguraImagenDto } from './dto/update-figura-imagen.dto';

@Controller('figura-imagen')
export class FiguraImagenController {
  constructor(private readonly figuraImagenService: FiguraImagenService) {}

  @Post()
  create(@Body() createFiguraImagenDto: CreateFiguraImagenDto) {
    return this.figuraImagenService.create(createFiguraImagenDto);
  }

  @Get()
  findAll() {
    return this.figuraImagenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.figuraImagenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFiguraImagenDto: UpdateFiguraImagenDto) {
    return this.figuraImagenService.update(+id, updateFiguraImagenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.figuraImagenService.remove(+id);
  }
}
