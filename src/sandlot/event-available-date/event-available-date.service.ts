import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { EventAvailableDate, Prisma } from '@prisma/client';

@Injectable()
export class EventAvailableDateService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.EventAvailableDateCreateInput,
  ): Promise<EventAvailableDate> {
    return this.prisma.eventAvailableDate.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EventAvailableDateWhereUniqueInput;
    where?: Prisma.EventAvailableDateWhereInput;
    orderBy?: Prisma.EventAvailableDateOrderByWithRelationInput;
  }): Promise<EventAvailableDate[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.eventAvailableDate.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async find(
    eventAvailableDateWhereUniqueInput: Prisma.EventAvailableDateWhereUniqueInput,
  ): Promise<EventAvailableDate | null> {
    return this.prisma.eventAvailableDate
      .findUnique({
        where: eventAvailableDateWhereUniqueInput,
      })
      .then((data): EventAvailableDate | null => {
        return data;
      });
  }

  async update(params: {
    where: Prisma.EventAvailableDateWhereUniqueInput;
    data: Prisma.EventAvailableDateUpdateInput;
  }): Promise<EventAvailableDate> {
    const { where, data } = params;
    return this.prisma.eventAvailableDate.update({
      data,
      where,
    });
  }

  async delete(
    where: Prisma.EventAvailableDateWhereUniqueInput,
  ): Promise<EventAvailableDate> {
    return this.prisma.eventAvailableDate.delete({
      where,
    });
  }
}
