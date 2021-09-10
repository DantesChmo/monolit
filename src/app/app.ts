import express from 'express';
import cors from 'cors';
import { bodyParserGraphQL } from 'body-parser-graphql';
import { routerV0 } from '../router';

const app = express()
  .use(cors())
  .use(bodyParserGraphQL())
  .use(routerV0.getInstance())

export {
  app
};
