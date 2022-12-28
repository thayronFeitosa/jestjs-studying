import { ICreate } from '@contracts/index';
import { Injectable } from '@nestjs/common';
import { Categories } from '../categories.interfaces';

@Injectable()
export abstract class AbstractRepository implements ICreate<Categories> {
  abstract create(data: Categories): Promise<Categories>;
}
