import { Module } from '@nestjs/common';
import { ProdutoRepository } from 'src/produto/repository/produto.repository';
import { ProdutoController } from './controller/produto.controller';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
