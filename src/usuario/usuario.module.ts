import { Module } from '@nestjs/common';
import { UsuarioRepository } from 'src/usuario/repository/usuario.repository';
import { EmailEhUnicoValidator } from './controller/dto/validator/email-unico.validator';
import { UsuarioController } from './controller/usuario.controller';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule {}
