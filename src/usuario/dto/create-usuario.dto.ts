import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
