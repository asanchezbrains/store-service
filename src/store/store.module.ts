import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store } from 'src/entity/stores.entity';
import { Order } from 'src/entity/orders.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Store,Order]),
    HttpModule,
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
