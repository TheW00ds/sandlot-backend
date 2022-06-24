import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Address, Prisma } from '@prisma/client';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AddressCreateInput): Promise<Address> {
    return this.prisma.address.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AddressWhereUniqueInput;
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput;
    include?: Prisma.AddressInclude;
  }): Promise<Address[]> {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.address.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async find(
    addressWhereUniqueInput: Prisma.AddressWhereUniqueInput,
  ): Promise<Address | null> {
    return this.prisma.address
      .findUnique({
        where: addressWhereUniqueInput,
      })
      .then((data): Address | null => {
        return data;
      });
  }

  async update(params: {
    where: Prisma.AddressWhereUniqueInput;
    data: Prisma.AddressUpdateInput;
  }): Promise<Address> {
    const { where, data } = params;
    return this.prisma.address.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.AddressWhereUniqueInput): Promise<Address> {
    return this.prisma.address.delete({
      where,
    });
  }
}
