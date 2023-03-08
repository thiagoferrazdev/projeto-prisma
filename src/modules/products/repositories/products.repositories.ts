import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.products.findMany({orderBy:{name:'asc'}});
  }

  findAllExpirationToday() {
    return this.prismaService.products.findMany({where: {days_to_expiration: 0}});
  }

  findAllExpirationTomorrow() {
    return this.prismaService.products.findMany({where: {days_to_expiration: 1}});
  }


  findByUnique(input: Prisma.ProductsWhereUniqueInput) {
    return this.prismaService.products.findUnique({
      where: input,
    });
  }
}