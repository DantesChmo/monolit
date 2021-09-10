import { Field, ObjectType, InputType, ID, Int } from 'type-graphql';

@ObjectType()
class User {
  @Field(() => ID)
  id?: number;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field(() => Int)
  age!: number;
}

@InputType()
class UserInput implements Partial<User> {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field(() => Int)
  age!: number
}

export {
  UserInput,
  User
};
