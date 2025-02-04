
import {Pais} from '../../pais/entities/pais.entity'
import {Usuario} from '../../usuario/entities/usuario.entity'
import {Modelo} from '../../modelo/entities/modelo.entity'
import { BaseEntity } from 'src/common/entities/base.entity';


export class Marca extends BaseEntity {
nombre: string ;
idPais: bigint ;
idUsuario: bigint  | null;
pais?: Pais ;
usuario?: Usuario  | null;
modelo?: Modelo[] ;
}
