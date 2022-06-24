import { Test, TestingModule } from '@nestjs/testing';
import { GroupService } from '../group.service';
import { PrismaService } from '../../../common/prisma.service';
import { Group, Prisma } from '@prisma/client';

describe('GroupService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing prevented from mocking the prisma service.
  let service: GroupService;

  const group1: Prisma.GroupCreateInput = {
    name: 'Group 1',
  };

  let group1response: Group;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupService, PrismaService],
    }).compile();

    service = module.get<GroupService>(GroupService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new group... lol', async () => {
    await expect(
      service.create(group1).then((data) => {
        group1response = data;
        return group1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(group1response.id)).toBeTruthy();
  });

  it('should find single group by id', async () => {
    await expect(
      service.find({ id: group1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(group1response);
  });

  it('should return list of groups', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([group1response]);
  });

  it('should update groupName by groups id', async () => {
    const updatedGroupName = 'new group name';
    await expect(
      service
        .update({
          where: { id: group1response.id },
          data: {
            name: updatedGroupName,
          },
        })
        .then((data) => {
          return data.name;
        }),
    ).resolves.toEqual(updatedGroupName);
  });

  it('should not fail to delete new group... lol', async () => {
    await expect(
      service.delete({ id: group1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
