import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Address, Prisma } from '@prisma/client';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}
}
