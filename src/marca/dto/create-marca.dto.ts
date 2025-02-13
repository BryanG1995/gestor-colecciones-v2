import {IsDate, IsIn, IsInt, IsNotEmpty, IsOptional, IsString,  IsStrongPassword,  Min,  MinLength} from 'class-validator'






export class CreateMarcaDto {
  //TODO: Agregar las validaciones al resto de dtos a validar y revisar respuestas de api por decoradores en español
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  nombre: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  idPais: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  idUsuario: number;
}
