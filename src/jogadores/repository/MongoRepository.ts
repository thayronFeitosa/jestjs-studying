import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CriarJogadorDto } from '../dto/criar-jogador.dto';
import { AbstractRepository } from '../interfaces/contracts/AbstractRepository';
import { Jogador } from '../interfaces/jogadores.interfaces';

@Injectable()
export class MongoRepository implements AbstractRepository {
  constructor(
    @InjectModel('jogador') private readonly repository: Model<Jogador>,
  ) {}

  async create(data: CriarJogadorDto): Promise<Jogador> {
    return (await this.repository.create(data)).save();
  }

  async deleteByEmail(email: string): Promise<any> {
    const result = await this.repository.findOneAndDelete({ email }).exec();
    return result;
  }

  async deleteById(id: string): Promise<any> {
    const result = await this.repository.findOneAndDelete({ _id: id }).exec();
    return result;
  }

  async findByEmail(email: string): Promise<Jogador> {
    const result = await this.repository.findOne({ email }).exec();
    return result;
  }

  async findById(id: string): Promise<Jogador> {
    const result = await this.repository.findOne({ id }).exec();
    return result;
  }

  async listAll(): Promise<Jogador[]> {
    const result = await this.repository.find().exec();
    return result;
  }

  async updateById(_id: string, data: CriarJogadorDto): Promise<Jogador> {
    const result = await this.repository
      .findOneAndUpdate({ _id }, { $set: data })
      .exec();

    return result;
  }
}
