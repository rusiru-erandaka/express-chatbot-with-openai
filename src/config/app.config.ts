import dotenv from 'dotenv';

dotenv.config();

export const APP_CONFIG = {
    PORT: process.env.PORT || 3000,
    APP_ENV: process.env.APP_ENV || 'dev',
    APP_HOST: process.env.APP_HOST || 'localhost',
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY || '***************',
    OPEN_AI_MODEL: process.env.OPEN_AI_MODEL || 'gpt-4o-mini',
}