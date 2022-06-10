import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { AddressController } from './address.controller';

@Module({
  providers: [AddressService, PrismaService],
  controllers: [AddressController],
})
export class AddressModule {}
