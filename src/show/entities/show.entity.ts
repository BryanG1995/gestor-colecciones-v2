
import { BaseEntity } from 'src/common/entities/base.entity';
import {Figura} from '../../figura/entities/figura.entity'


export class Show extends BaseEntity{
nombre: string ;
figura?: Figura[] ;
}
