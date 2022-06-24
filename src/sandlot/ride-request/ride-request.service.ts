import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { RideRequest, Prisma } from '@prisma/client';

@Injectable()
export class RideRequestService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RideRequestCreateInput): Promise<RideRequest> {
    return this.prisma.rideRequest.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RideRequestWhereUniqueInput;
    where?: Prisma.RideRequestWhereInput;
    orderBy?: Prisma.RideRequestOrderByWithRelationInput;
  }): Promise<RideRequest[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.rideRequest.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async find(
    rideRequestWhereUniqueInput: Prisma.RideRequestWhereUniqueInput,
  ): Promise<RideRequest | null> {
    return this.prisma.rideRequest
      .findUnique({
        where: rideRequestWhereUniqueInput,
      })
      .then((data): RideRequest | null => {
        return data;
      });
  }

  async update(params: {
    where: Prisma.RideRequestWhereUniqueInput;
    data: Prisma.RideRequestUpdateInput;
  }): Promise<RideRequest> {
    const { where, data } = params;
    return this.prisma.rideRequest.update({
      data,
      where,
    });
  }

  async delete(
    where: Prisma.RideRequestWhereUniqueInput,
  ): Promise<RideRequest> {
    return this.prisma.rideRequest.delete({
      where,
    });
  }
}
