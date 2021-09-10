import { graphqlUploadExpress } from 'graphql-upload';
import { Router } from '../lib/Router';
import { userEndpoint, imageEndpoint } from '../endpoints';

const routerV0 = new Router('v0')
  .add({path: '/user', endpoint: userEndpoint})
  .add({
    path: '/image',
    endpoint: imageEndpoint,
    middlewares: [graphqlUploadExpress({maxFieldSize: 10000000, maxFiles: 10})]
  });

export {
  routerV0
};
