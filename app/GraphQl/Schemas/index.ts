import { buildSchema } from 'graphql';
const schema = buildSchema(`
type Token {
    token: String!
}
type Payload {
    email: String!
    userId: String!
}
type Movie: {
        title: String!
        description: String
}
type Session {
    _id: ID!
    movie: Movie!
    price: Number
    openAt: String
    closeAt: String
    sessionLimit: Number,
    buyers: [String]!,
}
input sessionInput {
    movie: Movie!,
    price: Number!,
    openAt: String!,
    closeAt: String!,
    sessionLimit: Number!,
    buyers: [String]!,
}
input tokenInput {
    token: String!
}
type RootQuery {
    verifyToken(tokenInput: tokenInput): Payload,
    createSession(sessionInput: sessionInput): Session,
}
schema {
    query: RootQuery
}`);
export default schema;
