import { Jogador } from '../jogadores.interfaces';

export interface IFindById {
  findById(id: string): Promise<Jogador>;
}
