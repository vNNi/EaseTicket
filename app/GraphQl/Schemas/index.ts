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
    buyers: [User]!
}
type User {
    _id: ID!
    name: String!
    cpf: String!
    createdAt: String!
    sessionsWatched: [ID]!
}
type NewUser {
    _id: ID!
    name: String!
    cpf: String!
    createdAt: String!
}

input movieInput {
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
type Users{
    users: [User]!
}


type RootQuery {
    verifyToken(tokenInput: tokenInput): Payload
    getAllUsers: Users
    getUser(userId: ID): User
}
type RootMutation {
    createSession(sessionInput: sessionInput): Session
    createUser(userInput: userInput): NewUser
    createBuy(buyInput: buyInput): Session
}
schema {
    query: RootQuery
    mutation: RootMutation
}`);
export default schema;
