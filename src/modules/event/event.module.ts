import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventAvailableDateModule } from './event-available-date/event-available-date.module';
import { EventCommitmentModule } from './event-commitment/event-commitment.module';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { EventController } from './event.controller';

@Module({
  providers: [EventService, PrismaService],
  imports: [EventAvailableDateModule, EventCommitmentModule],
  controllers: [EventController],
})
export class EventModule {}
