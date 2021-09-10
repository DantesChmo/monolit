import { Mutation, Resolver, Arg } from 'type-graphql';
import { UserModel } from '../../models/UserModel';
import { User, UserInput } from './schemas';

@Resolver()
class UserResolver {
  @Mutation(() => [User])
  async getUsers(): Promise<User[]> {
    const users = await UserModel.findAll();

    return users.map((rawUser) => {
      const user = rawUser.get();
      return ({
        id: user.id!,
        firstName: user.first_name,
        lastName: user.last_name,
        age: user.age
      });
    });
  }

  @Mutation(() => User)
  async createUser(
    @Arg('user', {nullable: true}) user: UserInput
  ): Promise<User> {
    const response = await UserModel.create({
      first_name: user.firstName,
      last_name: user.lastName,
      age: user.age
    });

    const createdUser = response.get();
    return ({
      id: createdUser.id,
      firstName: createdUser.first_name,
      lastName: createdUser.last_name,
      age: createdUser.age
    });
  }
}

export {
  UserResolver
};
