import {IsDate, IsIn, IsInt, IsNotEmpty, IsOptional, IsString,  IsStrongPassword,  Min,  MinLength} from 'class-validator'






export class CreateMarcaDto {
  
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
