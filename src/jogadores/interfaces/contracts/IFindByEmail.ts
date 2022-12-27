import { Jogador } from '../jogadores.interfaces';

export interface IFindByEmail {
  findByEmail(email: string): Promise<Jogador>;
}
