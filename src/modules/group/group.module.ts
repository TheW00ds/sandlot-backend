import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupMembershipModule } from './group-membership/group-membership.module';
import { GroupMembershipRoleModule } from './group-membership-role/group-membership-role.module';
import { GroupMembershipStatusModule } from './group-membership-status/group-membership-status.module';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { GroupController } from './group.controller';

@Module({
  providers: [GroupService, PrismaService],
  imports: [
    GroupMembershipModule,
    GroupMembershipRoleModule,
    GroupMembershipStatusModule,
  ],
  controllers: [GroupController],
})
export class GroupModule {}
