import { ICreate, IListAll } from '@contracts/index';
import { Injectable } from '@nestjs/common';
import { IFindByCategory } from './IFindByCategory';
import { Categories } from './interfaces/categories.interfaces';

@Injectable()
export abstract class AbstractRepository
  implements ICreate<Categories>, IFindByCategory, IListAll<Categories>
{
  abstract create(data: Categories): Promise<Categories>;
  abstract findByCategory(categories: string): Promise<Categories>;
  abstract listAll(): Promise<Categories[]>;
}
