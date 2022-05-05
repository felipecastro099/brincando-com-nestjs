import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('products')
export class ProductController {
  constructor(private readonly _service: ProductService) {}

  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: HttpStatus.CREATED })
  @ApiBody({ type: CreateProductDTO })
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createProduct(
    @Body() createProductDto: CreateProductDTO,
  ): Promise<Product> {
    return this._service.createProduct(createProductDto);
  }

  @ApiOperation({ summary: 'List all products' })
  @ApiResponse({ type: [UpdateProductDto] })
  @Get()
  async listAllProducts(): Promise<Product[]> {
    return this._service.listAllProducts();
  }

  @ApiOperation({ summary: 'Update product' })
  @ApiBody({ type: UpdateProductDto })
  @Put('/:id')
  async updateProduct(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this._service.updateProduct(Number(id), updateProductDto);
  }

  @ApiOperation({ summary: 'Delete product' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @Delete('/:id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this._service.deleteProduct(Number(id));
  }
}
