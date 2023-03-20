import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { UsuarioRepository } from 'src/repository/usuario.repository';
import { CriaUsuarioDTO } from './dto/criaUsuario.dto';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { AtulizaUsuarioDTO } from './dto/atualizaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Get('/list')
  async listarUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );
    return usuariosLista;
  }

  @Post()
  async criarUsuario(@Body() usuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.nome = usuario.nome;
    usuarioEntity.email = usuario.email;
    usuarioEntity.senha = usuario.senha;
    usuarioEntity.id = uuid();
    this.usuarioRepository.salvar(usuarioEntity);

    return {
      usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      mensagem: 'usuário criado com sucesso',
    };
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtulizaUsuarioDTO,
  ) {
    const usuarioAtualizado = await this.usuarioRepository.atualiza(
      id,
      novosDados,
    );

    return {
      usuario: usuarioAtualizado,
      mensagem: 'usuário atualizado com sucesso',
    };
  }
}
