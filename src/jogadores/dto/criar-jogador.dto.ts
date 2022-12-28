import { IsNotEmpty, IsEmail } from 'class-validator';

export class Player {
  @IsNotEmpty()
  readonly telefoneCelular: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly nome: string;
}
