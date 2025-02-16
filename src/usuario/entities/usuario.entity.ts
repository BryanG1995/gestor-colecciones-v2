
import { BaseEntity } from 'src/common/entities/base.entity';
import {Marca} from '../../marca/entities/marca.entity'
import {Modelo} from '../../modelo/entities/modelo.entity'

import { Exclude } from 'class-transformer';


export class Usuario extends BaseEntity{
nombre: string ;
email: string ;

// @Exclude()
password: string ;


marca?: Marca[] ;
modelo?: Modelo[] ;

}

