import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './order.schema';
import { CreateOrderDto, ListAllEntities } from './dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private orderModel: Model<OrderDocument>) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  async findAll(query: ListAllEntities): Promise<Order[]> {
    return this.orderModel.find(query).exec();
  }

  async findById(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }
}
