import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { Categories } from './contracts/interfaces/categories.interfaces';
import { CreateCategoriesDto } from './dto/createCategoriesDto';
import { UpdateCategoriesDto } from './dto/updateCategoriesDto';

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

  @Get('/id/:_id')
  async findById(@Param('_id') _id: string): Promise<Categories> {
    return this.categoriesService.findById(_id);
  }

  @Get('/name/:categories')
  async findCategory(
    @Param('categories') categories: string,
  ): Promise<Categories> {
    return this.categoriesService.findCategory(categories);
  }

  @Put('/:category')
  // @UsePipes(ValidationPipe)
  async update(
    @Body() data: UpdateCategoriesDto,
    @Param('category') category: string,
  ): Promise<Categories> {
    return this.categoriesService.update(category, data);
  }
}
