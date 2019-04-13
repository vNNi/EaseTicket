import authResolver from '../Resolvers/Auth';
import sessionResolver from '../Resolvers/Session';
import userResolver from '../Resolvers/User';
const rootResolver = {
    ...userResolver,
    ...sessionResolver,
    ...authResolver,
};

export default rootResolver;
