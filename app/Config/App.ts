import express from 'express';
import cors from 'cors';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
    }
    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(express.urlencoded({ extended: true }));
    }
}
export default new App().express;
