import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FiguraImagenService } from './figura-imagen.service';
import { CreateFiguraImagenDto } from './dto/create-figura-imagen.dto';
import { UpdateFiguraImagenDto } from './dto/update-figura-imagen.dto';

@Controller('figura-imagen')
export class FiguraImagenController {
  constructor(private readonly figuraImagenService: FiguraImagenService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createFiguraImagenDto: CreateFiguraImagenDto,
    @UploadedFile() file: Express.Multer.File
  ) {

  
    return this.figuraImagenService.create(createFiguraImagenDto, file);
  }

  @Get()
  findAll() {
    return this.figuraImagenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.figuraImagenService.findOne(+id);
  }

  @Get('figura/:id') 
  findFigureImage(@Param('id') id: string) {
    return this.figuraImagenService.findFigureImages(+id);
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
