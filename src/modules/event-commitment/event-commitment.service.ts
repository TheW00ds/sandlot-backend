import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { EventCommitment, Prisma } from '@prisma/client';

@Injectable()
export class EventCommitmentService {
  constructor(private prisma: PrismaService) {}
}
