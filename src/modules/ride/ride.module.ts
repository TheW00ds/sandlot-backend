import { Module } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideRequestModule } from './ride-request/ride-request.module';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { RideController } from './ride.controller';

@Module({
  providers: [RideService, PrismaService],
  imports: [RideRequestModule],
  controllers: [RideController],
})
export class RideModule {}
