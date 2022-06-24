import { Test, TestingModule } from '@nestjs/testing';
import { AddressService } from '../address.service';
import { PrismaService } from '../../../common/prisma.service';
import { Address, Prisma } from '@prisma/client';

describe('AddressService', () => {
  // TODO - mock prisma service
  // This is a temporary solution to test the service.
  // Currently the tests are running against live postgres database configuration with Prisma.
  // Time constraints and ci/cd environmental testing praddressed from mocking the prisma service.
  let service: AddressService;

  const address1: Prisma.AddressCreateInput = {
    name: 'Address 1',
    street: '123 Main St',
    city: 'Anytown',
    state: 'MD',
    zip: '12345',
    country: 'US',
  };

  let address1response: Address;

  const uuidRegexp = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressService, PrismaService],
    }).compile();

    service = module.get<AddressService>(AddressService);
  });

  it('should not fail to create new address... lol', async () => {
    await expect(
      service.create(address1).then((data) => {
        address1response = data;
        return address1response;
      }),
    ).resolves.not.toThrow();
  });

  it('should return id as valid uuid', () => {
    expect(uuidRegexp.test(address1response.id)).toBeTruthy();
  });

  it('should find single address by id', async () => {
    await expect(
      service.find({ id: address1response.id }).then((data) => {
        return data;
      }),
    ).resolves.toEqual(address1response);
  });

  it('should return list of addresss', async () => {
    await expect(
      service.findAll({}).then((data) => {
        return data;
      }),
    ).resolves.toEqual([address1response]);
  });

  it('should update address name by address id', async () => {
    const updatedAddressName = 'updated address name';
    await expect(
      service
        .update({
          where: { id: address1response.id },
          data: {
            name: updatedAddressName,
          },
        })
        .then((data) => {
          return data.name;
        }),
    ).resolves.toEqual(updatedAddressName);
  });

  it('should not fail to delete new address... lol', async () => {
    await expect(
      service.delete({ id: address1response.id }).then((data) => {
        return data;
      }),
    ).resolves.not.toThrow();
  });
});
