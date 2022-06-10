import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PersonaModule } from './persona/persona.module';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserService, PrismaService],
  imports: [PersonaModule],
  controllers: [UserController],
})
export class UserModule {}
