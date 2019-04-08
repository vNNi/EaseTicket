import { buildSchema } from 'graphql';
const tokeType = `
type Token {
    token: String!
}
`;
const schema = buildSchema(`
${tokeType}
type Payload {
    email: String!
    userId: String!
}
type Movie {
        title: String!
        description: String
}
type Session {
    _id: ID!
    movie: Movie!
    price: Float!
    openAt: String
    closeAt: String
    sessionLimit: Int
    buyers: [String]!
}
input movieInput{
    title: String!
    description: String
}
input sessionInput {
    movie: movieInput!
    price: Float!
    openAt: String!
    closeAt: String!
    sessionLimit: Int!
}
input tokenInput {
    token: String!
}
type RootQuery {
    verifyToken(tokenInput: tokenInput): Payload
}
type RootMutation {
    createSession(sessionInput: sessionInput): Session
}
schema {
    query: RootQuery
    mutation: RootMutation
}`);
export default schema;
