import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  no: string;

  @ApiProperty()
  name: string;
}

export class ListAllEntities {
  @ApiProperty()
  name: string;
}
