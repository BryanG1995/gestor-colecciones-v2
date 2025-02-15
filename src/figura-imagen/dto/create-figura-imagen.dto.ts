import { IsInt, IsNotEmpty, IsString, Min, MinLength } from "class-validator";






export class CreateFiguraImagenDto {
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  idFigura: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  imagenUrl?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  descripcion: string;
}
