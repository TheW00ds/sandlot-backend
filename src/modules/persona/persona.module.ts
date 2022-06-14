import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [PersonaService, PrismaService],
})
export class PersonaModule {}
