import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateCategoriesDto } from './dto/createCategoriesDto';
import { Categories } from './contracts/interfaces/categories.interfaces';
import { AbstractRepository } from './contracts/AbstractRepository';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CategoriesRepository')
    private repository: AbstractRepository,
  ) {}

  async create(createCategoriesDto: CreateCategoriesDto): Promise<Categories> {
    const { categories } = createCategoriesDto;
    const alreadyExistsCategory = await this.repository.findByCategory(
      categories,
    );
    if (alreadyExistsCategory) {
      throw new BadRequestException(`Categories ${categories} already exists!`);
    }
    return await this.repository.create(createCategoriesDto as Categories);
  }

  async listAll(): Promise<Categories[]> {
    return await this.repository.listAll();
  }
}
