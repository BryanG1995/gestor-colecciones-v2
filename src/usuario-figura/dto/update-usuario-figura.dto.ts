import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioFiguraDto } from './create-usuario-figura.dto';

export class UpdateUsuarioFiguraDto extends PartialType(CreateUsuarioFiguraDto) {}
