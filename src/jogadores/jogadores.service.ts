import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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
    const { email } = criarJogadorDto;
    this.logger.log(`criaJogadorDto ${JSON.stringify(criarJogadorDto)}`);
    const existeJogadores = this.jogadores.find(
      (jogador) => jogador.email === email,
    );

    if (!existeJogadores) {
      return this.criar(criarJogadorDto);
    }
    return this.atualizar(existeJogadores, criarJogadorDto);
  }

  async consultarJogadores(): Promise<Jogador[]> {
    return this.lista();
  }

  async consultarPorEmail(email: string): Promise<Jogador> {
    return this.encontrarPorEmail(email);
  }

  private lista(): Jogador[] {
    return this.jogadores;
  }

  async deletarPorEmail(email: string): Promise<void> {
    this.jogadores = this.jogadores.filter(
      (jogador) => jogador.email !== email,
    );
  }

  private criar(criarJogadorDto: CriarJogadorDto): Jogador {
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

  private atualizar(
    jogadorEncontrado: Jogador,
    jogadorCriado: CriarJogadorDto,
  ): Jogador {
    const { nome } = jogadorCriado;
    jogadorEncontrado.nome = nome;
    return jogadorEncontrado;
  }

  encontrarPorEmail(email: string): Jogador {
    const jogador = this.jogadores.find((jogador) => jogador.email === email);
    if (!jogador?.email)
      throw new NotFoundException(
        'Não foi encontrado o jogador com o email informado',
      );
    return jogador;
  }
}
