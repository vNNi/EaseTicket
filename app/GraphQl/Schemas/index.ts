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
    openAt: String!
    closeAt: String!
    sessionLimit: Int!
    buyers: [String]!
}
type User {
    _id: ID!
    name: String!
    cpf: String!
    createdAt: String!
    sessionWatched: [ID]!
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
input userInput {
    name: String!
    cpf: String!
    createdAt: String!
}
input buyInput {
    userId: ID!
    sessionId: ID!
}
type RootQuery {
    verifyToken(tokenInput: tokenInput): Payload
}
type RootMutation {
    createSession(sessionInput: sessionInput): Session
    createUser(userInput: userInput): User
    createBuy(buyInput: buyInput): Session
}
schema {
    query: RootQuery
    mutation: RootMutation
}`);
export default schema;
