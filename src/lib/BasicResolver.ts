import { Resolver, Query } from 'type-graphql';

@Resolver()
class BasicResolver {
  @Query()
  root(): boolean {
    return true;
  }
}

export {
  BasicResolver
};
