import Session from '../../Models/Sessions';
import mongoose, { Schema } from 'mongoose';

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
    createBuy: args => {
        var sessionIdMock: any = '5cabe274239e694f28e9c953';
        const userId = args.buyInput.userId;
        const sessionId = args.buyInput.sessionId;
        return Session.findById(sessionId)
            .populate('buyers')
            .then(result => {
                if (result) {
                    if (result.buyers.length > result.sessionLimit) {
                        throw new Error('This sessions is full');
                    }
                    result.buyers.push(userId);
                    result.save();
                    return result;
                }
            })
            .catch(err => {
                throw new Error(err);
            });
    },
};

export default SessionResolver;
