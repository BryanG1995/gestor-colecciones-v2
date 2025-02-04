
import { BaseEntity } from 'src/common/entities/base.entity';
import {Marca} from '../../marca/entities/marca.entity'


export class Pais extends BaseEntity{
nombre: string ;
marca?: Marca[] ;
}
