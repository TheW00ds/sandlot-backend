import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { PrismaService } from '../../../common/prisma.service';
import { User, Prisma } from '@prisma/client';

describe('UserService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing prevented from mocking the prisma service.
  let service: UserService;

  const user1: Prisma.UserCreateInput = {
    userName: 'user1',
    email: 'user1@gmail.com',
    password: '123456',
  };

  let user1response: User;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new user... lol', async () => {
    await expect(
      service.create(user1).then((data) => {
        user1response = data;
        return user1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(user1response.id)).toBeTruthy();
  });

  it('should find single user by id', async () => {
    await expect(
      service.find({ id: user1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(user1response);
  });

  it('should return list of users', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([user1response]);
  });

  it('should update userName by users id', async () => {
    const updatedUserName = 'bart';
    await expect(
      service
        .update({
          where: { id: user1response.id },
          data: {
            userName: updatedUserName,
          },
        })
        .then((data) => {
          return data.userName;
        }),
    ).resolves.toEqual(updatedUserName);
  });

  it('should not fail to delete new user... lol', async () => {
    await expect(
      service.delete({ id: user1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
