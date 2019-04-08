import Session from '../../Models/Sessions';

const Movie = {
    createSession: args => {
        const session = new Session({
            movie: {
                title: args.sessionInput.movieInput.title,
                description: args.sessionInput.movieInput.description,
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

export default Movie;
