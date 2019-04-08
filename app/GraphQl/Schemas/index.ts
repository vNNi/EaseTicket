import { buildSchema } from 'graphql';
const schema = buildSchema(`
type Token {
    token: String!
}
type Payload {
    email: String!
    userId: String!
}
input tokenInput {
    token: String!
}
type RootQuery {
    verifyToken(tokenInput: tokenInput): Payload,
}
schema {
    query: RootQuery
}`);
export default schema;
