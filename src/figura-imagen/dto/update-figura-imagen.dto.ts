import { PartialType } from '@nestjs/mapped-types';
import { CreateFiguraImagenDto } from './create-figura-imagen.dto';

export class UpdateFiguraImagenDto extends PartialType(CreateFiguraImagenDto) {}
