import { Module } from '@nestjs/common';
import { GroupMembershipService } from './group-membership.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [GroupMembershipService, PrismaService],
})
export class GroupMembershipModule {}
