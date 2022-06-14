import { Test, TestingModule } from '@nestjs/testing';
import { PersonaService } from '../persona.service';
import { PrismaService } from '../../../common/prisma.service';
import { Persona, Prisma } from '@prisma/client';

describe('PersonaService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing prpersonaed from mocking the prisma service.
  let service: PersonaService;

  const persona1: Prisma.PersonaCreateInput = {
    firstName: 'Kosher',
    lastName: 'Crusher',
    bio: 'I am a person who likes to crush',
  };

  let persona1response: Persona;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonaService, PrismaService],
    }).compile();

    service = module.get<PersonaService>(PersonaService);
  });

  // Mocks of the prisma service are not active yet due to my initial environment testing
  it('should not fail to create new persona... lol', async () => {
    await expect(
      service.create(persona1).then((data) => {
        persona1response = data;
        return persona1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(persona1response.id)).toBeTruthy();
  });

  it('should find single persona by id', async () => {
    await expect(
      service.find({ id: persona1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(persona1response);
  });

  it('should return list of personas', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([persona1response]);
  });

  it('should update persona firstname by persona id', async () => {
    const updatedFirstName = 'updated first name';
    await expect(
      service
        .update({
          where: { id: persona1response.id },
          data: {
            firstName: updatedFirstName,
          },
        })
        .then((data) => {
          return data.firstName;
        }),
    ).resolves.toEqual(updatedFirstName);
  });

  it('should not fail to delete new persona... lol', async () => {
    await expect(
      service.delete({ id: persona1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
