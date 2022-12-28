import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/createCategoriesDto';
import { Categories } from './contracts/interfaces/categories.interfaces';
import { AbstractRepository } from './contracts/AbstractRepository';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CategoriesRepository')
    private repositoryPlayer: AbstractRepository,
  ) {}

  async create(createCategoriesDto: CreateCategoriesDto): Promise<Categories> {
    return await this.repositoryPlayer.create(
      createCategoriesDto as Categories,
    );
  }
}
