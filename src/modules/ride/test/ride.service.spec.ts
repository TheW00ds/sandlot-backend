import { Test, TestingModule } from '@nestjs/testing';
import { RideService } from '../ride.service';
import { PrismaService } from '../../../common/prisma.service';
import { Ride, Prisma } from '@prisma/client';

describe('RideService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing prrideed from mocking the prisma service.
  let service: RideService;

  const ride1: Prisma.RideCreateInput = {
    seats: 2,
    storageSpace: true,
  };

  let ride1response: Ride;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RideService, PrismaService],
    }).compile();

    service = module.get<RideService>(RideService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new ride... lol', async () => {
    await expect(
      service.create(ride1).then((data) => {
        ride1response = data;
        return ride1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(ride1response.id)).toBeTruthy();
  });

  it('should find single ride by id', async () => {
    await expect(
      service.find({ id: ride1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(ride1response);
  });

  it('should return list of rides', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([ride1response]);
  });

  it('should update ride seats by ride id', async () => {
    const updatedRideSeats = 1;
    await expect(
      service
        .update({
          where: { id: ride1response.id },
          data: {
            seats: updatedRideSeats,
          },
        })
        .then((data) => {
          return data.seats;
        }),
    ).resolves.toEqual(updatedRideSeats);
  });

  it('should not fail to delete new ride... lol', async () => {
    await expect(
      service.delete({ id: ride1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
