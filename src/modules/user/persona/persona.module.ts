import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { PersonaController } from './persona.controller';

@Module({
  providers: [PersonaService, PrismaService],
  controllers: [PersonaController],
})
export class PersonaModule {}
