import { Module } from '@nestjs/common';
import { UsuarioRepository } from 'src/repository/usuario.repository';
import { EmailEhUnicoValidator } from './dto/validator/email-unico.validator';
import { UsuarioController } from './usuario.controller';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule {}
