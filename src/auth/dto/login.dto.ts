import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {


  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
