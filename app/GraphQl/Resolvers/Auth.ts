import jwt from 'jsonwebtoken';
import User from '../../Models/Users';
import Session from '../../Models/Sessions';
const auth = {
    verifyToken: (token: any) => {
        const key: any = process.env.JWT_PUBLICKEY;
        try {
            const decoded = jwt.verify(token.tokenInput.token.toString(), key);
            return decoded;
        } catch (err) {
            return err;
        }
    },

    verifyMovierTicket: (sessionId: string, userId: string) => {
        const pass = {
            happy: 'ticket',
            passed: true,
        };
        const denied = {
            sad: 'ticket',
            passed: false,
        };
        User.findById(userId)
            .then(user => {
                if (!user) {
                    throw new Error('Create a User before...');
                }
                const session = Session.findById(sessionId).then(result => {
                    if (result) {
                        if (result.buyers.includes(user._id)) {
                            return pass;
                        } else {
                            return denied;
                        }
                    } else {
                        throw new Error('Session doesnt exist');
                    }
                });
            })
            .catch(err => {
                throw new Error(err);
            });
    },
};

export default auth;
