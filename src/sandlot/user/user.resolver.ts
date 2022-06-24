import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query()
  users(): Promise<User[]> {
    return this.userService.findAll({
      include: {
        addresses: true,
        personas: true,
      },
    });
  }

  @Mutation()
  createUser(@Args('user') user: Prisma.UserCreateInput): Promise<User> {
    return this.userService.create(user);
  }
}
