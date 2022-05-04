import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductService {
  constructor(private readonly _repository: ProductRepository) {}

  async createProduct({ title, content }: CreateProductDTO): Promise<Product> {
    return this._repository.create({
      title,
      content,
    });
  }

  async listAllProducts(): Promise<Product[]> {
    return this._repository.all();
  }

  async updateProduct(id: number, data: UpdateProductDto): Promise<Product> {
    return this._repository.update(id, data);
  }
}
