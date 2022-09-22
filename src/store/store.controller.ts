import { Controller, Get, Param, Query, Put, Body } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('/')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('/:clientEmail/')
  findAll(@Param('clientEmail') clientEmail: string, @Query() request: any) {
    return this.storeService.findAll(clientEmail, request);
  }
  @Get('/:clientEmail/:storeId')
  findOne(
    @Param('clientEmail') clientEmail: string,
    @Param('storeId') storeId: number,
  ) {
    return this.storeService.findOne(clientEmail, storeId);
  }

  @Put('/:clientEmail/:storeId')
	updateProduct(@Body() storeModel:any,@Param() params){
		return   this.storeService.updateProduct(params.clientEmail,params.storeId,storeModel);
	}
}
