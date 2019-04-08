import jwt from 'jsonwebtoken';
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
};

export default auth;
