import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { listenerCount } from 'process';
import { CategoriesService } from './categories.service';
import { Categories } from './contracts/interfaces/categories.interfaces';
import { CreateCategoriesDto } from './dto/createCategoriesDto';

@Controller('/api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createCategoriesDto: CreateCategoriesDto,
  ): Promise<Categories> {
    return await this.categoriesService.create(createCategoriesDto);
  }

  @Get()
  async listAll(): Promise<Categories[]> {
    return await this.categoriesService.listAll();
  }
}
