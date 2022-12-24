import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/clean-node-api'),
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
