import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesScheme } from './contracts/interfaces/categories.schema';

import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongoRepository } from './repository/MongoRepository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'category', schema: CategoriesScheme }]),
  ],
  controllers: [CategoriesController],
  providers: [
    {
      provide: 'CategoriesRepository',
      useClass: MongoRepository,
    },
    CategoriesService,
  ],
})
export class CategoriesModule {}
