import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class CreatePaisDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  nombre: string;
}
