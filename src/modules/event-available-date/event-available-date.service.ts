import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { EventAvailableDate, Prisma } from '@prisma/client';

@Injectable()
export class EventAvailableDateService {
  constructor(private prisma: PrismaService) {}
}
