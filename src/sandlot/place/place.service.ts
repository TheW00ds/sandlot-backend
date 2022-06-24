import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Place, Prisma } from '@prisma/client';

@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PlaceCreateInput): Promise<Place> {
    return this.prisma.place.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PlaceWhereUniqueInput;
    where?: Prisma.PlaceWhereInput;
    orderBy?: Prisma.PlaceOrderByWithRelationInput;
  }): Promise<Place[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.place.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async find(
    placeWhereUniqueInput: Prisma.PlaceWhereUniqueInput,
  ): Promise<Place | null> {
    return this.prisma.place
      .findUnique({
        where: placeWhereUniqueInput,
      })
      .then((data): Place | null => {
        return data;
      });
  }

  async update(params: {
    where: Prisma.PlaceWhereUniqueInput;
    data: Prisma.PlaceUpdateInput;
  }): Promise<Place> {
    const { where, data } = params;
    return this.prisma.place.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.PlaceWhereUniqueInput): Promise<Place> {
    return this.prisma.place.delete({
      where,
    });
  }
}
