
import {Modelo} from '../../modelo/entities/modelo.entity'
import {Show} from '../../show/entities/show.entity'
import {FiguraImagen} from '../../figura-imagen/entities/figura-imagen.entity'
import {UsuarioFigura} from '../../usuario-figura/entities/usuario-figura.entity'
import { BaseEntity } from 'src/common/entities/base.entity';


export class Figura extends BaseEntity {
nombre: string ;
idModelo: bigint ;
idShow: bigint ;
fechaCompra: Date  | null;
precio: number ;
modelo?: Modelo ;
show?: Show ;
figuraImagen?: FiguraImagen[] ;
usuarioFigura?: UsuarioFigura[] ;
}
