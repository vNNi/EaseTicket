import express from 'express';
import cors from 'cors';
import graphqlHttp from 'express-graphql';
import Schemas from '../GraphQl/Schemas/index';
import Resolvers from '../GraphQl/Resolvers/index';
class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
    }
    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(
            '/graphql',
            graphqlHttp({
                schema: Schemas,
                rootValue: Resolvers,
                graphiql: true,
            }),
        );
    }
}
export default new App().express;
