import { Test, TestingModule } from '@nestjs/testing';
import { EventService } from '../event.service';
import { PrismaService } from '../../../common/prisma.service';
import { Event, Prisma } from '@prisma/client';

describe('EventService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing prevented from mocking the prisma service.
  let service: EventService;

  const event1: Prisma.EventCreateInput = {
    name: 'Event 1',
  };

  let event1response: Event;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventService, PrismaService],
    }).compile();

    service = module.get<EventService>(EventService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new event... lol', async () => {
    await expect(
      service.create(event1).then((data) => {
        event1response = data;
        return event1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(event1response.id)).toBeTruthy();
  });

  it('should find single event by id', async () => {
    await expect(
      service.find({ id: event1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(event1response);
  });

  it('should return list of events', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([event1response]);
  });

  it('should update event name by event id', async () => {
    const updatedEventName = 'updated event name';
    await expect(
      service
        .update({
          where: { id: event1response.id },
          data: {
            name: updatedEventName,
          },
        })
        .then((data) => {
          return data.name;
        }),
    ).resolves.toEqual(updatedEventName);
  });

  it('should not fail to delete new event... lol', async () => {
    await expect(
      service.delete({ id: event1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
