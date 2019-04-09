import Session from '../../Models/Sessions';

const SessionResolver = {
    createSession: args => {
        console.log(args);
        const session = new Session({
            movie: {
                title: args.sessionInput.movie.title,
                description: args.sessionInput.movie.description,
            },
            price: args.sessionInput.price,
            openAt: args.sessionInput.openAt,
            closeAt: args.sessionInput.closeAt,
            sessionLimit: args.sessionInput.sessionLimit,
            buyers: [],
        });
        return session
            .save()
            .then(result => {
                return result;
            })
            .catch(err => {
                throw new Error(err);
            });
    },
};

export default SessionResolver;
