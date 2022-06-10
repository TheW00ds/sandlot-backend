import { Module } from '@nestjs/common';
import { EventAvailableDateService } from './event-available-date.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  providers: [EventAvailableDateService, PrismaService],
})
export class EventAvailableDateModule {}
