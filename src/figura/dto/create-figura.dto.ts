import { IsInt, IsNotEmpty, IsOptional, IsString, Min, MinLength } from "class-validator";






export class CreateFiguraDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  nombre: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  idModelo: number;

  // @IsInt()
  // @IsNotEmpty()
  // @Min(1)

  // idUsuario: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  idShow: number;

  @IsOptional()
  fechaCompra?: Date;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  precio: number;


}
