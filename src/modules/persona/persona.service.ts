import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Persona, Prisma } from '@prisma/client';

@Injectable()
export class PersonaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PersonaCreateInput): Promise<Persona> {
    return this.prisma.persona.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PersonaWhereUniqueInput;
    where?: Prisma.PersonaWhereInput;
    orderBy?: Prisma.PersonaOrderByWithRelationInput;
  }): Promise<Persona[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.persona.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async find(
    personaWhereUniqueInput: Prisma.PersonaWhereUniqueInput,
  ): Promise<Persona | null> {
    return this.prisma.persona
      .findUnique({
        where: personaWhereUniqueInput,
      })
      .then((data): Persona | null => {
        return data;
      });
  }

  async update(params: {
    where: Prisma.PersonaWhereUniqueInput;
    data: Prisma.PersonaUpdateInput;
  }): Promise<Persona> {
    const { where, data } = params;
    return this.prisma.persona.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.PersonaWhereUniqueInput): Promise<Persona> {
    return this.prisma.persona.delete({
      where,
    });
  }
}
