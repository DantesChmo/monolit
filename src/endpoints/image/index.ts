import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import { BasicResolver } from '../../lib/BasicResolver';
import { ImageResolver } from './resolver';

const imageEndpoint = buildSchemaSync({resolvers: [BasicResolver, ImageResolver]});

export {
  imageEndpoint
};
