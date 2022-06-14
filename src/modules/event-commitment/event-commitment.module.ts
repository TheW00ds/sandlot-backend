import { Module } from '@nestjs/common';
import { EventCommitmentService } from './event-commitment.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [EventCommitmentService, PrismaService],
})
export class EventCommitmentModule {}
