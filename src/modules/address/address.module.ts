import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [AddressService, PrismaService],
})
export class AddressModule {}
