import authResolver from '../Resolvers/Auth';
import sessionResolver from '../Resolvers/Session';
const rootResolver = {
    ...sessionResolver,
    ...authResolver,
};

export default rootResolver;
