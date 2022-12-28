import { Categories } from './interfaces/categories.interfaces';

export interface IFindByCategory {
  findByCategory(categories: string): Promise<Categories>;
}
