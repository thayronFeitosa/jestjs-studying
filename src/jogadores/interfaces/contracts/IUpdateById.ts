import { Player } from 'src/jogadores/dto/criar-jogador.dto';
import { Jogador } from '../jogadores.interfaces';

export interface IUpdateById {
  updateById(_id: string, data: Player): Promise<Jogador>;
}
