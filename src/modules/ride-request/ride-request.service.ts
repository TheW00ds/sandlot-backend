import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { RideRequest, Prisma } from '@prisma/client';

@Injectable()
export class RideRequestService {
  constructor(private prisma: PrismaService) {}
}
