import { Module } from '@nestjs/common';
import { RideService } from './ride.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [RideService, PrismaService],
})
export class RideModule {}
