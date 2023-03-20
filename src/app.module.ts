import { Module } from '@nestjs/common';
import { UsuarioModule } from './controller/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
