import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Place, Prisma } from '@prisma/client';

@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) {}
}
