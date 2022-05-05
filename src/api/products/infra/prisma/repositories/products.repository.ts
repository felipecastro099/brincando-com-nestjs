import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateProductDTO } from '../../../dto/create-product.dto';
import { UpdateProductDto } from '../../../dto/update-product.dto';

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

  async delete(id: number): Promise<void> {
    await this._prisma.product.delete({
      where: { id },
    });
  }

  async findById(id: number): Promise<Product> {
    return this._prisma.product.findUnique({
      where: { id },
    });
  }
}
