import mongoose from 'mongoose';

interface User extends mongoose.Document {
    name: string;
    cpf: string;
    createdAt: Date;
    sessionsWatched: mongoose.Schema.Types.ObjectId[];
}
export default User;
