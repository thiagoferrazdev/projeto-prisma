import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma';
import { ProductsModule } from './modules/products/products.module';
@Module({
  imports: [PrismaModule,ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
