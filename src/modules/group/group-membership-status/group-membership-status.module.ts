import { Module } from '@nestjs/common';
import { GroupMembershipStatusService } from './group-membership-status.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  providers: [GroupMembershipStatusService, PrismaService],
})
export class GroupMembershipStatusModule {}
