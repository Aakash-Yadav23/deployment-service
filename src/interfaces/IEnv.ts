export interface EnvConfig {
    PORT: number;
    NODE_ENV: 'development' | 'production' | 'test';
    DATABASE_URL: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_REGION: string;
    JWT_SECRET: string;
    REDIS_URL?: string;
    CORS_ORIGIN?: string;
    S3_BUCKET: string;
    LOG_LEVEL?: 'info' | 'warn' | 'error';
    EMAIL_USERNAME?: string;
    EMAIL_PASSWORD?: string;
    EMAIL_SERVICE?: string;
}

