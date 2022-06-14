import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { GroupMembership, Prisma } from '@prisma/client';

@Injectable()
export class GroupMembershipService {
  constructor(private prisma: PrismaService) {}
}
