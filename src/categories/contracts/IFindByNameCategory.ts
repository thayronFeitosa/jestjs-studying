import { Categories } from './interfaces/categories.interfaces';

export interface IFindByNameCategory {
  findByNameCategory(category: string): Promise<Categories>;
}
