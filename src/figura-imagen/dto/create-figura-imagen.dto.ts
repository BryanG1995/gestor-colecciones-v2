import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min, MinLength } from "class-validator";






export class CreateFiguraImagenDto {
  @IsInt()
  @Type(() => Number) // Convierte de string a number
  @IsNotEmpty()
  @Min(1)
   idFigura: number;

  @IsString()
  @IsOptional()
  // @MinLength(1)
  
  imagenUrl?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  descripcion: string;
}
