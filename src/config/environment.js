import dotenv from 'dotenv';

dotenv.config();

['DATABASE', 'PORT'].forEach(name => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

export default {
  DATABASE: process.env.DATABASE,
  PORT: process.env.PORT,
};
