import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Group, Prisma } from '@prisma/client';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}
}
