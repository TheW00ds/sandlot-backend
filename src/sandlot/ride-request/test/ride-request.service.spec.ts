import { Test, TestingModule } from '@nestjs/testing';
import { RideRequestService } from '../ride-request.service';
import { PrismaService } from '../../../common/prisma.service';
import { RideRequest, Prisma } from '@prisma/client';

describe('RideRequestService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing prrideRequested from mocking the prisma service.
  let service: RideRequestService;

  const rideRequest1: Prisma.RideRequestCreateInput = {
    seats: 1,
    storageSpace: false,
  };

  let rideRequest1response: RideRequest;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RideRequestService, PrismaService],
    }).compile();

    service = module.get<RideRequestService>(RideRequestService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new rideRequest... lol', async () => {
    await expect(
      service.create(rideRequest1).then((data) => {
        rideRequest1response = data;
        return rideRequest1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(rideRequest1response.id)).toBeTruthy();
  });

  it('should find single rideRequest by id', async () => {
    await expect(
      service.find({ id: rideRequest1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(rideRequest1response);
  });

  it('should return list of rideRequests', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([rideRequest1response]);
  });

  it('should update rideRequest seats by rideRequest id', async () => {
    const updatedRideRequestSeats = 2;
    await expect(
      service
        .update({
          where: { id: rideRequest1response.id },
          data: {
            seats: updatedRideRequestSeats,
          },
        })
        .then((data) => {
          return data.seats;
        }),
    ).resolves.toEqual(updatedRideRequestSeats);
  });

  it('should not fail to delete new rideRequest... lol', async () => {
    await expect(
      service.delete({ id: rideRequest1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
