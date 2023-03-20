import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailEhUnico } from './validator/email-unico.validator';

export class AtulizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'o e-mail informado é inválido' })
  @EmailEhUnico({
    message: 'Já existe um usuário com este e-mail',
  })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
