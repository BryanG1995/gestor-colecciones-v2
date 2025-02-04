
import { BaseEntity } from 'src/common/entities/base.entity';
import {Figura} from '../../figura/entities/figura.entity'
import {Marca} from '../../marca/entities/marca.entity'
import {Usuario} from '../../usuario/entities/usuario.entity'


export class Modelo extends BaseEntity{
nombre: string ;
idMarca: bigint ;
idUsuario: bigint  | null;
figura?: Figura[] ;
marca?: Marca ;
usuario?: Usuario  | null;
}
