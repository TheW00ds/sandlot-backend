import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Event, Prisma } from '@prisma/client';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}
}
