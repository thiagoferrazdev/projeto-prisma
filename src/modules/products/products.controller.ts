import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
  } from '@nestjs/common';
  import { ProductsService } from './products.service';
  
  @Controller()
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    @Get('/products/alphabetical/order')
    async getProducts() {
      return this.productsService.getProducts();
    }
    @Get('/products/expiration/today')
    async getProductsExpirationToday() {
      return this.productsService.getProductsExpirationToday();
    }
    @Get('/products/expiration/tomorrow')
    async getProductsExpirationTomorrow() {
      return this.productsService.getProductsExpirationTomorrow();
    }
  }
  