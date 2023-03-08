import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
  } from '@nestjs/common';
import { Products } from '@prisma/client';

  import { ProductsRepository } from './repositories';
  
  @Injectable()
  export class ProductsService {
    constructor(private readonly productRepository: ProductsRepository) {}
    async getProducts(): Promise<Products[]> {
        try {
          return this.productRepository.findAll();
        } catch {
          throw new InternalServerErrorException();
        }
      }

      async getProductsExpirationToday(): Promise<Products[]> {
        try {
          return this.productRepository.findAllExpirationToday();
        } catch {
          throw new InternalServerErrorException();
        }
      }

      async getProductsExpirationTomorrow(): Promise<Products[]> {
        try {
          return this.productRepository.findAllExpirationTomorrow();
        } catch {
          throw new InternalServerErrorException();
        }
      }

  }