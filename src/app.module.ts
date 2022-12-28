import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://172.25.0.2:27017/smartranking'),
    JogadoresModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
