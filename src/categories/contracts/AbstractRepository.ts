import { ICreate, IListAll, IFindById } from '@contracts/index';
import { Injectable } from '@nestjs/common';
import { IFindByCategory } from './IFindByCategory';
import { IFindByNameCategory } from './IFindByNameCategory';
import { Categories } from './interfaces/categories.interfaces';

@Injectable()
export abstract class AbstractRepository
  implements
    ICreate<Categories>,
    IFindByCategory,
    IListAll<Categories>,
    IFindById<Categories>,
    IFindByNameCategory
{
  abstract create(data: Categories): Promise<Categories>;
  abstract findByCategory(categories: string): Promise<Categories>;
  abstract listAll(): Promise<Categories[]>;
  abstract findById(id: string): Promise<Categories>;
  abstract findByNameCategory(category: string): Promise<Categories>;
}
