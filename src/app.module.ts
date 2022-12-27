import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://172.25.0.2:27017/smartranking'),
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
