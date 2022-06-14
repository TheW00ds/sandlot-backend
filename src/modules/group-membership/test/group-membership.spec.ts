import { Test, TestingModule } from '@nestjs/testing';
import { GroupMembershipService } from '../group-membership.service';
import { PrismaService } from '../../../common/prisma.service';
import { GroupMembership, Prisma } from '@prisma/client';

describe('GroupMembershipService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing prgroupMembershiped from mocking the prisma service.
  let service: GroupMembershipService;

  const groupMembership1: Prisma.GroupMembershipCreateInput = {
    status: 'PENDING',
  };

  let groupMembership1response: GroupMembership;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupMembershipService, PrismaService],
    }).compile();

    service = module.get<GroupMembershipService>(GroupMembershipService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new groupMembership... lol', async () => {
    await expect(
      service.create(groupMembership1).then((data) => {
        groupMembership1response = data;
        return groupMembership1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(groupMembership1response.id)).toBeTruthy();
  });

  it('should find single groupMembership by id', async () => {
    await expect(
      service.find({ id: groupMembership1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(groupMembership1response);
  });

  it('should return list of groupMemberships', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([groupMembership1response]);
  });

  it('should update groupMembership status by groupMembership id', async () => {
    const updatedGroupMembershipStatus = 'APPROVED';
    await expect(
      service
        .update({
          where: { id: groupMembership1response.id },
          data: {
            status: updatedGroupMembershipStatus,
          },
        })
        .then((data) => {
          return data.status;
        }),
    ).resolves.toEqual(updatedGroupMembershipStatus);
  });

  it('should not fail to delete new groupMembership... lol', async () => {
    await expect(
      service.delete({ id: groupMembership1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
