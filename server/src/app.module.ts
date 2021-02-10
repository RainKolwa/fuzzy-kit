import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      connectionFactory: (connection) => {
        connection.plugin(mongoosePaginate);
      },
    }),
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
