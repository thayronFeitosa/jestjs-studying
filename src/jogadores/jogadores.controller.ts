import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Player } from './dto/criar-jogador.dto';
import { Jogador } from './interfaces/jogadores.interfaces';
import { JogadoresService } from './jogadores.service';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros.pipe';
@Controller('jogadores')
export class JogadoresController {
  constructor(private readonly servicePlayer: JogadoresService) {}
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() request: Player) {
    return await this.servicePlayer.create(request);
  }

  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() data: Player,
    @Param('_id', JogadoresValidacaoParametrosPipe) _id: string,
  ) {
    return await this.servicePlayer.updateById(_id, data);
  }

  @Get()
  async consultarJogadores(): Promise<Jogador[]> {
    return this.servicePlayer.listAll();
  }

  @Get('/:_id')
  async findById(
    @Param('_id', JogadoresValidacaoParametrosPipe) _id: string,
  ): Promise<Jogador> {
    return this.servicePlayer.findById(_id);
  }

  @Delete('/:_id')
  async deletarJogadore(
    @Param('_id', JogadoresValidacaoParametrosPipe) _id: string,
  ): Promise<any> {
    return this.servicePlayer.deleteById(_id);
  }
}
