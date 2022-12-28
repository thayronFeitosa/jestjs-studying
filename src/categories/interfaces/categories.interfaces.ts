import { Document } from 'mongoose';
import { Jogador } from 'src/jogadores/interfaces/jogadores.interfaces';

export interface Categories extends Document {
  readonly categories: string;
  description: string;
  event: Array<Event>;
  player: Array<Jogador>;
}
export interface Event {
  name: string;
  operation: string;
  value: number;
}
