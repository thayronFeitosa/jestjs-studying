import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { Jogador } from './interfaces/jogadores.interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class JogadoresService {
  constructor(
    @InjectModel('jogador') private readonly jogadorModel: Model<Jogador>,
  ) {}

  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(
    criarJogadorDto: CriarJogadorDto,
  ): Promise<Jogador> {
    const { email } = criarJogadorDto;
    this.logger.log(`criaJogadorDto ${JSON.stringify(criarJogadorDto)}`);

    const existeJogadores = await this.jogadorModel.findOne({ email }).exec();

    if (!existeJogadores) {
      return await new this.jogadorModel(criarJogadorDto).save();
    }
    return this.atualizar(criarJogadorDto);
  }

  async consultarJogadores(): Promise<Jogador[]> {
    return await this.jogadorModel.find().exec();
  }

  async consultarPorEmail(email: string): Promise<Jogador> {
    const jogador = await this.jogadorModel.findOne({ email }).exec();
    if (!jogador)
      throw new NotFoundException(
        'Não foi encontrado o jogador com o email informado',
      );
    return jogador;
  }

  async deletarPorEmail(email: string): Promise<any> {
    return await this.jogadorModel.deleteOne({ email }).exec();
  }

  private async atualizar(criadJogadorDto: CriarJogadorDto): Promise<Jogador> {
    return await this.jogadorModel
      .findOneAndUpdate({ email: criadJogadorDto.email }, { criadJogadorDto })
      .exec();
  }
}
