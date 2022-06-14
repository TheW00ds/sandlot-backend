import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Ride, Prisma } from '@prisma/client';

@Injectable()
export class RideService {
  constructor(private prisma: PrismaService) {}
}
