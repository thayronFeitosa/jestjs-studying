import {
  ICreate,
  IDeleteById,
  IFindById,
  IListAll,
  IUpdateById,
} from '@contracts/index';
import { Player } from 'src/jogadores/dto/criar-jogador.dto';
import { Jogador } from '../jogadores.interfaces';

import { IDeleteByEmail } from './IDeleteByEmail';
import { IFindByEmail } from './IFindByEmail';

export abstract class AbstractRepository
  implements
    ICreate<Jogador>,
    IDeleteByEmail,
    IDeleteById,
    IFindByEmail,
    IFindById<Jogador>,
    IListAll<Jogador>,
    IUpdateById<Jogador>
{
  abstract create(data: Player): Promise<Jogador>;
  abstract deleteByEmail(email: string): Promise<any>;
  abstract deleteById(id: string): Promise<any>;
  abstract findByEmail(email: string): Promise<Jogador>;
  abstract findById(id: string): Promise<Jogador>;
  abstract listAll(): Promise<Jogador[]>;
  abstract updateById(_id: string, data: Player): Promise<Jogador>;
}
