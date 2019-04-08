import mongoose, { Schema } from 'mongoose';

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
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

export default mongoose.model('User', userSchema);
