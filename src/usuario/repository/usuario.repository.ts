import { Injectable } from '@nestjs/common';
import { AtulizaUsuarioDTO } from 'src/usuario/controller/dto/atualizaUsuario.dto';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];
  async listar() {
    return this.usuarios;
  }

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
    console.log('usuario cadastrado');
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<AtulizaUsuarioDTO>) {
    const usuario = this.buscaPorId(id);

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuario[chave] = valor;
    });

    return usuario;
  }

  async remove(id: string) {
    const usuario = this.buscaPorId(id);

    this.usuarios = this.usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );

    return usuario;
  }

  private buscaPorId(id: string) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuário não existe');
    }
    return possivelUsuario;
  }
}
