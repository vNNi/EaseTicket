import mongoose, { Schema, mongo } from 'mongoose';

interface Session extends mongoose.Document {
    movie: {
        title: string;
        description: string;
    };
    price: number;
    openAt: Date;
    closeAt: Date;
    sessionLimit: number;
    buyers: mongoose.Types.ObjectId[];
}

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
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
});

export default mongoose.model<Session>('Session', sessionSchema);
