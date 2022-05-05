import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './infra/prisma/repositories/products.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, ProductRepository],
  imports: [],
})
export class ProductModule {}
