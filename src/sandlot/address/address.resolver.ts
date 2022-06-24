import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AddressService } from './address.service';
import { Address, Prisma } from '@prisma/client';

@Resolver()
export class AddressResolver {
  constructor(private addressService: AddressService) {}
  @Query()
  addresses(): Promise<Address[]> {
    return this.addressService.findAll({
      include: { user: true },
    });
  }

  @Mutation()
  createAddress(
    @Args('data')
    data: {
      userId: string;
      placeId: string;
      address: Prisma.AddressCreateInput;
    },
  ): Promise<Address> {
    data.address.user = { connect: { id: data.userId } };
    return this.addressService.create(data.address);
  }
}
