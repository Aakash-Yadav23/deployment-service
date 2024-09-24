import express, { Application, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';

import { connectDb } from '../config/connectDb';

export class Express {

    public express: Application;
    constructor() {
        this.express = express();
        this.setUpMiddleware();
        // this.setupDatabase();
    }

    public setUpMiddleware = () => {
        this.express.use(helmet({
            contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
        }));
        this.express.use(cors());
        this.express.use(compression());
        this.express.use(morgan('combined'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));

        this.express.get('/', (req: Request, res: Response) => {
            res.json('🔥ok');
        });

    }

    private setupDatabase = async () => {

        await connectDb();

    }
}