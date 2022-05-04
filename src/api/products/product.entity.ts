import { Prisma } from '@prisma/client';

export class ProductEntity implements Prisma.ProductUncheckedCreateInput {
  id?: number;
  title: string;
  published?: boolean;
  content?: string;
}
