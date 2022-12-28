import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/createCategoriesDto';
import { Categories } from './contracts/interfaces/categories.interfaces';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // @Post()
  // @UsePipes(ValidationPipe)
  // async create(
  //   @Body() createCategoriesDto: CreateCategoriesDto,
  // ): Promise<Categories> {
  //   // return await this.categoriesService.create(createCategoriesDto);
  // }
}
