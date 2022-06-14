import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { GroupMembership, Prisma } from '@prisma/client';

@Injectable()
export class GroupMembershipService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.GroupMembershipCreateInput,
  ): Promise<GroupMembership> {
    return this.prisma.groupMembership.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GroupMembershipWhereUniqueInput;
    where?: Prisma.GroupMembershipWhereInput;
    orderBy?: Prisma.GroupMembershipOrderByWithRelationInput;
  }): Promise<GroupMembership[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.groupMembership.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async find(
    groupMembershipWhereUniqueInput: Prisma.GroupMembershipWhereUniqueInput,
  ): Promise<GroupMembership | null> {
    return this.prisma.groupMembership
      .findUnique({
        where: groupMembershipWhereUniqueInput,
      })
      .then((data): GroupMembership | null => {
        return data;
      });
  }

  async update(params: {
    where: Prisma.GroupMembershipWhereUniqueInput;
    data: Prisma.GroupMembershipUpdateInput;
  }): Promise<GroupMembership> {
    const { where, data } = params;
    return this.prisma.groupMembership.update({
      data,
      where,
    });
  }

  async delete(
    where: Prisma.GroupMembershipWhereUniqueInput,
  ): Promise<GroupMembership> {
    return this.prisma.groupMembership.delete({
      where,
    });
  }
}
