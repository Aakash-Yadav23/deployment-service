import path from 'path';
import dotenv from 'dotenv';
import { EnvConfig } from '../interfaces/IEnv';

dotenv.config();

const getConfig = (): EnvConfig => {
    const config: EnvConfig = {
        PORT: parseInt(process.env.PORT!),
        NODE_ENV: process.env.NODE_ENV as 'development' | 'production' | 'test',
        DATABASE_URL: process.env.DATABASE_URL || '',
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
        AWS_REGION: process.env.AWS_REGION || '',
        S3_BUCKET: process.env.S3_BUCKET || '',
        JWT_SECRET: process.env.JWT_SECRET || '',
        REDIS_URL: process.env.REDIS_URL,
        CORS_ORIGIN: process.env.CORS_ORIGIN,
        LOG_LEVEL: process.env.LOG_LEVEL as 'info' | 'warn' | 'error',
        EMAIL_SERVICE: process.env.EMAIL_SERVICE,
        EMAIL_USERNAME: process.env.EMAIL_USERNAME,
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    };

    const requiredVars = [
        'PORT', 'NODE_ENV', 'DATABASE_URL', 'AWS_ACCESS_KEY_ID',
        'AWS_SECRET_ACCESS_KEY', 'AWS_REGION', 'S3_BUCKET',
        'JWT_SECRET', 'REDIS_URL', 'CORS_ORIGIN', 'LOG_LEVEL',
        'EMAIL_SERVICE', 'EMAIL_USERNAME', 'EMAIL_PASSWORD'
    ];

    for (const variable of requiredVars) {
        if (!process.env[variable]) {
            throw new Error(`Missing required environment variable: ${variable}`);
        }
    }


    return config;
};

export default getConfig;
