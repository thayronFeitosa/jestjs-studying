import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('jogadores')
export class JogadoresController {
  constructor(private readonly jogadorService: JogadoresService) {}
  @Post()
  async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
    return await this.jogadorService.criarAtualizarJogador(criarJogadorDto);
  }
}
