
import { BaseEntity } from 'src/common/entities/base.entity';
import {Figura} from '../../figura/entities/figura.entity'
import {Usuario} from '../../usuario/entities/usuario.entity'


export class UsuarioFigura extends BaseEntity{
idUsuario: bigint ;
idFigura: bigint ;
figura?: Figura ;
usuario?: Usuario ;
}
