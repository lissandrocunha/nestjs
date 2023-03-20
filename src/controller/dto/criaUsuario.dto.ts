import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailEhUnico } from './validator/email-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'o e-mail informado é inválido' })
  @EmailEhUnico({
    message: 'Já existe um usuário com este e-mail',
  })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  senha: string;
}
