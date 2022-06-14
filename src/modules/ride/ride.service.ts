import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Ride, Prisma } from '@prisma/client';

@Injectable()
export class RideService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RideCreateInput): Promise<Ride> {
    return this.prisma.ride.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RideWhereUniqueInput;
    where?: Prisma.RideWhereInput;
    orderBy?: Prisma.RideOrderByWithRelationInput;
  }): Promise<Ride[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ride.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async find(
    rideWhereUniqueInput: Prisma.RideWhereUniqueInput,
  ): Promise<Ride | null> {
    return this.prisma.ride
      .findUnique({
        where: rideWhereUniqueInput,
      })
      .then((data): Ride | null => {
        return data;
      });
  }

  async update(params: {
    where: Prisma.RideWhereUniqueInput;
    data: Prisma.RideUpdateInput;
  }): Promise<Ride> {
    const { where, data } = params;
    return this.prisma.ride.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.RideWhereUniqueInput): Promise<Ride> {
    return this.prisma.ride.delete({
      where,
    });
  }
}
