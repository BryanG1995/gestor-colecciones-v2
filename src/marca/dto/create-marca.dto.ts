import { IsNotEmpty } from "class-validator";






export class CreateMarcaDto {
  //TODO: Agregar las validaciones al resto de dtos a validar
  @IsNotEmpty()
  nombre: string;

  idPais: number;
  idUsuario: number;
}
