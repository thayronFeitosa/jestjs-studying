import {
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Jogador } from './interfaces/jogadores.interfaces';
import { Player } from './dto/criar-jogador.dto';
import {
  AbstractRepository,
  IDeleteByEmail,
  IFindByEmail,
} from './interfaces/contracts';
import {
  ICreate,
  IUpdateById,
  IListAll,
  IFindById,
  IDeleteById,
} from '@contracts/index';

@Injectable()
export class JogadoresService
  implements
    ICreate<Jogador>,
    IUpdateById<Jogador>,
    IListAll<Jogador>,
    IFindById<Jogador>,
    IFindByEmail,
    IDeleteByEmail,
    IDeleteById
{
  constructor(
    @Inject('AbstractRepository') private repositoryPlayer: AbstractRepository,
  ) {}

  private readonly logger = new Logger(JogadoresService.name);

  async create(data: Player): Promise<Jogador> {
    const isAlreadyExists = await this.repositoryPlayer.findByEmail(data.email);

    if (!isAlreadyExists) {
      const dataCreate = {
        _id: uuid(),
        ...data,
      };
      return await this.repositoryPlayer.create(dataCreate);
    }
    return isAlreadyExists;
  }

  async updateById(_id: string, data: Player): Promise<Jogador> {
    return await this.repositoryPlayer.updateById(_id, data);
  }

  async findById(_id: string): Promise<Jogador> {
    const result = await this.repositoryPlayer.findById(_id);
    if (!result) {
      throw new NotFoundException('User not found');
    }
    return result;
  }

  async listAll(): Promise<Jogador[]> {
    return await this.repositoryPlayer.listAll();
  }

  async findByEmail(email: string): Promise<Jogador> {
    const player = await this.repositoryPlayer.findByEmail(email);
    if (!player)
      throw new NotFoundException(
        'Não foi encontrado o jogador com o email informado',
      );
    return player;
  }

  async deleteByEmail(email: string): Promise<any> {
    return await this.repositoryPlayer.deleteByEmail(email);
  }

  async deleteById(_id: string): Promise<boolean> {
    const player = await this.repositoryPlayer.deleteById(_id);
    if (!player) {
      throw new NotFoundException('User not found');
    }
    return !!player;
  }
}
