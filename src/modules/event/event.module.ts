import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [EventService, PrismaService],
})
export class EventModule {}
