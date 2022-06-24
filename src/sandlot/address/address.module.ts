import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { PrismaService } from 'src/common/prisma.service';
import { AddressResolver } from './address.resolver';

@Module({
  providers: [AddressService, PrismaService, AddressResolver],
})
export class AddressModule {}
