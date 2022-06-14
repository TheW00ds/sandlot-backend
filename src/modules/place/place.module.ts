import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [PlaceService, PrismaService],
})
export class PlaceModule {}
