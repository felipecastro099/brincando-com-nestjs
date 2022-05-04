import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private readonly _prisma: PrismaService) {}

  async create({ title, content }: CreateProductDTO): Promise<Product> {
    return this._prisma.product.create({
      data: {
        title,
        content,
      },
    });
  }

  async all(): Promise<Product[]> {
    return this._prisma.product.findMany();
  }

  async update(
    id: number,
    { title, content, published }: UpdateProductDto,
  ): Promise<Product> {
    return this._prisma.product.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        published,
      },
    });
  }
}
