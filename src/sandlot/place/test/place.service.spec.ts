import { Test, TestingModule } from '@nestjs/testing';
import { PlaceService } from '../place.service';
import { PrismaService } from '../../../common/prisma.service';
import { Place, Prisma } from '@prisma/client';

describe('PlaceService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing prplaceed from mocking the prisma service.
  let service: PlaceService;

  const place1: Prisma.PlaceCreateInput = {
    name: 'Place 1',
  };

  let place1response: Place;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceService, PrismaService],
    }).compile();

    service = module.get<PlaceService>(PlaceService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new place... lol', async () => {
    await expect(
      service.create(place1).then((data) => {
        place1response = data;
        return place1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(place1response.id)).toBeTruthy();
  });

  it('should find single place by id', async () => {
    await expect(
      service.find({ id: place1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(place1response);
  });

  it('should return list of places', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([place1response]);
  });

  it('should update place name by place id', async () => {
    const updatedPlaceName = 'updated place name';
    await expect(
      service
        .update({
          where: { id: place1response.id },
          data: {
            name: updatedPlaceName,
          },
        })
        .then((data) => {
          return data.name;
        }),
    ).resolves.toEqual(updatedPlaceName);
  });

  it('should not fail to delete new place... lol', async () => {
    await expect(
      service.delete({ id: place1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
