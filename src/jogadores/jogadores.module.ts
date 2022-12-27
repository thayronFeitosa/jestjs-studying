import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadorSchema } from './interfaces/jogador.schema';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';
import { MongoRepository } from './repository/MongoRepository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'jogador', schema: JogadorSchema }]),
  ],
  controllers: [JogadoresController],
  providers: [
    {
      provide: 'AbstractRepository',
      useClass: MongoRepository,
    },
    JogadoresService,
  ],
})
export class JogadoresModule {}
