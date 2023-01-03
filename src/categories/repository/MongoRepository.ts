import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from '../contracts/interfaces/categories.interfaces';
import { AbstractRepository } from '../contracts/AbstractRepository';

@Injectable()
export class MongoRepository implements AbstractRepository {
  constructor(
    @InjectModel('category') private readonly repository: Model<Categories>,
  ) {}

  async create(data: Categories): Promise<Categories> {
    return (await this.repository.create(data)).save();
  }

  async findByCategory(categories: string): Promise<Categories> {
    return await this.repository.findOne({ categories }).exec();
  }

  async listAll(): Promise<Categories[]> {
    return await this.repository.find().exec();
  }

  async findById(id: string): Promise<Categories> {
    return await this.repository.findOne({ _id: id }).exec();
  }

  async findByNameCategory(categories: string): Promise<Categories> {
    return await this.repository.findOne({ categories }).exec();
  }

  async updateById(_id: string, data: Categories): Promise<Categories> {
    const result = await this.repository
      .findOneAndUpdate({ _id }, { $set: data })
      .exec();

    return result;
  }
}
