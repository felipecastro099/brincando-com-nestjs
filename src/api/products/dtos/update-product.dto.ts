import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  published?: boolean;

  @IsNotEmpty()
  content?: string;
}
