import mongoose, { Schema, mongo } from 'mongoose';
import ISession from '../Interfaces/Session';

const sessionSchema: Schema = new Schema({
    movie: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
    price: {
        type: Number,
        required: true,
    },
    openAt: {
        type: Date,
        required: true,
    },
    closeAt: {
        type: Date,
        required: true,
    },
    sessionLimit: {
        type: Number,
        required: true,
    },
    buyers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            unique: true,
        },
    ],
});

export default mongoose.model<ISession>('Session', sessionSchema);
