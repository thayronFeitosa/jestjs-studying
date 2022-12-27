import { Jogador } from '../jogadores.interfaces';

export interface IListAll {
  listAll(): Promise<Jogador[]>;
}
