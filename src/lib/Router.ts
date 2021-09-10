import { Router as ExpressRouter } from 'express';
import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

interface RouterNodeParameters {
  path: string;
  endpoint: GraphQLSchema;
  middlewares?: any[];
}

class Router {
  private readonly _nodes: RouterNodeParameters[];

  private readonly _version: string;

  private _instance: ExpressRouter | null;

  constructor(version: string) {
    this._nodes = [];
    this._instance = null;
    this._version = version;
  }

  public add(params: RouterNodeParameters): this {
    this._nodes.push(params);
    return this;
  }

  public getInstance(): ExpressRouter {
    if (this._instance) {
      return this._instance;
    }

    const router = ExpressRouter();
    this._nodes.forEach(({path, endpoint, middlewares = []}) => {
      middlewares?.push(graphqlHTTP({schema: endpoint, graphiql: true}));
      router.post(`/${this._version}${path}`, middlewares);
    });

    return this._instance = router;
  }
}

export {
  Router
};
