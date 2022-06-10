import { Module } from '@nestjs/common';
import { GroupMembershipRoleService } from './group-membership-role.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  providers: [GroupMembershipRoleService, PrismaService],
})
export class GroupMembershipRoleModule {}
