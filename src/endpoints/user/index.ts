import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import { BasicResolver } from '../../lib/BasicResolver';
import { UserResolver } from './resolver';

const userEndpoint = buildSchemaSync({resolvers: [BasicResolver, UserResolver]});

export {
  userEndpoint
};
