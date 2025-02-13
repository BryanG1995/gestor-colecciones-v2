import { IsString, IsNotEmpty, MinLength, IsInt, Min } from "class-validator";






export class CreateModeloDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  nombre: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  idMarca: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  idUsuario: number;
}
