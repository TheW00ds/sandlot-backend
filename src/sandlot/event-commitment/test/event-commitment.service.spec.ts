import { Test, TestingModule } from '@nestjs/testing';
import { EventCommitmentService } from '../event-commitment.service';
import { PrismaService } from '../../../common/prisma.service';
import { EventCommitment, Prisma } from '@prisma/client';

describe('EventCommitmentService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing preventCommitmented from mocking the prisma service.
  let service: EventCommitmentService;

  const eventCommitment1: Prisma.EventCommitmentUncheckedCreateInput = {
    going: true,
    participating: true,
  };

  let eventCommitment1response: EventCommitment;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventCommitmentService, PrismaService],
    }).compile();

    service = module.get<EventCommitmentService>(EventCommitmentService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new eventCommitment... lol', async () => {
    await expect(
      service.create(eventCommitment1).then((data) => {
        eventCommitment1response = data;
        return eventCommitment1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(eventCommitment1response.id)).toBeTruthy();
  });

  it('should find single eventCommitment by id', async () => {
    await expect(
      service.find({ id: eventCommitment1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(eventCommitment1response);
  });

  it('should return list of eventCommitments', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([eventCommitment1response]);
  });

  it('should update eventCommitment participating by eventCommitment id', async () => {
    const updatedEventCommitmentParticipation = false;
    await expect(
      service
        .update({
          where: { id: eventCommitment1response.id },
          data: {
            participating: updatedEventCommitmentParticipation,
          },
        })
        .then((data) => {
          return data.participating;
        }),
    ).resolves.toEqual(updatedEventCommitmentParticipation);
  });

  it('should not fail to delete new eventCommitment... lol', async () => {
    await expect(
      service.delete({ id: eventCommitment1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
