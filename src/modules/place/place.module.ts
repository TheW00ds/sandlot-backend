import { Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { PlaceController } from './place.controller';

@Module({
  providers: [PlaceService, PrismaService],
  controllers: [PlaceController],
})
export class PlaceModule {}
