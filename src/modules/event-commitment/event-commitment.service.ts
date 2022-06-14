import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { EventCommitment, Prisma } from '@prisma/client';

@Injectable()
export class EventCommitmentService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.EventCommitmentCreateInput,
  ): Promise<EventCommitment> {
    return this.prisma.eventCommitment.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EventCommitmentWhereUniqueInput;
    where?: Prisma.EventCommitmentWhereInput;
    orderBy?: Prisma.EventCommitmentOrderByWithRelationInput;
  }): Promise<EventCommitment[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.eventCommitment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async find(
    eventCommitmentWhereUniqueInput: Prisma.EventCommitmentWhereUniqueInput,
  ): Promise<EventCommitment | null> {
    return this.prisma.eventCommitment
      .findUnique({
        where: eventCommitmentWhereUniqueInput,
      })
      .then((data): EventCommitment | null => {
        return data;
      });
  }

  async update(params: {
    where: Prisma.EventCommitmentWhereUniqueInput;
    data: Prisma.EventCommitmentUpdateInput;
  }): Promise<EventCommitment> {
    const { where, data } = params;
    return this.prisma.eventCommitment.update({
      data,
      where,
    });
  }

  async delete(
    where: Prisma.EventCommitmentWhereUniqueInput,
  ): Promise<EventCommitment> {
    return this.prisma.eventCommitment.delete({
      where,
    });
  }
}
