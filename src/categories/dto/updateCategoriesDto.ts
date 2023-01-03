import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator';
import { Event } from '../contracts/interfaces/categories.interfaces';

export class UpdateCategoriesDto {
  @IsString()
  @IsOptional()
  readonly categories: string;

  @IsString()
  description: string;

  @IsArray()
  @ArrayMinSize(1)
  event: Array<Event>;
}
