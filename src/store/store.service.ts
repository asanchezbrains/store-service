import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { Store } from 'src/entity/stores.entity';
import { Order } from 'src/entity/orders.entity';

@Injectable()
export class StoreService {
  constructor(
    private configService: ConfigService,
    @InjectRepository(Store) private storesRepository: Repository<Store>,
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
    private readonly httpService: HttpService,
  ) {}

  async findAll(clientEmail: string, request: any): Promise<object> {
    try {
      console.log(clientEmail)
      const result = await this.storesRepository
        .createQueryBuilder('store')
        .where(`store.responsableEmail = "${clientEmail}"`)
        .getMany();
      console.log(result)

      return result;
    } catch (error) {
      Logger.error(error, StoreService.name);
      throw error;
    }
  }

  async findOne(clientEmail: string, storeId: number): Promise<object> {
    try {

      const result = await this.storesRepository
        .createQueryBuilder('store')
        .where(`store.responsableEmail = "${clientEmail}"`)
        .andWhere(`store.id = ${storeId}`)
        .getMany();

      return result;
    } catch (error) {
      Logger.error(error, StoreService.name);
      throw error;
    }
  }

  async updateProduct(clientEmail: string, storeId: number,store:any){
		await this.storesRepository.update(storeId,store);
	}
}
