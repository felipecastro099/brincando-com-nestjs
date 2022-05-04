import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content?: string;
}
