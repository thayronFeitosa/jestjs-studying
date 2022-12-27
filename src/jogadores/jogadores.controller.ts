import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request as RequestExpress, Response } from 'express';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { Jogador } from './interfaces/jogadores.interfaces';
import { JogadoresService } from './jogadores.service';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros.pipe';
@Controller('jogadores')
export class JogadoresController {
  constructor(private readonly servicePlayer: JogadoresService) {}
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Request() request: RequestExpress, @Res() response: Response) {
    return response.status(500).json({ data: 'ok' });
  }

  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() data: CriarJogadorDto,
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
  ): Promise<void> {
    this.servicePlayer.deleteById(_id);
  }
}
