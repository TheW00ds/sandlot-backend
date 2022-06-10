import { Module } from '@nestjs/common';
import { RideRequestService } from './ride-request.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  providers: [RideRequestService, PrismaService],
})
export class RideRequestModule {}
