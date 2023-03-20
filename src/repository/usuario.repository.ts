import { Injectable } from '@nestjs/common';
import { AtulizaUsuarioDTO } from 'src/controller/dto/atualizaUsuario.dto';
import { UsuarioEntity } from 'src/entity/usuario.entity';

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
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuário não existe');
    }

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      possivelUsuario[chave] = valor;
    });

    return possivelUsuario;
  }
}
