import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  no: string;

  @Prop()
  name: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
