import mongoose, { Schema } from 'mongoose';

interface User extends mongoose.Document {
    name: string;
    cpf: string;
    createdAt: Date;
    sessionWatched: mongoose.Schema.Types.ObjectId[];
}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    sessionsWatched: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Session',
        },
    ],
});

export default mongoose.model<User>('User', userSchema);
