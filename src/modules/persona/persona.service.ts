import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Persona, Prisma } from '@prisma/client';

@Injectable()
export class PersonaService {
  constructor(private prisma: PrismaService) {}
}
