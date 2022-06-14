import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [GroupService, PrismaService],
})
export class GroupModule {}
