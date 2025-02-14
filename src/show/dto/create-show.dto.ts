import { IsNotEmpty, IsString, MinLength } from 'class-validator';






export class CreateShowDto {
   @IsNotEmpty()
  @IsString()
  @MinLength(1)
  nombre: string;
}
