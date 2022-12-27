import { CriarJogadorDto } from 'src/jogadores/dto/criar-jogador.dto';
import { Jogador } from '../jogadores.interfaces';

export interface ICreate {
  create(data: CriarJogadorDto): Promise<Jogador>;
}
