import { CriarJogadorDto } from 'src/jogadores/dto/criar-jogador.dto';
import { Jogador } from '../jogadores.interfaces';
import { ICreate } from './ICreate';
import { IDeleteByEmail } from './IDeleteByEmail';
import { IDeleteById } from './IDeleteById';
import { IFindByEmail } from './IFindByEmail';
import { IFindById } from './IFindById';
import { IListAll } from './IListAll';
import { IUpdateById } from './IUpdateById';

export abstract class AbstractRepository
  implements
    ICreate,
    IDeleteByEmail,
    IDeleteById,
    IFindByEmail,
    IFindById,
    IListAll,
    IUpdateById
{
  abstract create(data: CriarJogadorDto): Promise<Jogador>;
  abstract deleteByEmail(email: string): Promise<any>;
  abstract deleteById(id: string): Promise<any>;
  abstract findByEmail(email: string): Promise<Jogador>;
  abstract findById(id: string): Promise<Jogador>;
  abstract listAll(): Promise<Jogador[]>;
  abstract updateById(_id: string, data: CriarJogadorDto): Promise<Jogador>;
}
