import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findById(id: string): Promise<Categories> {
    const category = await this.repository.findById(id);

    if (!category) {
      throw new NotFoundException('Categories not found');
    }
    return category;
  }
  async findCategory(categories: string): Promise<Categories> {
    const category = await this.repository.findByNameCategory(categories);

    if (!category) {
      throw new NotFoundException('Categories not found');
    }
    return category;
  }
}
