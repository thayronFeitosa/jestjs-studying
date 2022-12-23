import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { Jogador } from './interfaces/jogadores.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable()
export class JogadoresService {
  private readonly logger = new Logger(JogadoresService.name);
  private jogadores: Jogador[] = [];

  async criarAtualizarJogador(
    criarJogadorDto: CriarJogadorDto,
  ): Promise<Jogador> {
    this.logger.log(`criaJogadorDto ${JSON.stringify(criarJogadorDto)}`);

    return this.criat(criarJogadorDto);
  }

  private criat(criarJogadorDto: CriarJogadorDto): Jogador {
    const { email, nome, telefoneCelular } = criarJogadorDto;

    const jogador: Jogador = {
      _id: uuid(),
      email,
      nome,
      telefoneCelular,
      ranking: 'A',
      posicaoRanking: '1',
      urlFotoJogador: 'https://jogadores.io/jog',
    };

    this.jogadores.push(jogador);
    return jogador;
  }
}
