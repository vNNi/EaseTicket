import IUser from 'Interfaces/User';
import mongoose from 'mongoose';
interface Session extends mongoose.Document {
    movie: {
        title: string;
        description: string;
    };
    price: number;
    openAt: Date;
    closeAt: Date;
    sessionLimit: number;
    buyers: IUser[];
}

export default Session;
