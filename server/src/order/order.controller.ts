import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateOrderDto } from './dto';
import { OrderService } from './order.service';
import { Order } from './interfaces/order.interface';

@Controller('orders')
export class OrderController {
  constructor(private ordersService: OrderService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Order> {
    return this.ordersService.findById(params.id);
  }
}
