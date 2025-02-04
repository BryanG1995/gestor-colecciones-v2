
import { BaseEntity } from 'src/common/entities/base.entity';
import {Figura} from '../../figura/entities/figura.entity'


export class FiguraImagen extends BaseEntity{
idFigura: bigint ;
imagenUrl: bigint  | null;
descripcion: bigint ;
figura?: Figura ;
}
