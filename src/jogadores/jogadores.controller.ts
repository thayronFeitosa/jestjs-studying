import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { Jogador } from './interfaces/jogadores.interfaces';
import { JogadoresService } from './jogadores.service';

@Controller('jogadores')
export class JogadoresController {
  constructor(private readonly jogadorService: JogadoresService) {}
  @Post()
  async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
    return await this.jogadorService.criarAtualizarJogador(criarJogadorDto);
  }

  @Get()
  async consultarJogadores(
    @Query('email') email: string,
  ): Promise<Jogador[] | Jogador> {
    if (email) {
      return this.jogadorService.encontrarPorEmail(email);
    }
    return this.jogadorService.consultarJogadores();
  }

  @Delete()
  async deletarJogadore(@Query('email') email: string): Promise<void> {
    if (email) {
      this.jogadorService.encontrarPorEmail(email);
    }
    this.jogadorService.deletarPorEmail(email);
  }
}
