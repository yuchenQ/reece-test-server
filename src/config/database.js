import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './logger';
import environment from './environment';

export default async function connectDB() {
  dotenv.config();

  await mongoose.connect(environment.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

mongoose.connection
  .on('open', () => logger.info('Info from <db>: Connection opened'))
  .on('error', error => logger.error(error))
  .on('close', () => logger.warn('Warning from <db>: Connection closed'))
  .on('connected', () => logger.info('Info from <db>: Database connected'))
  .on('disconnected', () => logger.warn('Warning from <db>: Database disconnected'));
