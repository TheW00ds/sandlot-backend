import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Group, Prisma } from '@prisma/client';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GroupCreateInput): Promise<Group> {
    return this.prisma.group.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GroupWhereUniqueInput;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput;
  }): Promise<Group[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.group.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async find(
    groupWhereUniqueInput: Prisma.GroupWhereUniqueInput,
  ): Promise<Group | null> {
    return this.prisma.group
      .findUnique({
        where: groupWhereUniqueInput,
      })
      .then((data): Group | null => {
        return data;
      });
  }

  async update(params: {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.GroupUpdateInput;
  }): Promise<Group> {
    const { where, data } = params;
    return this.prisma.group.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.GroupWhereUniqueInput): Promise<Group> {
    return this.prisma.group.delete({
      where,
    });
  }
}
