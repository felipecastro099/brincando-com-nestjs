import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';

@Module({
  controllers: [],
  providers: [],
  imports: [ProductModule],
})
export class ApiModule {}
