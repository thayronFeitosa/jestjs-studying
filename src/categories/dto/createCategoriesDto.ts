import { IsString, IsNotEmpty, IsArray, ArrayMinSize } from 'class-validator';
import { Event } from '../interfaces/categories.interfaces';
export class CreateCategoriesDto {
  @IsString()
  @IsNotEmpty()
  readonly categories: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @ArrayMinSize(1)
  event: Array<Event>;
}
