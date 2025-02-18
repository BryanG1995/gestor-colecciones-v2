import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request } from '@nestjs/common';
import { FiguraService } from './figura.service';
import { CreateFiguraDto } from './dto/create-figura.dto';
import { UpdateFiguraDto } from './dto/update-figura.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('figura')
export class FiguraController {
  constructor(private readonly figuraService: FiguraService) {}

  @Post()
  create(@Request() req ,@Body() createFiguraDto: CreateFiguraDto) {
    
    return this.figuraService.create(createFiguraDto,req.user);
  }

  @Get()
  findAll(@Request() req ) {
    return this.figuraService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Request() req ,@Param('id') id: string) {
    return this.figuraService.findOne(+id,req.user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFiguraDto: UpdateFiguraDto) {
    return this.figuraService.update(+id, updateFiguraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.figuraService.remove(+id);
  }
}
