import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repositories/products.repository';

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

  async deleteProduct(id: number): Promise<void> {
    const product = await this._repository.findById(id);

    if (!product)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    await this._repository.delete(id);
  }
}
