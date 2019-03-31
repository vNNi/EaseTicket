import express from 'express';
import cors from 'cors';
import graphqlHttp from 'express-graphql';
import { buildSchema } from 'graphql';

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
                schema: buildSchema(`
                type Event {
                    _id: ID!,
                    title: String!,
                    description: String!,
                    price: Float!,
                    date: String!
                }
                input EventInput {
                    title: String!,
                    description: String!,
                    price: Float!,
                    date: String!
                }
                type RootQuery {
                    events: [Event!]!,
                    name: String!
                }
                type RootMutation {
                    createEvent(eventInput: EventInput): Event
                }
                schema {
                    query: RootQuery
                    mutation: RootMutation
                }`),
                rootValue: {},
                graphiql: true,
            }),
        );
    }
}
export default new App().express;
