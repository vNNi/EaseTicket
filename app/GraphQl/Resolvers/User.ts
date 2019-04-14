import User from '../../Models/Users';

const user = {
    createUser: (args: any) => {
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
                    return result2;
                })
                .catch(err => {
                    throw new Error(err);
                });
        });
    },
    getUser: (args: any) => {
        var id = args.userId || undefined;
        if (id) {
            return User.findById(id).then(user => {
                if (user) {
                    return user;
                } else {
                    throw new Error('User undefined');
                }
            });
        }
    },
    getAllUsers: (args: any) => {
        return User.find().then(users => {
            console.log(users);
            return {
                users: users,
            };
        });
    },
};

export default user;
