import { Test, TestingModule } from '@nestjs/testing';
import { EventAvailableDateService } from '../event-available-date.service';
import { PrismaService } from '../../../common/prisma.service';
import { EventAvailableDate, Prisma } from '@prisma/client';

describe('EventAvailableDateService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing preventAvailableDateed from mocking the prisma service.
  let service: EventAvailableDateService;

  const eventAvailableDate1: Prisma.EventAvailableDateUncheckedCreateInput = {
    date: new Date(2022, 1, 1),
  };

  let eventAvailableDate1response: EventAvailableDate;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventAvailableDateService, PrismaService],
    }).compile();

    service = module.get<EventAvailableDateService>(EventAvailableDateService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new eventAvailableDate... lol', async () => {
    await expect(
      service.create(eventAvailableDate1).then((data) => {
        eventAvailableDate1response = data;
        return eventAvailableDate1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(eventAvailableDate1response.id)).toBeTruthy();
  });

  it('should find single eventAvailableDate by id', async () => {
    await expect(
      service.find({ id: eventAvailableDate1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(eventAvailableDate1response);
  });

  it('should return list of eventAvailableDates', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([eventAvailableDate1response]);
  });

  it('should update eventAvailableDate participating by eventAvailableDate id', async () => {
    const updatedEventAvailableDate = new Date(2022, 1, 4);
    await expect(
      service
        .update({
          where: { id: eventAvailableDate1response.id },
          data: {
            date: updatedEventAvailableDate,
          },
        })
        .then((data) => {
          return data.date;
        }),
    ).resolves.toEqual(updatedEventAvailableDate);
  });

  it('should not fail to delete new eventAvailableDate... lol', async () => {
    await expect(
      service.delete({ id: eventAvailableDate1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
