import User from '../../Models/Users';

const user = {
    createUser: args => {
        console.log(args);
        const user = new User({
            name: args.userInput.name,
            cpf: args.userInput.cpf,
            createdAt: args.userInput.createdAt,
            sessionsWatched: [],
        });
        return User.findOne({ cpf: args.userInput.cpf }).then(result => {
            if (result) {
                throw new Error('User already exist');
            }
            return user
                .save()
                .then(result2 => {
                    console.log(result2);
                    return result2;
                })
                .catch(err => {
                    throw new Error(err);
                });
        });
    },
};

export default user;
